import Plan from "../../../../util/PlanController";

console.log(Plan.getPlans())

export default function PlanTable(props) {
    return(
<tr>
      <td>
        <div className="d-flex align-items-center">
          <img
            src={props.plan.imageURL}
            alt=""
            style={{ width: 45, height: 45 }}
            className="rounded-circle"
          />
          <div className="ms-3">
            <p className="fw-bold mb-1">{props.plan.name}</p>
          </div>
        </div>
      </td>
      <td>
        <p className="fw-normal mb-1">${props.plan.price}/month</p>
      </td>

      <td>
      <a href={`/admin/plans/${props.plan.id}`}>
        <button type="button" className="btn btn-link btn-sm btn-rounded">
          Edit
        </button></a>
      </td>
    </tr>
   
  );
}

