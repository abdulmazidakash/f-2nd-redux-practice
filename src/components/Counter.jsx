// src/components/Counter.jsx
import Button from "./Button";

export default function Counter({ count, onIncrement, onDecrement}) {

  return (
    <div className="bg-rose-100 p-5 rounded-lg shadow-md text-center">
      <h2 className="text-xl font-semibold">Count: {count}</h2>
      <div className="mt-4 flex justify-center space-x-4">
        <Button type={'btn-success'} className={'btn btn-accent'} handler={onIncrement} label={'Increment'} />
        {/* <Button onClick={() => setCount(0)} label="Reset" /> */}
        <Button handler={onDecrement} label={'Decrement'} />
      </div>
    </div>
  );
}