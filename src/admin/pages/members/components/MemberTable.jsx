export default function MemberTable(props) {
  return(
    <tr>
      <td>
        <div className="d-flex align-items-center">
          <div className="ms-3">
            <p className="fw-bold mb-1">{`${props.member.firstname} ${props.member.lastname}`}</p>
          </div>
        </div>
      </td>

      <td className="hide">
        <p className="fw-normal mb-1">{props.member.contact}</p>
      </td>

      <td className="hide">
      <p className="fw-normal mb-1">{props.member.dob}</p>
      </td>
      <td className="hide">
      <p className="fw-normal mb-1">{props.member.email}</p>
      </td>
      <td>
      <p className="fw-normal mb-1">{props.plan}</p>
      </td>
    </tr>
  );
}

