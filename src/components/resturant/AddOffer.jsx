// import axios from "axios";
// import React from "react";
// import { useForm } from "react-hook-form";
// import { useNavigate } from "react-router-dom";
// import "./HeroSection.jsx"

// const AddOffer = () => {
//     const navigate = useNavigate();
//     const { register, handleSubmit, reset } = useForm();

//     const onSubmit = (data) => {
//         console.log("Offer Submitted:", data);
//         // Add API call here to submit the form data
//         reset();
//     };

//     return (
//         <div style={styles.wrapper}>
//             <div style={styles.header}>PocketBuddy <br /> Restaurant Admin</div>
//             <div style={styles.centerContainer}>
//                 <div style={styles.container}>
//                     <h2 style={styles.heading}>Add New Offer</h2>
//                     <form style={styles.form} onSubmit={handleSubmit(onSubmit)}>
//                         <label style={styles.label}>
//                             Offer Name:
//                             <input 
//                                 type="text" 
//                                 {...register("offerName", { required: true })} 
//                                 style={styles.input} 
//                             />
//                         </label>
                        
//                         <label style={styles.label}>
//                             Description:
//                             <textarea 
//                                 {...register("description", { required: true })} 
//                                 style={styles.textarea} 
//                             ></textarea>
//                         </label>
                        
//                         <label style={styles.label}>
//                             Discount:
//                             <select 
//                                 {...register("discount", { required: true })} 
//                                 style={styles.input} 
//                             >
//                                 <option value="">Select Discount</option>
//                                 {[...Array(20)].map((_, i) => (
//                                     <option key={i} value={(i + 1) * 5}>{(i + 1) * 5}%</option>
//                                 ))}
//                             </select>
//                         </label>
                        
//                         <label style={styles.label}>
//                             Valid Till:
//                             <input 
//                                 type="date" 
//                                 {...register("validity", { required: true })} 
//                                 style={styles.input} 
//                             />
//                         </label>
                        
//                         <label style={styles.label}>
//                             Upload Image:
//                             <input 
//                                 type="file" 
//                                 accept="image/*" 
//                                 {...register("image")}
//                                 style={styles.fileInput}
//                             />
//                         </label>
                        
//                         <button type="submit" style={styles.button}>Add Offer</button>
//                     </form>
//                 </div>
//             </div>
//         </div>
//     );
// };

// const styles = {
//     wrapper: {
//         display: "flex",
//         flexDirection: "column",
//         alignItems: "center",
//         justifyContent: "center",
//         height: "100vh",
//         width: "100vw",
//         margin: 0,
//     },
//     header: {
//         position: "absolute",
//         top: "10px",
//         left: "10px",
//         color: "#FFA500",
//         fontSize: "18px",
//         fontWeight: "bold",
//     },
//     centerContainer: {
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "center",
//         width: "100%",
//         height: "100%",
//     },
//     container: {
//         maxWidth: "500px",
//         width: "100%",
//         padding: "20px",
//         borderRadius: "8px",
//         boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
//     },
//     heading: {
//         textAlign: "center",
//         color: "#333",
//     },
//     form: {
//         display: "flex",
//         flexDirection: "column",
//     },
//     label: {
//         marginBottom: "10px",
//         fontWeight: "bold",
//     },
//     input: {
//         width: "100%",
//         padding: "8px",
//         marginTop: "5px",
//         borderRadius: "4px",
//         border: "1px solid #ccc",
//         outline: "none",
//     },
//     textarea: {
//         width: "100%",
//         height: "80px",
//         padding: "8px",
//         marginTop: "5px",
//         borderRadius: "4px",
//         border: "1px solid #ccc",
//     },
//     fileInput: {
//         marginTop: "5px",
//     },
//     button: {
//         backgroundColor: "#28a745",
//         color: "white",
//         padding: "10px",
//         border: "none",
//         borderRadius: "4px",
//         cursor: "pointer",
//         marginTop: "10px",
//         transition: "background 0.3s ease",
//     },
// };

// export { AddOffer };



import React, { useState } from "react";

const AddOffer = () => {
  const [offerName, setOfferName] = useState("");
  const [description, setDescription] = useState("");
  const [discount, setDiscount] = useState("");
  const [validTill, setValidTill] = useState("");
  const [image, setImage] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ offerName, description, discount, validTill, image });
  };

  return (
    <div style={styles.container}>
      <div style={styles.formContainer}>
        <h2 style={styles.title}>Add New Offer</h2>
        <form onSubmit={handleSubmit} style={styles.form}>
          <label style={styles.label}>Offer Name:</label>
          <input
            type="text"
            value={offerName}
            onChange={(e) => setOfferName(e.target.value)}
            style={styles.input}
            required
          />

          <label style={styles.label}>Description:</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            style={styles.textarea}
            required
          />

          <label style={styles.label}>Discount:</label>
          <select
            value={discount}
            onChange={(e) => setDiscount(e.target.value)}
            style={styles.select}
            required
          >
            <option value="">Select Discount</option>
            <option value="10%">10%</option>
            <option value="20%">20%</option>
            <option value="30%">30%</option>
          </select>

          <label style={styles.label}>Valid Till:</label>
          <input
            type="date"
            value={validTill}
            onChange={(e) => setValidTill(e.target.value)}
            style={styles.input}
            required
          />

          <label style={styles.label}>Upload Image:</label>
          <input
            type="file"
            onChange={(e) => setImage(e.target.files[0])}
            style={styles.fileInput}
            required
          />

          <button type="submit" style={styles.button}>Add Offer</button>
        </form>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
    backgroundColor: "#f8f9fa",
  },
  formContainer: {
    backgroundColor: "#fff",
    padding: "30px",
    borderRadius: "10px",
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
    maxWidth: "400px",
    width: "100%",
    textAlign: "center",
  },
  title: {
    marginBottom: "20px",
    fontSize: "22px",
    fontWeight: "bold",
    color: "#333",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  },
  label: {
    textAlign: "left",
    fontSize: "14px",
    fontWeight: "bold",
  },
  input: {
    padding: "8px",
    borderRadius: "5px",
    border: "1px solid #ccc",
    fontSize: "14px",
  },
  textarea: {
    padding: "8px",
    borderRadius: "5px",
    border: "1px solid #ccc",
    fontSize: "14px",
    resize: "none",
    height: "60px",
  },
  select: {
    padding: "8px",
    borderRadius: "5px",
    border: "1px solid #ccc",
    fontSize: "14px",
  },
  fileInput: {
    border: "none",
  },
  button: {
    padding: "10px",
    borderRadius: "5px",
    backgroundColor: "#28a745",
    color: "#fff",
    fontSize: "16px",
    fontWeight: "bold",
    cursor: "pointer",
    border: "none",
  },
};

export {AddOffer};

