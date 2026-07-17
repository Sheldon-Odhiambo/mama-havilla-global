import { motion, useInView, useMotionValue, animate } from 'motion/react';
import { useEffect, useRef } from 'react';

function Counter({ from, to }: { from: number; to: number }) {
  const nodeRef = useRef<HTMLSpanElement>(null);
  const isInView = useInView(nodeRef, { once: true });
  const count = useMotionValue(from);

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, to, { duration: 2 });
      return controls.stop;
    }
  }, [isInView, to, count]);

  useEffect(() => {
    count.on('change', (latest) => {
      if (nodeRef.current) {
        nodeRef.current.textContent = Math.round(latest).toString();
      }
    });
  }, [count]);

  return <span ref={nodeRef} />;
}

export default function Stats() {
  const stats = [
    { label: 'Years of Foundation', value: 35 },
    { label: 'Monthly Donate', value: 68 },
    { label: 'Global Partners', value: 8000 },
    { label: 'Projects Completed', value: 93 },
  ];
  
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {stats.map((stat, index) => (
          <div key={index} className="p-4 border-r border-gray-100 last:border-none">
            <h3 className="text-4xl font-bold text-green-700 mb-2">
              <Counter from={0} to={stat.value} />+
            </h3>
            <p className="text-gray-600 font-medium">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
