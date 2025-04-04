import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const SignUp = () => {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const [selectedRole, setSelectedRole] = useState("");

  const submitHandler = async (data) => {
    console.log("Form Data: ", data);

    try {
      const res = await axios.post("http://127.0.0.1:8000/user/", data);
      console.log(res);
      
      if (res.status === 200 && res.data.message === "User created successfully") {
        toast.success("Signup successful! Redirecting...", {
          position: "top-center",
          autoClose: 3000,
        });

        setTimeout(() => {
          // Navigate based on role
          if (data.role === "Restaurant") {
            navigate("/login");
          } else {
            navigate("/login");
          }
        }, 3000);
      } else {
        toast.error("Signup failed. Please try again.");
      }
    } catch (error) {
      console.error("Signup failed", error);
      toast.error("Signup failed. Please check your details and try again.");
    }
  };

  const styles = {
    body: { display: "flex", justifyContent: "center", alignItems: "center", height: "100vh", width:"100vw", background: "#FFEBB7" },
    container: { textAlign: "center" },
    card: { background: "#3498DB", padding: "30px", borderRadius: "12px", width: "100%", maxWidth: "400px", color: "white" },
    formGroup: { display: "flex", flexDirection: "column", marginBottom: "15px" },
    label: { fontWeight: "bold" },
    input: { padding: "10px", borderRadius: "5px", border: "none", fontSize: "1rem", width: "100%" },
    button: { background: "#F39C12", color: "white", padding: "12px", fontSize: "1.1rem", borderRadius: "5px", width: "100%", cursor: "pointer" }
  };

  return (
    <div style={styles.body}>
      <div style={styles.container}>
        <h1>PocketBuddy</h1>
        <div style={styles.card}>
          <h2>Signup</h2>
          <form onSubmit={handleSubmit(submitHandler)}>
            <div style={styles.formGroup}>
              <label style={styles.label}>First Name</label>
              <input type="text" {...register("firstName")} required style={styles.input} />
            </div>
            <div style={styles.formGroup}>
              <label style={styles.label}>Last Name</label>
              <input type="text" {...register("lastName")} required style={styles.input} />
            </div>
            <div style={styles.formGroup}>
              <label style={styles.label}>Age</label>
              <input type="number" {...register("age")} required style={styles.input} />
            </div>
            <div style={styles.formGroup}>
              <label style={styles.label}>Role</label>
              <select {...register("role")} required style={styles.input} onChange={(e) => setSelectedRole(e.target.value)}>
                <option value="">Select Role</option>
                <option value="Admin">Admin</option>
                <option value="User">User</option>
                <option value="Restaurant">Restaurant</option>
              </select>
            </div>
            <div style={styles.formGroup}>
              <label style={styles.label}>Email</label>
              <input type="email" {...register("email")} required style={styles.input} />
            </div>
            <div style={styles.formGroup}>
              <label style={styles.label}>Password</label>
              <input type="password" {...register("password")} required style={styles.input} />
            </div>
            <button type="submit" style={styles.button}>Signup</button>
          </form>
        </div>
      </div>

      {/* Toast Notification */}
      <ToastContainer />
    </div>
  );
};
