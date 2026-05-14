import { counterItems } from "../constants";
import CountUp from "react-countup";

const AnimatedCounter = () => {
  return (
    <div id="counter" className="padding-x-lg xl:mt-0 mt-32">
      <div className="mx-auto grid grid-cols-2 gap-4 md:gap-6">
        {counterItems.map((item) => (
          <div key={item.label} className="bg-zinc-900 rounded-lg p-7 md:p-10 flex flex-col justify-center">
            <div className="counter-number text-white text-4xl md:text-5xl font-bold mb-2">
              <CountUp end={item.value} decimals={item.value % 1 !== 0 ? 1 : 0} suffix={item.suffix} enableScrollSpy scrollSpyOnce />
            </div>
            <div className="text-white-50 text-base md:text-lg">
              {item.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AnimatedCounter;