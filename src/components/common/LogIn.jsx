      // import axios from "axios";
      // import React, { useState } from "react";
      // import { useForm } from "react-hook-form";
      // import { useNavigate } from "react-router-dom";
      // import { ToastContainer, toast } from "react-toastify";
      // import "react-toastify/dist/ReactToastify.css";
      
      // export const LogIn = () => {
      //   const { register, handleSubmit } = useForm();
      //   const navigate = useNavigate();
      //   const [isForgotPasswordClicked, setIsForgotPasswordClicked] = useState(false);
      //   const [email, setEmail] = useState("");
      
      //   const submitHandler = async (data) => {
      //     console.log("Login Data: ", data);
      
      //     try {
      //       const res = await axios.post("http://127.0.0.1:8000/user/login/", data);
      //       console.log("API Response:", res.data);
      
      //       if (res.status === 200) {
      //         toast.success("Login successful! Redirecting...", {
      //           position: "top-center",
      //           autoClose: 3000,
      //         });
      
      //         localStorage.setItem("token", res.data.user.role.name);
      //         localStorage.setItem("role", res.data.user.role.name);
      
      //         setTimeout(() => {
      //           if (res.data.user.role === "Restaurant") {
      //             const isFirstTime = localStorage.getItem("first_time_restaurant");
      
      //             if (!isFirstTime) {
      //               // First time logging in → Go to restform
      //               localStorage.setItem("first_time_restaurant", "true");
      //               navigate("/restform");
      //             } else {
      //               // Second time logging in → Go to hero
      //               navigate("/resthome");
      //             }
      //           } else if (res.data.user.role === "User") {
      //             navigate("/topdeals");
      //           } else if (res.data.user.role === "Admin") {
      //             navigate("/delete");
      //           }
      //         }, 3000);
      //       } else {
      //         toast.error("Login failed. Please try again.");
      //       }
      //     } catch (error) {
      //       console.error("Login Error:", error.response?.data || error.message);
      //       toast.error(error.response?.data?.detail || "Login failed. Please try again.");
      //     }
      //   };
      
      //   const forgotPasswordHandler = async (e) => {
      //     e.preventDefault();
      //     console.log(email);
      
      //     try {
      //       const res = await axios.post(`http://127.0.0.1:8000/forgot-password/?email=${email}`);
      //       console.log(res.data);
      //       toast.success("Password reset link sent!");
      //     } catch (error) {
      //       console.error("Forgot Password Error:", error.response?.data || error.message);
      //       toast.error("Failed to send password reset link. Try again.");
      //     }
      //   };
      
      //   const styles = {
      //     body: { display: "flex", justifyContent: "center", alignItems: "center", height: "100vh", width: "100vw", background: "#FFEBB7" },
      //     container: { textAlign: "center" },
      //     card: { background: "#3498DB", padding: "30px", borderRadius: "12px", width: "100%", maxWidth: "400px", color: "white" },
      //     formGroup: { display: "flex", flexDirection: "column", marginBottom: "15px" },
      //     label: { fontWeight: "bold" },
      //     input: { padding: "10px", borderRadius: "5px", border: "none", fontSize: "1rem", width: "100%" },
      //     button: { background: "#F39C12", color: "white", padding: "12px", fontSize: "1.1rem", borderRadius: "5px", width: "100%", cursor: "pointer" }
      //   };
      
      //   return (
      //     <div style={styles.body}>
      //       <div style={styles.container}>
      //         <h1>PocketBuddy</h1>
      //         <div style={styles.card}>
      //           <h2>Login</h2>
      //           <form onSubmit={handleSubmit(submitHandler)}>
      //             <div style={styles.formGroup}>
      //               <label style={styles.label}>Email</label>
      //               <input type="email" {...register("email", { required: true })} autoComplete="email" />
      //             </div>
      //             <div style={styles.formGroup}>
      //               <label style={styles.label}>Password</label>
      //               <input type="password" {...register("password", { required: true })} autoComplete="current-password" />
      //             </div>
      //             <div style={styles.formGroup}>
      //               <button type="button" onClick={() => setIsForgotPasswordClicked(true)}>FORGOT PASSWORD</button>
      //             </div>
      //             {isForgotPasswordClicked && (
      //               <div style={styles.formGroup}>
      //                 <label style={styles.label}>Enter your email</label>
      //                 <input type="email" onChange={(e) => setEmail(e.target.value)} />
      //                 <button onClick={(e) => forgotPasswordHandler(e)}>SUBMIT</button>
      //               </div>
      //             )}
      //             <button type="submit" style={styles.button}>Login</button>
      //           </form>
      //         </div>
      //       </div>
      
      //       {/* Toast Notification */}
      //       <ToastContainer />
      //     </div>
      //   );
      // };

      import axios from "axios";
      import React, { useState } from "react";
      import { useForm } from "react-hook-form";
      import { useNavigate } from "react-router-dom";
      import { ToastContainer, toast } from "react-toastify";
      import "react-toastify/dist/ReactToastify.css";
      
      export const LogIn = () => {
        const { register, handleSubmit } = useForm();
        const navigate = useNavigate();
        const [isForgotPasswordClicked, setIsForgotPasswordClicked] = useState(false);
        const [email, setEmail] = useState("");
      
        const submitHandler = async (data) => {
          try {
            const res = await axios.post("http://127.0.0.1:8000/user/login/", data);
            if (res.status === 200) {
              toast.success("Login successful! Redirecting...", {
                position: "top-center",
                autoClose: 3000,
              });
      
              // ✅ Save full user details
              localStorage.setItem("token", res.data.user.role.name);
              localStorage.setItem("role", res.data.user.role.name);
              localStorage.setItem("user", JSON.stringify(res.data.user));
      
              setTimeout(() => {
                if (res.data.user.role === "Restaurant") {
                  const isFirstTime = localStorage.getItem("first_time_restaurant");
                  if (!isFirstTime) {
                    localStorage.setItem("first_time_restaurant", "true");
                    navigate("/restform");
                  } else {
                    navigate("/resthome");
                  }
                } else if (res.data.user.role === "User") {
                  navigate("/topdeals");
                } else if (res.data.user.role === "ADMIN") {
                  navigate("/admin");
                }
              }, 3000);
            } else {
              toast.error("Login failed. Please try again.");
            }
          } catch (error) {
            console.error("Login Error:", error.response?.data || error.message);
            toast.error(error.response?.data?.detail || "Login failed. Please try again.");
          }
        };
      
        const forgotPasswordHandler = async (e) => {
          e.preventDefault();
          try {
            const res = await axios.post(`http://127.0.0.1:8000/forgot-password/?email=${email}`);
            toast.success("Password reset link sent!");
          } catch (error) {
            toast.error("Failed to send password reset link. Try again.");
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
          formGroup: { display: "flex", flexDirection: "column", marginBottom: "15px" },
          label: { fontWeight: "bold" },
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
                <h2>Login</h2>
                <form onSubmit={handleSubmit(submitHandler)}>
                  <div style={styles.formGroup}>
                    <label style={styles.label}>Email</label>
                    <input type="email" {...register("email", { required: true })} autoComplete="email" />
                  </div>
                  <div style={styles.formGroup}>
                    <label style={styles.label}>Password</label>
                    <input type="password" {...register("password", { required: true })} autoComplete="current-password" />
                  </div>
                  <div style={styles.formGroup}>
                    <button type="button" onClick={() => setIsForgotPasswordClicked(true)}>FORGOT PASSWORD</button>
                  </div>
                  {isForgotPasswordClicked && (
                    <div style={styles.formGroup}>
                      <label style={styles.label}>Enter your email</label>
                      <input type="email" onChange={(e) => setEmail(e.target.value)} />
                      <button onClick={(e) => forgotPasswordHandler(e)}>SUBMIT</button>
                    </div>
                  )}
                  <button type="submit" style={styles.button}>Login</button>
                </form>
              </div>
            </div>
            <ToastContainer />
          </div>
        );
      };
      


      