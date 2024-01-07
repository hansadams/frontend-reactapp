import AdminBar from "../../../components/AdminBar";
import Sidebar from "../../../components/Sidebar";
import {Navigate, useParams} from "react-router-dom"
import Plan from "../../../../util/PlanController";
import { useEffect, useState } from "react";




export default function EditPlan(props) {

  const { Id } = useParams()

  const [data, setData] = useState('');
  const [name, setName] = useState();
const [price, setPrice] = useState();
const [description, setDescription] = useState();
const [imageURL, setImageURL] = useState();
const [promo, setPromo] = useState();
const [id, setId] = useState();



  useEffect(() => {
    Plan.getPlan(Id).then(response => 
      {setData(response);
      setName(response.name)
      setPrice(response.price)
      setDescription(response.description)
      setImageURL(response.imageURL)
      setPromo(response.promo)
      setId(response.id)
      
    })

}, [Id]);



const handleSubmit = async e => {
  e.preventDefault();
  const response = await Plan.updatePlan(id, {
    id,
    name,
    price,
    description,
    promo,
    imageURL
  });
  window.location.href="/admin/plans"
}

const handleDelete = async e => {
  const response = await Plan.deletePlan(id);
  window.location.href="/admin/plans"}

  
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
            <h1 className="p-5">Edit Plan </h1>


  {/* New Item Form */}
  <div className="row p-5">
    <form id="productForm" onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="formFile" className="form-label">
          Import Plan Image
        </label>
        <input className="form-control" type="file" id="productImage" />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label" >
          Name
        </label>
        <input
          type="text"
          className="form-control"
          placeholder="Add Name"
          id="productName"
          defaultValue={data.name}
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
          defaultValue={data.price}
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
          defaultValue={data.description}
          onChange={e => setDescription(e.target.value)}
        />
      </div>
      <button type="submit" className="btn btn-danger btn-block mt-4">
        Save Item
      </button>
      <button onClick={handleDelete} type="button" className="btn btn-danger btn-block mt-4 mx-4">
        Delete
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