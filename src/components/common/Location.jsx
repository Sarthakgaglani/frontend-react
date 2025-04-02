import React,{useState} from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

export const Location = () => {
    const navigate = useNavigate();
    const { register, handleSubmit, watch } = useForm();
    const submitHandler = async (data) => {
        console.log("Location Data: ", data);
        try {
            const res = await axios.post("http://127.0.0.1:8000/locations/locations/", data);
            console.log(res);
            if (res.status === 200 || res.status === 201) {
                alert("Location registered successfully");
                navigate("/hero");
            } else {
                alert("Registration failed");
            }

        } catch (error) {
            console.error("Registration failed", error);
            alert("Registration failed. Please try again.");
        }
    };
    const styles = {
        body: { display: "flex", justifyContent: "center", alignItems: "center", height: "100vh", width: "100vw", background: "#FFEBB7" },
        container: { textAlign: "center" },
        card: { background: "#3498DB", padding: "30px", borderRadius: "12px", width: "100%", maxWidth: "400px", color: "white" },
        formGroup: { display: "flex", flexDirection: "column", marginBottom: "15px" },
        label: { fontWeight: "bold" },
        input: { padding: "10px", borderRadius: "5px", border: "none", fontSize: "1rem", width: "100%" },
        button: { background: "#F39C12", color: "white", padding: "12px", fontSize: "1.1rem", borderRadius: "5px", width: "100%" }
    };

  return (
    <div style={styles.body}>
        <div style={styles.container}>
            <h1>PocketBuddy</h1>
            <div style={styles.card}>
                <h2>Location Details</h2>
                <form onSubmit={handleSubmit(submitHandler)}>
                    <div style={styles.formGroup}>
                        <label style={styles.label}>Address:</label>
                        <input type="text" {...register("Location")} required style={styles.input} />
                    </div>
                    <div style={styles.formGroup}>
                        <label style={styles.label}>Description:</label>
                        <input type="text" {...register("description")} required style={styles.input} />
                    </div>
                    <div style={styles.formGroup}>
                        <label style={styles.label}>Opening Time:</label>
                        <input type="time" {...register("open_timing")} required style={styles.input} />
                    </div>

                    <div style={styles.formGroup}>
                        <label style={styles.label}>Closing Time:</label>
                        <input type="time" {...register("close_timing")}  required style={styles.input} />
                    </div>
                    <button type="submit" style={styles.button}>Register</button>


                </form>

            </div>
        </div>

    </div> 
  );
};
