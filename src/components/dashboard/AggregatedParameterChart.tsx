import { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { format } from 'date-fns';

interface AggregatedParameterChartProps {
  trends: any[];
}

const parameters = [
  { key: 'avgTempC', label: 'Avg Temperature (°C)', color: '#ef4444', enabled: true },
  { key: 'avgPh', label: 'Avg pH', color: '#3b82f6', enabled: true },
  { key: 'avgAmmonia', label: 'Avg Ammonia (ppm)', color: '#f59e0b', enabled: false },
  { key: 'avgNitrite', label: 'Avg Nitrite (ppm)', color: '#ec4899', enabled: false },
  { key: 'avgNitrate', label: 'Avg Nitrate (ppm)', color: '#8b5cf6', enabled: false },
];

const AggregatedParameterChart = ({ trends }: AggregatedParameterChartProps) => {
  const [visibleParams, setVisibleParams] = useState<Set<string>>(
    new Set(parameters.filter(p => p.enabled).map(p => p.key))
  );

  // Format data for chart
  const chartData = trends.map(trend => ({
    ...trend,
    dateFormatted: format(new Date(trend.date), 'MMM d'),
    fullDate: format(new Date(trend.date), 'MMM d, yyyy'),
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

  if (trends.length === 0) {
    return (
      <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-12 text-center">
        <p className="text-slate-500">No parameter data yet. Add readings to see trends!</p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-6">
      <h2 className="text-xl font-bold text-slate-900 mb-4">Parameter Trends (All Tanks)</h2>
      
      {/* Parameter Toggles */}
      <div className="flex flex-wrap gap-2 mb-6">
        {parameters.map((param) => {
          const hasData = chartData.some(d => (d as any)[param.key] != null);
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
      <ResponsiveContainer width="100%" height={350}>
        <LineChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
          <XAxis
            dataKey="dateFormatted"
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
            formatter={(value: any) => {
              if (value == null) return 'N/A';
              return typeof value === 'number' ? value.toFixed(2) : value;
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
                connectNulls
              />
            );
          })}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default AggregatedParameterChart;
