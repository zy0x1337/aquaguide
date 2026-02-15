import * as RadixSlider from '@radix-ui/react-slider';

interface SliderProps {
  min: number;
  max: number;
  value: [number, number];
  onChange: (value: [number, number]) => void;
  step?: number;
  formatLabel?: (value: number) => string;
}

export const Slider = ({ min, max, value, onChange, step = 1, formatLabel }: SliderProps) => {
  const format = formatLabel || ((v: number) => v.toString());

  return (
    <div>
      <div className="flex justify-between text-sm text-slate-600 mb-2">
        <span className="font-semibold">{format(value[0])}</span>
        <span className="font-semibold">{format(value[1])}</span>
      </div>
      <RadixSlider.Root
        className="relative flex items-center select-none touch-none w-full h-5"
        value={value}
        onValueChange={onChange as any}
        min={min}
        max={max}
        step={step}
        minStepsBetweenThumbs={1}
      >
        <RadixSlider.Track className="bg-slate-200 relative grow rounded-full h-2">
          <RadixSlider.Range className="absolute bg-indigo-600 rounded-full h-full" />
        </RadixSlider.Track>
        <RadixSlider.Thumb className="block w-5 h-5 bg-white border-2 border-indigo-600 rounded-full hover:bg-indigo-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 cursor-pointer transition-all" />
        <RadixSlider.Thumb className="block w-5 h-5 bg-white border-2 border-indigo-600 rounded-full hover:bg-indigo-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 cursor-pointer transition-all" />
      </RadixSlider.Root>
    </div>
  );
};
