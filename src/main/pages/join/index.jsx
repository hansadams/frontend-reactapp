import NavBar from "../../components/NavBar";
import PlanCard from "./components/PlanCard";
import SignUp from "./components/SignUp";
import Plan from "../../../util/PlanController"
import { useCallback, useState } from "react";

const plans = await Plan.getPlans();

export default function Join() {

  const [selection, setSelection] = useState(null);

  const addPlan = useCallback(
    (plan) => {
    
    setSelection(plan);

    },[]);


    console.log(selection)
    
  

  return (<>
  <NavBar /><main>
    <div className="container-fluid join">
      <div className="row text-center justify-content-center">
        <div className="col-md-9">
          <h1>JOIN THE FRONTEND.</h1>
          <p>Choose your plan.</p>
        </div>
      </div>
   
    <div className="container-fluid padd">
      <div className="row justify-content-center ">
        <div className="col-12">
          <div className="row all-cards-container justify-content-center  ">
          
          {selection ? <SignUp selection={selection} /> : null }
          
           {plans.map((plan, key) => {
        return (
          selection ? null : <PlanCard
            plan={plan}
            key={key}
            onAdd={addPlan}/>
        );
      })}
      

          
          </div>
        </div>
      </div>
    </div> </div>
</main>
  </>
   
  );
}