      // // import axios from 'axios'
      // // import React from 'react'
      // // import { useForm } from 'react-hook-form'
      // // import { useNavigate } from 'react-router-dom'

      // // export const LogIn = () => {
      // //     const{register,handleSubmit}=useForm()
      // //     const navigate = useNavigate()
      // //     const submitHandler= async(data)=>{
      // //         console.log("formData...",data)
              
      // //         const res = await axios.post("/user/login", data);
      // //         console.log(res.data.user._id); //axios
      // //         console.log(res.data); //api response
      // //         if(res.status === 200){
      // //             localStorage.setItem("id",res.data.user._id)
      // //             localStorage.setItem("role",res.data.user.role.name)
      // //             if(res.data.user.role.name ==="USER"){
      // //                 navigate("/user")
      // //             }
      // //             else if(res.data.user.role.name ==="RESTAURANT"){
      // //                 navigate("/offer")
      // //             }
      // //             //alert("Login success");

      // //         }
      // //     }
      // //   return (
      // //     <div>
      // //         <h1>LOGIN</h1>
      // //         <form onSubmit={handleSubmit(submitHandler)}>
      // //             <div>
      // //                 <label>email</label>
      // //                 <input type="email" {...register("Email")} />
      // //             </div>
      // //             <div>
      // //                 <label>password</label>
      // //                 <input type="password" {...register("password")} />
      // //             </div>
      // //             <div>
      // //                 <input type="submit" value="LOGIN" />
      // //             </div>
      // //         </form>
      // //     </div>
      // //   )
      // // }
      // import axios from "axios";
      // import React from "react";
      // import { useForm } from "react-hook-form";
      // import { useNavigate } from "react-router-dom";

      // export const LogIn = () => {
      //     const { register, handleSubmit } = useForm();
      //     const navigate = useNavigate();

      //     const submitHandler = async (data) => {
      //         console.log("Form Data:", data);

      //         try {
      //             // Ensure API URL matches FastAPI backend
      //             const res = await axios.post("http://127.0.0.1:8000/user/login", data, {
      //                 headers: {
      //                     "Content-Type": "application/json",
      //                 },
      //             });

      //             console.log("User ID:", res.data.user._id);
      //             console.log("Response:", res.data);

      //             if (res.status === 200) {
      //                 localStorage.setItem("id", res.data.user._id);
      //                 localStorage.setItem("role", res.data.user.role.name);

      //                 if (res.data.user.role.name === "USER") {
      //                     navigate("/user");
      //                 } else if (res.data.user.role.name === "RESTAURANT") {
      //                     navigate("/offer");
      //                 }
      //             }
      //         } catch (error) {
      //             console.error("Login Error:", error.response?.data || error.message);

      //             if (error.response?.status === 401) {
      //                 alert("Invalid credentials! Please check your email and password.");
      //             } else {
      //                 alert("Login failed! Please try again later.");
      //             }
      //         }
      //     };

      //     return (
      //         <div style={styles.container}>
      //             <div style={styles.card}>
      //                 <h1 style={styles.title}>LOGIN</h1>
      //                 <form onSubmit={handleSubmit(submitHandler)}>
      //                     <div style={styles.field}>
      //                         <label style={styles.label}>Email</label>
      //                         <input type="email" {...register("email", { required: true })} required style={styles.input} />
      //                     </div>
      //                     <div style={styles.field}>
      //                         <label style={styles.label}>Password</label>
      //                         <input type="password" {...register("password", { required: true })} required style={styles.input} />
      //                     </div>
      //                     <div>
      //                         <input type="submit" value="LOGIN" style={styles.button} />
      //                     </div>
      //                 </form>
      //             </div>
      //         </div>
      //     );
      // };

      // // Inline Styles
      // const styles = {
      //     container: {
      //         display: "flex",
      //         justifyContent: "center",
      //         alignItems: "center",
      //         height: "100vh",
      //         width: "100vw",
      //         backgroundColor: "#FFDAB9", // Light Orange
      //     },
      //     card: {
      //         padding: "20px",
      //         borderRadius: "8px",
      //         boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
      //         backgroundColor: "#ffffff",
      //         textAlign: "center",
      //         width: "350px",
      //     },
      //     title: {
      //         color: "#333",
      //         fontSize: "24px",
      //         marginBottom: "20px",
      //     },
      //     field: {
      //         marginBottom: "15px",
      //         textAlign: "left",
      //     },
      //     label: {
      //         display: "block",
      //         fontWeight: "bold",
      //         marginBottom: "5px",
      //         color: "#555",
      //     },
      //     input: {
      //         width: "100%",
      //         padding: "8px",
      //         borderRadius: "5px",
      //         border: "1px solid #ccc",
      //         outline: "none",
      //     },
      //     button: {
      //         width: "100%",
      //         padding: "10px",
      //         backgroundColor: "#FFA07A", // Soft orange
      //         color: "#fff",
      //         border: "none",
      //         borderRadius: "5px",
      //         cursor: "pointer",
      //         fontSize: "16px",
      //         fontWeight: "bold",
      //         transition: "background-color 0.3s",
      //     },
      // };

      // export default LogIn;



      // import axios from "axios";
      // import React from "react";
      // import { useForm } from "react-hook-form";
      // import { useNavigate } from "react-router-dom";

      // export const LogIn = () => {
      //     const navigate = useNavigate();
      //     const { register, handleSubmit } = useForm();

      //     const submitHandler = async (data) => {
      //         console.log("Login Data...", data);
      //         try {
      //             const res = await axios.post("http://127.0.0.1:8000/user/login/", data);
      //             console.log(res.data);

      //             if (res.status === 200) {
      //                 alert("Login successful");
      //                 navigate("/hero"); // Redirect after login
      //             } else {
      //                 alert("Login failed");
      //             }
      //         } catch (error) {
      //             console.error("Login failed", error);
      //             if (error.response) {
      //                 alert('Login failed: ${error.response.data.detail}');
      //             } else {
      //                 alert("Login failed. Please check your internet connection.");
      //             }
      //         }
      //     };

      //     // Inline styles
      //     const styles = {
      //         body: {
      //             background: "linear-gradient(135deg, #FFCC70, #FFEBB7)",
      //             height: "100vh",
      //             width:"100vw",
      //             margin:0,
      //             display: "flex",
      //             justifyContent: "center",
      //             alignItems: "center",
      //             fontFamily: "Arial, sans-serif",
      //         },
      //         container: {
      //             textAlign: "center",
      //         },
      //         brand: {
      //             fontSize: "2.5rem",
      //             fontWeight: "bold",
      //             color: "#2C3E50",
      //             marginBottom: "20px",
      //         },
      //         card: {
      //             background: "#3498DB",
      //             padding: "30px",
      //             borderRadius: "12px",
      //             boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
      //             maxWidth: "400px",
      //             width: "100%",
      //             color: "white",
      //             textAlign: "left",
      //         },
      //         formGroup: {
      //             display: "flex",
      //             flexDirection: "column",
      //             alignItems: "flex-start",
      //             marginBottom: "15px",
      //         },
      //         label: {
      //             fontWeight: "bold",
      //             marginBottom: "5px",
      //         },
      //         input: {
      //             width: "100%",
      //             padding: "10px",
      //             borderRadius: "5px",
      //             border: "none",
      //             fontSize: "1rem",
      //             outline: "none",
      //         },
      //         button: {
      //             backgroundColor: "#F39C12",
      //             color: "white",
      //             border: "none",
      //             padding: "12px",
      //             fontSize: "1.1rem",
      //             cursor: "pointer",
      //             borderRadius: "5px",
      //             width: "100%",
      //             transition: "0.3s ease",
      //             marginTop: "10px",
      //         },
      //         buttonHover: {
      //             backgroundColor: "#D68910",
      //         },
      //     };

      //     return (
      //         <div style={styles.body}>
      //             <div style={styles.container}>
      //                 <h1 style={styles.brand}>PocketBuddy</h1>
      //                 <div style={styles.card}>
      //                     <h2>Login</h2>
      //                     <form onSubmit={handleSubmit(submitHandler)}>
      //                         <div style={styles.formGroup}>
      //                             <label style={styles.label}>Email</label>
      //                             <input type="email" {...register("email")} required style={styles.input} />
      //                         </div>
      //                         <div style={styles.formGroup}>
      //                             <label style={styles.label}>Password</label>
      //                             <input type="password" {...register("password")} required style={styles.input} />
      //                         </div>
      //                         <button 
      //                             type="submit" 
      //                             style={styles.button}
      //                             onMouseOver={(e) => (e.target.style.background = styles.buttonHover.backgroundColor)}
      //                             onMouseOut={(e) => (e.target.style.background = styles.button.backgroundColor)}
      //                         >
      //                             Login
      //                         </button>
      //                     </form>
      //                 </div>
      //             </div>
      //         </div>
      //     );
      // };






      import axios from "axios";
      import React, { useState } from "react";
      import { useForm } from "react-hook-form";
      import { useNavigate } from "react-router-dom";

      export const LogIn = () => {
        const { register, handleSubmit } = useForm();
        const navigate = useNavigate();
        const[isforgotpasswordClicked,setisforgotpasswordClicked]=useState(false);
        const [email,setemail]=useState("");

        

        // const submitHandler = async (data) => {
        //   console.log("Login Data: ", data);

        //   try {
        //     const res = await axios.post("/login/", data);
        //     console.log(res);

        //     if (res.status === 200 && res.data.token) {
        //       alert("Login successful");

        //       // Get the user's role from API response
        //       const userRole = res.data.role_id;
        //       data.role_id ="67c952cae0729bbde11484fa"
        //       // Navigate based on role
        //       if (userRole === "Restaurant") {
        //         navigate("/hero"); // Navigate to Offer Page
        //       } else {
        //         navigate("/home"); // Navigate to Dashboard for Admin/User
        //       }
        //     } else {
        //       alert("Login failed");
        //     }
        //   } catch (error) {
        //     console.error("Login failed", error);
        //     alert("Login failed. Please try again.");
        //   }
        // };

        const submitHandler = async (data) => {
          console.log("Login Data: ", data);
        
          try {
            const res = await axios.post("http://127.0.0.1:8000/user/login/", data);
            console.log("API Response:", res.data);
            console.log(res)
            if (res.status === 200) {
              alert("Login successful");
        
              localStorage.setItem("token", res.data.user.role.name);
              localStorage.setItem("role", res.data.user.role.name);
        
              // Navigate based on role
              console.log(res.data)
              if (res.data.user.role === "Restaurant") {
                navigate("/restform"); 
              } else if (res.data.user.role === "User") {
                navigate("/topdeals");
              }
              else if (res.data.user.role === "Admin") {
                navigate("/delete");
              }
            } else {
              alert("Login failed");
            }
          } catch (error) {
            console.error("Login Error:", error.response?.data || error.message);
            alert(error.response?.data?.detail || "Login failed. Please try again.");
          }
        };
      //forgot password
        // const forgotPasswordHandler = async () => {
        //   console.log(email)
        //   const res = await axios.post("/forgot-password/?email="+email)
        //   console.log(res.data)

        // }

        const forgotPasswordHandler = async (e) => {
          e.preventDefault();  // Prevent form from submitting
          console.log(email);
          try {
            const res = await axios.post("http://127.0.0.1:8000/forgot-password/?email=" + email);
            console.log(res.data);
            alert("Password reset link sent!");
          } catch (error) {
            console.error("Forgot Password Error:", error.response?.data || error.message);
          }
        };
        


        const styles = {
          body: { display: "flex", justifyContent: "center", alignItems: "center", height: "100vh",width:"100vw", background: "#FFEBB7" },
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
                <h2>Login</h2>
                <form onSubmit={handleSubmit(submitHandler)}>
                  <div style={styles.formGroup}>
                    <label style={styles.label}>Email</label>
                    {/* <input type="email" {...register("email")}  /> */}
                    <input 
                      type="email" 
                      {...register("email", { required: true })} 
                      autoComplete="email" 
                    />
                  </div>
                  <div style={styles.formGroup}>
                    <label style={styles.label}>Password</label>
                    {/* <input type="password" {...register("password")}  /> */}
                    <input 
                      type="password" 
                      {...register("password", { required: true })} 
                      autoComplete="current-password" 
                    />
                  </div>
                  <div style={styles.formGroup}>
                    <button onClick={()=>{setisforgotpasswordClicked(true);}}>FORGOT PASSWORD</button>

                  </div>
                  {isforgotpasswordClicked && (
                    <div style={styles.formGroup}>
                      <label style={styles.label}>Enter your email</label>
                      <input type="email" onChange={(e)=>{setemail(e.target.value)}}  />
                      {/* <button onClick={forgotPasswordHandler}>SUBMIT</button> */}
                      <button onClick={(e) => forgotPasswordHandler(e)}>SUBMIT</button>


                    </div>
                  )}
                  <button type="submit" style={styles.button}>Login</button>
                </form>
              </div>
            </div>
          </div>
        );
      };
