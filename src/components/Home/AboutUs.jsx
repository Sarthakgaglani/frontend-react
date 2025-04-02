// import React from "react";

// const AboutUs = () => {
//   return (
//     <div style={styles.container}>
//       <h1 style={styles.heading}>About Us</h1>
//       <p style={styles.description}>
//         Welcome to <strong>PocketBuddy</strong>, your go-to platform for discovering the best 
//         restaurant deals and street food in town! Our mission is to bridge the gap between 
//         local street food vendors and food lovers by offering verified deals and great discounts.
//       </p>

//       <div style={styles.section}>
//         <h2 style={styles.subHeading}>Our Mission</h2>
//         <p style={styles.text}>
//           To empower small food vendors and restaurants by providing them with an online presence 
//           while helping customers find affordable and delicious meals.
//         </p>
//       </div>

//       <div style={styles.section}>
//         <h2 style={styles.subHeading}>Our Vision</h2>
//         <p style={styles.text}>
//           To become the leading platform for food deals, making dining out affordable for everyone 
//           while supporting small food businesses.
//         </p>
//       </div>

//       <div style={styles.section}>
//         <h2 style={styles.subHeading}>Meet Our Team</h2>
//         <div style={styles.teamContainer}>
//           <div style={styles.teamMember}>
//             <img src="../../assests/images/founder.jpg" alt="Founder" style={styles.teamImage} />
//             <p style={styles.teamName}>John Doe</p>
//             <p style={styles.teamRole}>Founder & CEO</p>
//           </div>
//           <div style={styles.teamMember}>
//             <img src="https://via.placeholder.com/100" alt="Developer" style={styles.teamImage} />
//             <p style={styles.teamName}>Jane Smith</p>
//             <p style={styles.teamRole}>Lead Developer</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// const styles = {
//   container: { 
//     fontFamily: "Arial, sans-serif", 
//     maxWidth: "800px", 
//     margin: "20px auto", 
//     textAlign: "center", 
//     padding: "20px", 
//     backgroundColor: "#f9f9f9", 
//     borderRadius: "10px", 
//     boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)" 
//   },
//   heading: { color: "#d9534f", fontSize: "28px", marginBottom: "15px" },
//   description: { fontSize: "16px", color: "#333", marginBottom: "20px" },
//   section: { marginBottom: "20px", padding: "10px", backgroundColor: "#fff", borderRadius: "10px" },
//   subHeading: { color: "#3498DB", fontSize: "22px", marginBottom: "10px" },
//   text: { fontSize: "16px", color: "#555" },
//   teamContainer: { display: "flex", justifyContent: "center", gap: "20px" },
//   teamMember: { textAlign: "center", backgroundColor: "#fff", padding: "10px", borderRadius: "8px", boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.1)" },
//   teamImage: { width: "100px", height: "100px", borderRadius: "50%" },
//   teamName: { fontSize: "18px", fontWeight: "bold", marginTop: "10px" },
//   teamRole: { fontSize: "14px", color: "#777" }
// };

// export {AboutUs};

import React from "react";
import Founder from "../../assets/images/founder.jpg";

const AboutUs = () => {
  return (
    <div style={styles.pageContainer}>
      <div style={styles.container}>
        <h1 style={styles.header}>About Us</h1>
        <p style={styles.description}>
          Welcome to <strong>PocketBuddy</strong>, your go-to platform for discovering the best restaurant deals and street food in town! Our mission is to bridge the gap between local street food vendors and food lovers by offering verified deals and great discounts.
        </p>

        <div style={styles.section}>
          <h2 style={styles.subHeader}>Our Mission</h2>
          <p>To empower small food vendors and restaurants by providing them with an online presence while helping customers find affordable and delicious meals.</p>
        </div>

        <div style={styles.section}>
          <h2 style={styles.subHeader}>Our Vision</h2>
          <p>To become the leading platform for food deals, making dining out affordable for everyone while supporting small food businesses.</p>
        </div>

        <div style={styles.section}>
          <h2 style={styles.subHeader}>Meet Our Team</h2>
          <div style={styles.teamContainer}>
            <div style={styles.teamMember}>
              <img src={Founder} alt="Founder" style={styles.image} />
              <h3 style={styles.name}>Sarthak Gaglani</h3>
              <p>Founder & CEO</p>
            </div>
            <div style={styles.teamMember}>
              <img src={Founder} alt="Developer" style={styles.image} />
              <h3 style={styles.name}>Sarthak Gaglani</h3>
              <p>Lead Developer</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  pageContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh", // Full screen height
    backgroundColor: "#f8f9fa",
    padding: "20px",
  },
  container: {
    width: "60%",
    background: "#ffffff",
    padding: "30px",
    borderRadius: "12px",
    textAlign: "center",
    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
  },
  header: {
    color: "#d9534f",
    fontSize: "28px",
    marginBottom: "10px",
  },
  description: {
    fontSize: "16px",
    color: "#555",
    marginBottom: "20px",
  },
  section: {
    background: "#f9f9f9",
    padding: "15px",
    borderRadius: "8px",
    marginBottom: "15px",
  },
  subHeader: {
    color: "#3498DB",
    fontSize: "22px",
    marginBottom: "10px",
  },
  teamContainer: {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
  },
  teamMember: {
    background: "#fff",
    padding: "15px",
    borderRadius: "8px",
    textAlign: "center",
    boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.1)",
    width: "150px",
  },
  image: {
    width: "50px",
    borderRadius: "50%",
    marginBottom: "10px",
  },
  name: {
    fontWeight: "bold",
  },
};

export {AboutUs};

