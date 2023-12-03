import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchSingleUser, fetchUser } from "../userReducer";
import { toast } from "react-toastify";
import { deleteData, updateData } from "../action";

function User() {
   // using useDispatch to call the actions
   const dispatch = useDispatch();

   // using useSelector hook to get access the state object values
   const { allUser, singleUser } = useSelector(state => state.user);

   useEffect(() => {
      // calling the fetchUser action the initially fetch the given api data
      dispatch(fetchUser("http://localhost:3000/user"));

      // condition to re-render the fetch data on change of singleUser state
      if (singleUser) {
         setFormValue(singleUser);
      }
   }, [singleUser])

   // data delete
   const handleDelete = (id) => {
      dispatch(deleteData(`http://localhost:3000/user/${id}`))
      setTimeout(() => {
         dispatch(fetchUser("http://localhost:3000/user"));
      })
      toast.success("Data Deleted");
   }

   // form control
   const [formValue, setFormValue] = useState({
      id: "",
      name: "",
      email: "",
      password: "",
      mobile: ""
   });

   const { id, name, email, password, mobile } = formValue;

   // fetching the single user data
   const handleUpdate = (id) => {
      dispatch(fetchSingleUser(`http://localhost:3000/user/${id}`));
   }

   // form validation
   const validation = () => {
      let result = true;
      if (name === "") {
         toast.error('Name is required !');
         result = false;
      }
      if (email === "") {
         toast.error('Email is required !');
         result = false;
      }
      if (password === "") {
         toast.error('Password is required !');
         result = false;
      }
      if (mobile === "") {
         toast.error('Mobile is required !');
         result = false;
      }
      return result;
   };

   // set the state data to form's data
   const handleChange = (e) => {
      setFormValue({ ...formValue, [e.target.name]: e.target.value });
   };

   // updating the store data using the action
   const handleSubmit = (e) => {
      e.preventDefault();
      if (validation()) {
         dispatch(updateData(`http://localhost:3000/user/${id}`, formValue));
         setTimeout(() => {
            dispatch(fetchUser("http://localhost:3000/user"));
         })
         setFormValue({ id: "", name: "", email: "", password: "", mobile: "" });
         toast.success("Edit Successfull");
      }
   };

   return (
      <div className="m-5 pt-5">
         {/* TABLE */}
         <table className="table table-bordered table-hover">
            <thead className="thead-dark">
               <tr>
                  <th>Id</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Password</th>
                  <th>Mobile</th>
                  <th>Action</th>
               </tr>
            </thead>
            <tbody>
               {
                  allUser.map((val) => {
                     return (
                        <tr key={val.id}>
                           <td>{val.id}</td>
                           <td>{val.name}</td>
                           <td>{val.email}</td>
                           <td>{val.password}</td>
                           <td>{val.mobile}</td>
                           <td>
                              <button className="btn btn-danger m-1" onClick={() => { handleDelete(val.id) }}>Delete</button>
                              <button onClick={() => handleUpdate(val.id)} type="button" className="btn btn-primary m-1" data-toggle="modal" data-target="#myModal">Edit</button>
                           </td>
                        </tr>
                     );
                  })
               }
            </tbody>
         </table>
         <div>
            {/* Button to Open the Modal */}
            {/* The Modal */}
            <div className="modal" id="myModal">
               <div className="modal-dialog">
                  <div className="modal-content">
                     {/* Modal Header */}
                     <div className="modal-header">
                        <h4 className="modal-title">Edit User</h4>
                        <button type="button" className="close" data-dismiss="modal">x</button>
                     </div>
                     {/* Modal body */}
                     <div className="modal-body">
                        <form>
                           <input className="w3-input w3-border" type="text" onChange={(e) => handleChange(e)} value={formValue.name} placeholder="Name" name="name" />
                           <input className="w3-input w3-section w3-border" onChange={(e) => handleChange(e)} value={formValue.email} type="email" placeholder="Email" name="email" />
                           <input className="w3-input w3-section w3-border" onChange={(e) => handleChange(e)} value={formValue.password} type="password" placeholder="Password" name="password" />
                           <input className="w3-input w3-section w3-border" onChange={(e) => handleChange(e)} value={formValue.mobile} type="number" placeholder="Mobile" name="mobile" />
                        </form>
                     </div>
                     {/* Modal footer */}
                     <div className="modal-footer">
                        <button type="submit" onClick={(e) => handleSubmit(e)} className="btn btn-primary" data-dismiss="modal">Save</button>
                        <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}
export default User