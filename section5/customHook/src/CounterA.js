import { useCounter } from "./hooks";
import { CounterText } from "./CounterText";

export const CounterA = () => {
  const { count, countAdd, countSub, countReset } = useCounter(0);
  return (
    <div className="counterContainer">
      <h1>カウンターA</h1>
      <CounterText count={count} />
      <button onClick={countAdd}>ボタン＋１</button>
      <button onClick={countSub}>ボタン-１</button>
      <button onClick={countReset}>リセット</button>
    </div>
  );
};
