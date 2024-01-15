import { useState } from "react";
import {Navigate} from "react-router-dom";
import AdminBar from "../../../components/AdminBar";
import Sidebar from "../../../components/Sidebar";
import Plan from "../../../../util/PlanController";

export default function AddPlan() {

  const [name, setName] = useState();
  const [price, setPrice] = useState();
  const [description, setDescription] = useState();
  const [imageURL, setImageURL] = useState();
  const [promo, setPromo] = useState(false);

  const handleSubmit = async e => {
    e.preventDefault();
    await Plan.createPlan({
      name,
      price,
      description,
      promo
    });
    window.location.href="/admin/plans"
  }

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
              <h1 className="p-5">Add Plan </h1>

              <div className="row p-5">
                <form id="productForm" onSubmit={handleSubmit}>

                  <div className="mb-3">
                    <label htmlFor="formFile" className="form-label">
                      Import Plan Image
                    </label>
                    <input className="form-control" type="file" id="productImage" />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label">
                      Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Add Name"
                      id="productName"
                      onChange={e => setName(e.target.value)}
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label">
                      Price
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      placeholder="Add Price"
                      id="productPrice"
                      onChange={e => setPrice(e.target.value)}
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="exampleFormControlTextarea1" className="form-label">
                      Details
                    </label>
                    <textarea
                      className="form-control"
                      id="productContent"
                      rows={3}
                      defaultValue={""}
                      onChange={e => setDescription(e.target.value)}
                    />
                  </div>

                  <button type="submit" className="btn btn-danger btn-block mt-4">
                    Save Item
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}