import { createSignal } from "solid-js";
import { Button } from './button';

export function Counter() {
  const [count, setCount] = createSignal(0);
  return (
    // @ts-ignore
    <Button
      className="w-[200] rounded-full bg-gray-100 border-2 border-gray-300 focus:border-gray-400 active:border-gray-400 px-[2rem] py-[1rem] text-black"
      onTap={() => setCount(count() + 1)} 
    >
      Clicks: {count()}
    </Button>
  );
}
