import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ResetPassword = () => {
  const { register, handleSubmit } = useForm();
  const token = useParams().token;

  const submitHandler = async (data) => {
    const obj = {
      password: data.password,
      token: token,
    };

    try {
      const res = await axios.post("/reset-password/", obj);
      console.log("API Response:", res);

      if (res.status === 200 && res.data.message === "Password reset successful") {
        toast.success("✅ Password reset successfully!", {
          position: "top-center",
          autoClose: 3000,
        });
      } else {
        alert(res.data.message || "⚠ Reset failed. Try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("❌ Something went wrong. Please try again.");
    }
  };

  const styles = {
    body: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      width: "100vw",
      background: "#FFEBB7",
    },
    container: { textAlign: "center" },
    card: {
      background: "#3498DB",
      padding: "30px",
      borderRadius: "12px",
      width: "100%",
      maxWidth: "400px",
      color: "white",
    },
    formGroup: {
      display: "flex",
      flexDirection: "column",
      marginBottom: "15px",
    },
    label: { fontWeight: "bold", marginBottom: "5px" },
    input: {
      padding: "10px",
      borderRadius: "5px",
      border: "none",
      fontSize: "1rem",
      width: "100%",
    },
    button: {
      background: "#F39C12",
      color: "white",
      padding: "12px",
      fontSize: "1.1rem",
      borderRadius: "5px",
      width: "100%",
      cursor: "pointer",
    },
  };

  return (
    <div style={styles.body}>
      <div style={styles.container}>
        <h1>PocketBuddy</h1>
        <div style={styles.card}>
          <h2>Reset Password</h2>
          <form onSubmit={handleSubmit(submitHandler)}>
            <div style={styles.formGroup}>
              <label style={styles.label}>Password</label>
              <input
                type="password"
                {...register("password")}
                required
                style={styles.input}
              />
            </div>
            <div style={styles.formGroup}>
              <input
                type="submit"
                value="Reset Password"
                style={styles.button}
              />
            </div>
          </form>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export { ResetPassword };
