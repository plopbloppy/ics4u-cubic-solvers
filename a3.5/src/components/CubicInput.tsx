import { useState, useRef } from "react";

export const QuadraticSolver = () => {
  const [a, setA] = useState<number>(0);
  const [b, setB] = useState<number>(0);
  const [c, setC] = useState<number>(0);
  const [d, setD] = useState<number>(0);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    const discriminant = b * b - 4 * a * c;

    if (inputRef.current) {
      if (discriminant < 0) {
        inputRef.current.value = "No Roots";
      } else if (discriminant > 0) {
        const rootOne = (-b + Math.sqrt(discriminant)) / (2 * a);
        const rootTwo = (-b - Math.sqrt(discriminant)) / (2 * a);
        inputRef.current.value = `x1=${rootOne}, x2=${rootTwo}`;
      } else {
        const rootOne = (-b + Math.sqrt(discriminant)) / (2 * a);
        inputRef.current.value = `x=${rootOne}`;
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#667eea] to-[#764ba2] p-4">
      <div className="bg-white p-10 rounded-2xl shadow-[0_15px_40px_rgba(0,0,0,0.15)] w-full max-w-md">
        <h1 className="text-center text-2xl font-bold text-gray-800 mb-7">
          Cubic Solver
        </h1>
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <label className="font-semibold text-gray-700 text-sm">
            a value:
          </label>
          <input
            type="number"
            value={a}
            onChange={(e) => setA(Number(e.target.value))}
            required
            className="p-2.5 border border-gray-300 rounded-lg text-base focus:outline-none focus:border-[#667eea] focus:ring-2 focus:ring-[#667eea]/20"
          />

          <label className="font-semibold text-gray-700 text-sm">
            b value:
          </label>
          <input
            type="number"
            value={b}
            onChange={(e) => setB(Number(e.target.value))}
            required
            className="p-2.5 border border-gray-300 rounded-lg text-base focus:outline-none focus:border-[#667eea] focus:ring-2 focus:ring-[#667eea]/20"
          />

          <label className="font-semibold text-gray-700 text-sm">
            c value:
          </label>
          <input
            type="number"
            value={c}
            onChange={(e) => setC(Number(e.target.value))}
            required
            className="p-2.5 border border-gray-300 rounded-lg text-base focus:outline-none focus:border-[#667eea] focus:ring-2 focus:ring-[#667eea]/20"
          />

          <label className="font-semibold text-gray-700 text-sm">
            d value:
          </label>
          <input
            type="number"
            value={d}
            onChange={(e) => setC(Number(e.target.value))}
            required
            className="p-2.5 border border-gray-300 rounded-lg text-base focus:outline-none focus:border-[#667eea] focus:ring-2 focus:ring-[#667eea]/20"
          />

          <button className="font-semibold text-gray-700 text-sm">Save</button>
        </form>
      </div>
    </div>
  );
};