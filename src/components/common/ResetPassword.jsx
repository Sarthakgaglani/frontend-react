import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";

const ResetPassword = () => {
  const { register, handleSubmit } = useForm();
  const token = useParams().token;
  const submitHandler = async(data)=>{
    //console.log(data)
    const obj = {
        password:data.password,
        token:token
    }
    //console.log(obj)
    const res = await axios.post("/reset-password/",obj)
    console.log(res.data)
  }
  return (
    <div style={{ textAlign: "center" }}>
      <h1>RESET PASSWORD</h1>
      <form onSubmit={handleSubmit(submitHandler)}>
        <div>
          <label>password</label>
          <input type="text" {...register("password")}></input>
        </div>
        <div>
        
          <input type="submit"></input>
        </div>
      </form>
    </div>
  );
};
export {ResetPassword};