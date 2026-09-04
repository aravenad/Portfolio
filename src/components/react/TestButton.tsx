import { useState } from "react";

export default function TestButton() {
  const [count, setCount] = useState(0);

  return (
    <button
      className="rounded-lg border border-zinc-700 px-4 py-2"
      onClick={() => setCount((value) => value + 1)}
    >
      React fonctionne : {count}
    </button>
  );
}