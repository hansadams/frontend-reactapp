import logo from '../../assets/img/logo.png'

export default function NavBar() {
  return (
    <nav className="navbar sticky-top navbar-expand-lg navbar-dark container-fluid">
      <a className="navbar-brand" href="/">
        <img src={logo} alt="Frontend Fitness" />
      </a>

      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarToggler"
        aria-controls="navbarToggler2"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>

      <div className="collapse navbar-collapse" id="navbarToggler">
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">

          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="/">
              Home
            </a>
          </li>

          <li className="nav-item">
            <a className="nav-link" href="/about">
              About
            </a>
          </li>

          <li className="nav-item">
            <a className="nav-link" href="/join">
              Join
            </a>
          </li>

        </ul>
      </div>
    </nav>  
  );
}