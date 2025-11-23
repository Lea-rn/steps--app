import { useState } from "react";

function Counterchallange() {
  const [count, setCount] = useState(0);
  const [step , setStep] = useState (1) ; 
  const date = new Date("November 23 2025");
  date.setDate(date.getDate() + count);
  return (
    <div style={{ textAlign: "center" }}>

            <div>
        <button onClick={() => setStep((cur) => cur - 1)}>-</button>
        <span>Step : {step}</span>
        <button onClick={() => setStep((cur) => cur + 1)}>+</button>
      </div>
      <div>
        <button onClick={() => setCount((cur) => cur - step)}>-</button>
        <span>Count : {count}</span>
        <button onClick={() => setCount((cur) => cur + step)}>+</button>
      </div>

      <span>
        {/* <span>
                {count === 0 && <span> Today is</span>}
             {count > 0 && `${count} days from today is`}
              {count < 0 && `${Math.abs(count)} days ago  is`}
            </span> */}

        {count === 0
          ? "today is"
          : count > 0
          ? `${count} days from today is`
          : `${Math.abs(count)} days ago  is`}
      </span>

      <span>{date.toDateString()}</span>
    </div>
  );
}

export default Counterchallange;
