import logo from '../../assets/img/logo.png'

export default function AdminBar() {
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
      src="https://github.com/mdo.png"
      alt="mdo"
      width={32}
      height={32}
      className="rounded-circle"
    />
  </a>
  <ul className="dropdown-menu text-small" style={{}}>
    <li>
      <a className="dropdown-item" href="#">
        New project...
      </a>
    </li>
    <li>
      <a className="dropdown-item" href="#">
        Settings
      </a>
    </li>
    <li>
      <a className="dropdown-item" href="#">
        Profile
      </a>
    </li>
    <li>
      <hr className="dropdown-divider" />
    </li>
    <li>
      <a className="dropdown-item" href="#">
        Sign out
      </a>
    </li>
  </ul>
</div>

</nav>

      
    );
  }