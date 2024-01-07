import gold from "../../../../assets/img/gold.jpg"

export default function SelectionCard(props) {

   
  return (<div className="card-container col-md-5 col-lg-3 m-1">
<div className="row card-info align-items-center">
    <div className="col-5 col-md-12 planimage"><img className="feature" src={gold} /></div>
  <div className='col-7 col-md-12 text-center'>  <h1>{props.plan.name}</h1>
  <h3>
  ${props.plan.price}<span className="small">/month</span>
  </h3>
  <p>{props.plan.description}</p></div>

</div>
</div>
   
  );
}