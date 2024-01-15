export default function PlanTable(props) {
  return(
    <tr>
      <td>
        <div className="d-flex align-items-center">
          <div>
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

