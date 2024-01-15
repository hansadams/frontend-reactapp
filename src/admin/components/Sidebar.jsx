import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { List } from 'react-bootstrap-icons';

function Sidebar() {
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

  <li>
    <a href="/admin/plans" className="nav-link text-white">
      Plans
    </a>
  </li>
  <li>
    <a href="/admin/members" className="nav-link text-white">

     Members
    </a>
  </li>
</ul>

        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default Sidebar;