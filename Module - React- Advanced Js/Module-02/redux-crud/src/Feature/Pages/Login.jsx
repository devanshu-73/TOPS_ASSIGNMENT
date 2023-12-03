import { useDispatch } from "react-redux"
import { insert } from "../action"
import { useState } from "react";
import { toast } from "react-toastify";

function Login() {
   // using useDispatch to call the actions
   const dispatch = useDispatch();

   // form control
   const [formValue, setFormValue] = useState({
      id: "",
      name: "",
      email: "",
      password: "",
      mobile: ""
   });

   const { name, email, password, mobile } = formValue;

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

   const handleChange = (e) => {
      setFormValue({ ...formValue, id: new Date().getTime().toString().slice(9, 13), [e.target.name]: e.target.value });
   };

   // adding new data on submit
   const handleSubmit = (e) => {
      e.preventDefault();
      if (validation()) {
         // dispatch will call the insert action, which will add the given data
         dispatch(insert("http://localhost:3000/user", formValue));
         setFormValue({ id: "", name: "", email: "", password: "", mobile: "" });
         toast.success("Login Successfull");
      }
   };

   return (
      <div>
         {/* LOGIN */}
         <div className="w3-container container" id="contact">
            <h3 className="w3-border-bottom w3-border-light-grey w3-padding-16">Login</h3>
            <form target="_blank">
               <input className="w3-input w3-border" type="text" onChange={(e) => handleChange(e)} value={formValue.name} placeholder="Name" name="name" />
               <input className="w3-input w3-section w3-border" onChange={(e) => handleChange(e)} value={formValue.email} type="email" placeholder="Email" name="email" />
               <input className="w3-input w3-section w3-border" onChange={(e) => handleChange(e)} value={formValue.password} type="password" placeholder="Password" name="password" />
               <input className="w3-input w3-section w3-border" onChange={(e) => handleChange(e)} value={formValue.mobile} type="number" placeholder="Mobile" name="mobile" />
               <button className="w3-button w3-black w3-section" onClick={(e) => handleSubmit(e)} type="submit">
                  <i className="fa fa-paper-plane" /> LOGIN
               </button>
            </form>
         </div>
      </div>
   )
}
export default Login