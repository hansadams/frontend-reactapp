import AdminBar from "./components/AdminBar";
import Sidebar from "./components/Sidebar";
import {Navigate} from "react-router-dom"


export default function Admin() {

  
  if (!localStorage.getItem("token")) {
    return <Navigate to="/login" />;
  }

  return (<><AdminBar />
  <main>
    <div className="container-fluid">
        <div className="row">
            <div className="col-12 col-lg-2 sidebar">
            <Sidebar />
            </div>
            <div className="col-12 col-lg-10">
            <h1>HELLO ADMIN</h1>



            </div>
        </div>
    </div>
  </main>
  
  </>
   
  );
}