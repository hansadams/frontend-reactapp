import SelectionCard from "./SelectionCard";
import Auth from "../../../../util/AuthController";
import { useState } from "react";

export default function SignUp(props) {

  const [firstname, setFName] = useState();
  const [lastname, setLName] = useState();
  const [contact, setContact] = useState();
  const [dob, setDob] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [plan, setPlan] = useState(props.selection);

  const handleDate = e => {
  var date = new Date(e.target.value)
  date = date.getTime()

  setDob(date)
}

  const handleSubmit = async e => {
    e.preventDefault();

    const response = await Auth.register({
      firstname,
      lastname,
      contact,
      email,
      password,
      plan,
      dob
    });

    window.location.href="/join/success"

  }

  return (<>
    <div className="container-fluid ">
        <div className="row justify-content-center">
        <SelectionCard plan={props.selection}/>
            <div className="col-12 col-lg-7 p-2 ">
            <form className="row g-3 p-3" onSubmit={handleSubmit}>
  <div className="col-md-6">
    <label htmlFor="validationDefault01" className="form-label">
      First name
    </label>
    <input
      type="text"
      className="form-control"
      id="validationDefault01"
      placeholder="John"
      required=""
      onChange={e => setFName(e.target.value)}
    />
  </div>
  <div className="col-md-6">
    <label htmlFor="validationDefault02" className="form-label">
      Last name
    </label>
    <input
      type="text"
      className="form-control"
      id="validationDefault02"
      placeholder="Smith"
      required=""
      onChange={e => setLName(e.target.value)}
    />
  </div>

    <div className="col-md-6">
    <label htmlFor="inputEmail4" className="form-label">
      Contact Number
    </label>
    <input type="tel" pattern="[0-9]{8}" className="form-control" id="inputEmail4" onChange={e => setContact(e.target.value)} />
  </div>
  <div className="col-md-6">
    <label htmlFor="inputPassword4" className="form-label">
      Date Of Birth
    </label>
    <input type="date" className="form-control" id="inputPassword4" onChange={handleDate} />
  </div>
  <div className="col-md-6">
    <label htmlFor="inputEmail4" className="form-label">
      Email
    </label>
    <input type="email" className="form-control" id="inputEmail4" onChange={e => setEmail(e.target.value)} />
  </div>
  <div className="col-md-6">
    <label htmlFor="inputPassword4" className="form-label" >
      Password
    </label>
    <input type="password" className="form-control" id="inputPassword4" onChange={e => setPassword(e.target.value)} />
  </div>





  <div className="col-12">
    <button type="submit" className="btn btn-dark btn-lg">
      Join
    </button>
  </div>
</form>

            </div>
            
          
            </div>
        
    </div>
  </>
   
  );
}