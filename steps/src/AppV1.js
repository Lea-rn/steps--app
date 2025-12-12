import { useState } from "react";

const messages = [
  "Learn  React ",
  "Apply for jobs 👜",
  "Invest your new incomes 💰",
];

function App() {
  let [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true); ////

  function handlePrevious() {
    if (step > 1) setStep((current) => current - 1);
  }

  function handleNext() {
    if (step < 3) {
      setStep((current) => current + 1);
    }

    ///// bad practice :::
    // test.name = "mohamed"
    // setTest ({name:"peter"})
  }

  return (
    <div className="app-container">
      <button onClick={() => setIsOpen((is) => !is)} className="btn-close">
        &times;
      </button>
      {/* {isOpen ?  <button onClick={()=> setIsOpen(false)} className="btn-close">&times;</button> : 
      <button onClick={()=> setIsOpen(true)} className="btn-close">open</button> 
      } */}

      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={`${step >= 1 ? "active" : ""}`}>1</div>
            <div className={`${step >= 2 ? "active" : ""}`}>2</div>
            <div className={`${step >= 3 ? "active" : ""}`}>3</div>
          </div>

          <StepMessage step={step} >

            {messages[step-1]}
          </StepMessage>

          
          <Button

          bgColor="#c05353ff"
          textColor="black"
          onClick={()=> alert(`Learn how to ${messages[step-1]}`)}
          >
         Learn now
          </Button>

            





          <div className="buttons">
            <Button
              bgColor="rgba(121, 80, 242, 1)"
              textColor="#fff"
              onClick={handlePrevious}
            >
              <span>👈</span> Previous
            </Button>

            <Button
              bgColor="rgba(121, 80, 242, 1)"
              textColor="#fff"
              onClick={handleNext}
            >
              Next <span>👉</span>
            </Button>

       
          </div>
        </div>
      )}





    </div>
  );
}

export default App;



   function StepMessage ({step , children}){
   return    (
         <p className="message">
            step {step} : {children}
          </p>

   )

   }


function Button({ textColor, bgColor, onClick , children }) {
  return (
    <button
      style={{
        backgroundColor: bgColor,
        color: textColor,
      }}
      onClick={onClick}
    >
      {children}
    </button>
  );
}


