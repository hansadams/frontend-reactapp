import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { List } from 'react-bootstrap-icons';

function ResponsiveExample() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button type="button" className="d-lg-none sticky-top hamburger" onClick={handleShow}>
      <List />
      </Button>
    

      <Offcanvas className ="sidebar" show={show} onHide={handleClose} responsive="lg" scroll={true} backdrop={false}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Admin Dashboard</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
        <ul className="nav flex-column mb-auto ">
  <li className="nav-item">
    <a href="/admin" className="nav-link text-white" aria-current="page">

      Dashboard
    </a>
  </li>
  <li>
    <a href="/admin/plans" className="nav-link text-white">
      Plans
    </a>
  </li>
  <li>
    <a href="/admin" className="nav-link text-white">

     Members
    </a>
  </li>
</ul>

        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default ResponsiveExample;