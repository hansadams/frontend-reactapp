import {Navigate} from "react-router-dom";
import AdminBar from "../../components/AdminBar";
import Sidebar from "../../components/Sidebar";
import Plan from "../../../util/PlanController";
import PlanTable from "./components/PlanTable";

const plans = await Plan.getPlans();

export default function Plans() {
  
  if (!localStorage.getItem("token")) {
    return <Navigate to="/login" />;
  }

  return (
    <>
      <AdminBar />
      <main>
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 col-lg-2 sidebar">
              <Sidebar />
            </div>

            <div className="col-12 col-lg-10">
              <h1>Plans</h1>

              <a href="/admin/plans/add">
                <button type="button" className="btn btn-sm btn-rounded" >
                  Add Plan
                </button>
              </a>
    
              <table className="table align-middle mb-0 bg-white">
                <thead className="bg-light">
                  <tr>
                    <th>Plan</th>
                    <th>Price</th>
                    <th>Edit</th>
                  </tr>
                </thead>
                <tbody>
                  {plans.map((plan, key) => {
                    return (
                      <PlanTable
                        plan={plan}
                        key={key}
                      />
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}