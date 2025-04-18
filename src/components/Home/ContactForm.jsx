

// import axios from "axios";
// import React from "react";
// import { useForm } from "react-hook-form";
// import { useNavigate } from "react-router-dom";

// const ContactForm = () => {
//   const navigate = useNavigate();
//   const { register, handleSubmit } = useForm();

//   const submitHandler = async (data) => {
//     console.log("Contact Data: ", data);
//     try {
//       const res = await axios.post("http://127.0.0.1:8000/contact_us", data);
//       console.log(res);
//       if (res.status === 200 || res.status === 201) {
//         alert("Message sent successfully");
//         navigate("/home");
//       } else {
//         alert("Message sending failed");
//       }
//     } catch (error) {
//       console.error("Message sending failed", error);
//       alert("Message sending failed. Please try again.");
//     }
//   };

//   const styles = {
//     body: { display: "flex", justifyContent: "center", alignItems: "center", height: "100vh", width: "100vw", background: "#FFEBB7" },
//     container: { textAlign: "center" },
//     card: { background: "#3498DB", padding: "30px", borderRadius: "12px", width: "100%", maxWidth: "400px", color: "white" },
//     formGroup: { display: "flex", flexDirection: "column", marginBottom: "15px" },
//     label: { fontWeight: "bold" },
//     input: { padding: "10px", borderRadius: "5px", border: "none", fontSize: "1rem", width: "100%" },
//     textarea: { padding: "10px", borderRadius: "5px", border: "none", fontSize: "1rem", width: "100%", height: "80px" },
//     button: { background: "#F39C12", color: "white", padding: "12px", fontSize: "1.1rem", borderRadius: "5px", width: "100%", border: "none", cursor: "pointer" }
//   };

//   return (
//     <div style={styles.body}>
//       <div style={styles.container}>
//         <h1>PocketBuddy</h1>
//         <div style={styles.card}>
//           <h2>Contact Us</h2>
//           <form onSubmit={handleSubmit(submitHandler)}>
//             <div style={styles.formGroup}>
//               <label style={styles.label}>Name:</label>
//               <input type="text" {...register("name")} required style={styles.input} />
//             </div>
//             <div style={styles.formGroup}>
//               <label style={styles.label}>Email:</label>
//               <input type="email" {...register("email")} required style={styles.input} />
//             </div>
//             <div style={styles.formGroup}>
//               <label style={styles.label}>Message:</label>
//               <textarea {...register("message")} required style={styles.textarea}></textarea>
//             </div>
//             <button type="submit" style={styles.button}>Submit</button>
//           </form>
//         </div>
//         <div style={{ marginTop: "20px", color: "#333" }}>
//           <p><strong>Address:</strong> CG Road, Navrangpura, Ahmedabad</p>
//           <p><strong>Contact:</strong> +91 9429282092</p>
//           <a href="https://maps.app.goo.gl/AuyWaUFiBsUAf97t6?g_st=aw" target="_blank" rel="noopener noreferrer">
//             Open Ahmedabad Location in Google Maps
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// };

// export { ContactForm };


// import axios from "axios";
// import React from "react";
// import { useForm } from "react-hook-form";
// import { useNavigate } from "react-router-dom";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// const ContactForm = () => {
//   const navigate = useNavigate();
//   const { register, handleSubmit } = useForm();

//   const submitHandler = async (data) => {
//     console.log("Contact Data: ", data);
//     try {
//       const res = await axios.post("http://127.0.0.1:8000/contact_us", data);
//       console.log(res);
//       if (res.status === 200 || res.status === 201) {
//         toast.success("Message sent successfully! Redirecting...", {
//           position: "top-center",
//           autoClose: 3000,
//         });

//         setTimeout(() => navigate("/home"), 3000);
//       } else {
//         toast.error("Message sending failed. Please try again.");
//       }
//     } catch (error) {
//       console.error("Message sending failed", error);
//       toast.error("Message sending failed. Please try again.");
//     }
//   };

//   const styles = {
//     body: { display: "flex", justifyContent: "center", alignItems: "center", height: "100vh", width: "100vw", background: "#FFEBB7" },
//     container: { textAlign: "center" },
//     card: { background: "#3498DB", padding: "30px", borderRadius: "12px", width: "100%", maxWidth: "400px", color: "white" },
//     formGroup: { display: "flex", flexDirection: "column", marginBottom: "15px" },
//     label: { fontWeight: "bold" },
//     input: { padding: "10px", borderRadius: "5px", border: "none", fontSize: "1rem", width: "100%" },
//     textarea: { padding: "10px", borderRadius: "5px", border: "none", fontSize: "1rem", width: "100%", height: "80px" },
//     button: { background: "#F39C12", color: "white", padding: "12px", fontSize: "1.1rem", borderRadius: "5px", width: "100%", border: "none", cursor: "pointer" }
//   };

//   return (
//     <div style={styles.body}>
//       <div style={styles.container}>
//         <h1>PocketBuddy</h1>
//         <div style={styles.card}>
//           <h2>Contact Us</h2>
//           <form onSubmit={handleSubmit(submitHandler)}>
//             <div style={styles.formGroup}>
//               <label style={styles.label}>Name:</label>
//               <input type="text" {...register("name")} required style={styles.input} />
//             </div>
//             <div style={styles.formGroup}>
//               <label style={styles.label}>Email:</label>
//               <input type="email" {...register("email")} required style={styles.input} />
//             </div>
//             <div style={styles.formGroup}>
//               <label style={styles.label}>Message:</label>
//               <textarea {...register("message")} required style={styles.textarea}></textarea>
//             </div>
//             <button type="submit" style={styles.button}>Submit</button>
//           </form>
//         </div>

//         <div style={{ marginTop: "20px", color: "#333" }}>
//           <p><strong>Address:</strong> CG Road, Navrangpura, Ahmedabad</p>
//           <p><strong>Contact:</strong> +91 9429282092</p>
//           <a href="https://maps.app.goo.gl/AuyWaUFiBsUAf97t6?g_st=aw" target="_blank" rel="noopener noreferrer">
//             Open Ahmedabad Location in Google Maps
//           </a>
//         </div>
//       </div>

//       {/* Toast Notifications */}
//       <ToastContainer />
//     </div>
//   );
// };

// export { ContactForm };
import axios from "axios";
import React from "react";
import "./ContactForm.css";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactForm = () => {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();

  const submitHandler = async (data) => {
    console.log("Contact Data: ", data);
    try {
      const res = await axios.post("http://127.0.0.1:8000/contact_us", data);
      console.log(res);
      if (res.status === 200 || res.status === 201) {
        toast.success("Message sent successfully! Redirecting...", {
          position: "top-center",
          autoClose: 3000,
        });

        setTimeout(() => navigate("/home"), 3000);
      } else {
        toast.error("Message sending failed. Please try again.");
      }
    } catch (error) {
      console.error("Message sending failed", error);
      toast.error("Message sending failed. Please try again.");
    }
  };

  return (
    <div className="contact-body">
      <div className="contact-container">
        <h1 className="contact-title">PocketBuddy</h1>
        <div className="contact-card">
          <h2 className="contact-subtitle">Contact Us</h2>
          <form onSubmit={handleSubmit(submitHandler)}>
            <div className="form-group">
              <label>Name:</label>
              <input type="text" {...register("name")} required />
            </div>
            <div className="form-group">
              <label>Email:</label>
              <input type="email" {...register("email")} required />
            </div>
            <div className="form-group">
              <label>Message:</label>
              <textarea {...register("message")} required></textarea>
            </div>
            <button type="submit" className="submit-btn">Submit</button>
          </form>
        </div>

        <div className="contact-details">
          <p><strong>Address:</strong> CG Road, Navrangpura, Ahmedabad</p>
          <p><strong>Contact:</strong> +91 9429282092</p>
          <a href="https://maps.app.goo.gl/AuyWaUFiBsUAf97t6?g_st=aw" target="_blank" rel="noopener noreferrer" className="map-link">
            Open Ahmedabad Location in Google Maps
          </a>
          <div className="map-container">
            <iframe
              title="PocketBuddy Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.831717596369!2d72.56158047502581!3d23.03099597941305!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e84f4f0f4f3f3%3A0x9c2c9c9c9c9c9c9c!2sCG%20Road%2C%20Navrangpura%2C%20Ahmedabad%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1623456789!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>

      {/* Toast Notifications */}
      <ToastContainer />
    </div>
  );
};

export { ContactForm };
