import { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { format } from 'date-fns';
import { ParameterReading } from '../../lib/supabase/tankHistory';

interface ParameterChartProps {
  readings: ParameterReading[];
}

const parameters = [
  { key: 'tempC', label: 'Temperature (°C)', color: '#ef4444', enabled: true },
  { key: 'ph', label: 'pH', color: '#3b82f6', enabled: true },
  { key: 'ammonia', label: 'Ammonia (ppm)', color: '#f59e0b', enabled: false },
  { key: 'nitrite', label: 'Nitrite (ppm)', color: '#ec4899', enabled: false },
  { key: 'nitrate', label: 'Nitrate (ppm)', color: '#8b5cf6', enabled: false },
  { key: 'gh', label: 'GH (°dGH)', color: '#14b8a6', enabled: false },
  { key: 'kh', label: 'KH (°dKH)', color: '#06b6d4', enabled: false },
];

const ParameterChart = ({ readings }: ParameterChartProps) => {
  const [visibleParams, setVisibleParams] = useState<Set<string>>(
    new Set(parameters.filter(p => p.enabled).map(p => p.key))
  );

  // Sort readings by date (oldest first for chart)
  const sortedReadings = [...readings]
    .sort((a, b) => new Date(a.measuredAt).getTime() - new Date(b.measuredAt).getTime())
    .map(reading => ({
      ...reading,
      date: format(new Date(reading.measuredAt), 'MMM d'),
      fullDate: format(new Date(reading.measuredAt), 'MMM d, yyyy HH:mm'),
    }));

  const toggleParameter = (key: string) => {
    setVisibleParams(prev => {
      const newSet = new Set(prev);
      if (newSet.has(key)) {
        newSet.delete(key);
      } else {
        newSet.add(key);
      }
      return newSet;
    });
  };

  if (readings.length === 0) {
    return (
      <div className="text-center py-12 text-slate-500">
        <p>No parameter readings yet. Add your first reading to see trends!</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {/* Parameter Toggles */}
      <div className="flex flex-wrap gap-2">
        {parameters.map((param) => {
          const hasData = sortedReadings.some(r => (r as any)[param.key] != null);
          if (!hasData) return null;

          return (
            <button
              key={param.key}
              onClick={() => toggleParameter(param.key)}
              className={`px-4 py-2 rounded-lg font-medium text-sm transition-all ${
                visibleParams.has(param.key)
                  ? 'shadow-md'
                  : 'opacity-50 hover:opacity-75'
              }`}
              style={{
                backgroundColor: visibleParams.has(param.key) ? param.color : '#e2e8f0',
                color: visibleParams.has(param.key) ? 'white' : '#64748b',
              }}
            >
              {param.label}
            </button>
          );
        })}
      </div>

      {/* Chart */}
      <div className="bg-white rounded-xl border-2 border-slate-200 p-4">
        <ResponsiveContainer width="100%" height={400}>
          <LineChart data={sortedReadings}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
            <XAxis
              dataKey="date"
              stroke="#64748b"
              style={{ fontSize: '12px' }}
            />
            <YAxis
              stroke="#64748b"
              style={{ fontSize: '12px' }}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: 'white',
                border: '2px solid #e2e8f0',
                borderRadius: '12px',
                padding: '12px',
              }}
              labelFormatter={(label, payload) => {
                if (payload && payload.length > 0) {
                  return payload[0].payload.fullDate;
                }
                return label;
              }}
            />
            <Legend
              wrapperStyle={{ paddingTop: '20px' }}
              iconType="line"
            />
            {parameters.map((param) => {
              if (!visibleParams.has(param.key)) return null;
              return (
                <Line
                  key={param.key}
                  type="monotone"
                  dataKey={param.key}
                  name={param.label}
                  stroke={param.color}
                  strokeWidth={2}
                  dot={{ fill: param.color, r: 4 }}
                  activeDot={{ r: 6 }}
                />
              );
            })}
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ParameterChart;
