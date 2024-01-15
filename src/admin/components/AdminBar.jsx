/* eslint-disable jsx-a11y/anchor-is-valid */
import logo from '../../assets/img/logo.png'
import nas from '../../assets/img/nas.png'

export default function AdminBar() {

  const handleClick = async e => {
    localStorage.clear();
    // eslint-disable-next-line no-restricted-globals
    location.reload();
  }

  return (
    <nav className="navbar sticky-top navbar-expand-lg navbar-dark container-fluid ">
      <a className="navbar-brand" href="/">
        <img src={logo} alt="Frontend Fitness" />
      </a>
      <div className=" dropdown text-end profileicon  ">
        <a
          href="#"
          className="d-block link-dark text-decoration-none dropdown-toggle "
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <img
            src={nas}
            alt="mdo"
            width={32}
            height={32}
            className="rounded-circle"
          />
        </a>
  <ul className="dropdown-menu text-small" style={{}}>
    <li>
      <a className="dropdown-item" href="/admin/plans/add">
        New Plan
      </a>
    </li>
    <li>
      <a className="dropdown-item" onClick={handleClick}>
        Sign out
      </a>
    </li>
  </ul>
</div>

</nav>

      
    );
  }