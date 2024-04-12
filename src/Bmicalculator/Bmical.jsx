import "../Bmicalculator/Bmi.css";
import React, { useState } from "react";

const Bmical = () => {
    const [weight , setWeight] = useState();
    const [ height , setHeight] = useState();
    const [Bmi , setBmi] = useState('');
    const [Message , setMessage ] = useState('');

const Bmicalculator = (event)=>{
    event.preventDefault();
        console.log(event);
    if(weight===0 || height===0 ){
        alert("Enter Valid Height and weight")
     
    }
    else{
        let Bmi = (weight/(height*height)*703)
        setBmi(Bmi.toFixed(1))

        if(Bmi<25){
            setMessage("you are underweight") 
        }
        else if(Bmi>= 25 && Bmi<30){
            setMessage("you are healthy weight")
        }
        else {
            setMessage("you are unhealthy ")
        }
    }
}
  return (
    <div className="container">
      <div className="form">
        <form onSubmit={Bmicalculator}>
          <div className="weight">
            <label htmlFor="">weight||LBS</label>
            <input type="text" placeholder="Enter your weight" value={weight} onChange={(event)=>setWeight(event.target.value)}/>
          </div>
          <div className="height">
            <label htmlFor="">Height||FEET</label>
            <input type="text" placeholder="Enter your hegiht"  value={height} onChange={(event)=>setHeight(event.target.value)}/>
          </div>
          <div className="button">
            <button>Submit</button>
            <button>Reset</button>

            <div className="text">
              <h4>your bmi {Bmi} </h4>
              <h3>{Message}</h3>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Bmical;
