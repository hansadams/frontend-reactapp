import {Navigate} from "react-router-dom"
import AdminBar from "./components/AdminBar";
import Sidebar from "./components/Sidebar";
import Plan from "../util/PlanController";
import PlanTable from "./pages/plans/components/PlanTable";
import Member from "../util/UserController";
import MemberTable from "./pages/members/components/MemberTable";

const plans = await Plan.getPlans();
const members = await Member.getMembers()

export default function Admin() {

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
              <h1>HELLO ADMIN</h1>
            
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
              <table className="table align-middle mb-0 bg-white">
                <thead className="bg-light">
                  <tr>
                    <th>Name</th>
                    <th className="hide">Contact</th>
                    <th className="hide">DOB</th>
                    <th className="hide">Email</th>
                    <th>Plan</th>
                  </tr>
                </thead>
                <tbody>
                  {members.map((member, key) => {
                    return (
                      <MemberTable
                        member={member}
                        plan={member.plan.name}
                        key={key}
                      />
                    );
                  })}
                </tbody>
              </table></div>
          </div>
        </div>
      </main>
    </> 
  );
}