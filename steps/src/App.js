import { useState } from "react";

const messages = [
  "Learn  React ",
  "Apply for jobs 👜",
  "Invest your new incomes 💰",
];

function App() {

   let [step , setStep] = useState(1)
   const [test ,setTest] = useState({name:"ali"})   
  


   function handlePrevious (){
    
     if (step > 1)  setStep(step - 1)

      

   }

   function handleNext (){
     if (step < 3 )  setStep (step + 1 )

       
      ///// bad practice ::: 
      // test.name = "mohamed"
      // setTest ({name:"peter"})
   }


  return (
    <div className="steps">
      <div className="numbers">
        <div className={`${step >= 1 ? "active" : ""}`}>1</div>
        <div className={`${step >= 2 ? "active" : ""}`}>2</div>
        <div className={`${step >= 3 ? "active" : ""}`}>3</div>
      </div>

      <p className="message">
        step {step} : {messages[step - 1]}
        {test.name}
      </p>

      <div className="buttons">


        <button
          style={{ backgroundColor: "rgba(121, 80, 242, 1)", color: "#fff" }}
          // onClick={() => alert("Previous")}
          // onClick={function(){return alert("previous")}}
          // onMouseEnter={()=> console.log("enter")}
          // onMouseLeave={()=> console.log("leave") }
          onClick={handlePrevious}
          
        >
          Previous
        </button>





        <button
          style={{ backgroundColor: "#7950f2", color: "#fff" }}
          // onClick={() => alert("next")}
          onClick={handleNext}
        >
          next
        </button>



      </div>
    </div>
  );
}

export default App;
