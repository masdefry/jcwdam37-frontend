import { useCounterStore } from '../../stores/useCounterStore';

export default function GlobalStatePage() {
  const { count, decrement, increment } = useCounterStore();

  return (
    <>
      <div>
        <button onClick={decrement}>Minus</button>
        <h1>{count}</h1>
        <button onClick={() => increment(3)}>Plus</button>
      </div>
    </>
  );
}
