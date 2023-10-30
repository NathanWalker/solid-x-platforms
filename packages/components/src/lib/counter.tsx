import { createSignal } from "solid-js";

export function Counter() {
  const [count, setCount] = createSignal(0);
  return (
    <button
      className="w-[200] rounded-full bg-gray-100 border-2 border-gray-300 focus:border-gray-400 active:border-gray-400 px-[2rem] py-[1rem] text-black"
      onClick={() => setCount(count() + 1)} 
    >
      Clicks: {count()}
    </button>
  );
}

//on:tap={() => setCount(count() + 1)}
