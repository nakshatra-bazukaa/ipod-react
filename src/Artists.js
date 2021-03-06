import React from "react";
import artistImage from "./assets/images/Nakshatra.jpg";

class Artists extends React.Component {
  render() {
    return (
      <div style={styles.artistsContainer}>
        <div style={styles.titleBar}>
          <p style={{ fontWeight: "bold", color: "white" }}>iPod</p>
          <img
            style={styles.battery}
            src="https://image.flaticon.com/icons/svg/3103/3103446.svg"
          ></img>
        </div>

        <div style={styles.info}>
          <div style={styles.imageContainer}></div>

          <div style={styles.subInfo}>
            <h4
              style={{
                marginBottom: "0.5rem",
                color: "white",
                fontSize: "2.5rem",
              }}
            >
              IPod.js{" "}
              <span>
                <img
                  style={styles.image}
                  src="https://image.flaticon.com/icons/svg/953/953909.svg"
                />
              </span>
            </h4>
            <p
              style={{ marginBottom: "0", color: "white", fontSize: "1.3rem" }}
            >
              {" "}
              React Project
            </p>
            <p style={{ color: "white", fontSize: "1.3rem" }}>
              Made by : Nakshatra Gupta
            </p>
          </div>
        </div>

        <div style={styles.info2}>
          <h5
            style={{ alignSelf: "center", color: "white", fontSize: "1.3rem" }}
          >
            Thanks for visiting the app !!
          </h5>
        </div>
      </div>
    );
  }
}

const styles = {
  artistsContainer: {
    height: "100%",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    backgroundImage: `url(${artistImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  image: {
    width: "2rem",
    height: "2rem",
  },
  info: {
    height: "70%",
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  info2: {
    width: "100%",
    height: "30%",
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  subInfo: {
    alignSelf: "center",
  },
  titleBar: {
    height: "10%",
    width: "100%",
    borderRadius: "12px 0 0 0",
    backgroundImage: "linear-gradient(0deg, rgb(123, 132, 140), transparent)",
    borderBottom: "1px solid #6c757d",
    padding: "1px 5px 10px 8px",
    display: "flex",
    flexDirecton: "row",
    justifyContent: "space-between",
    opacity: "0.5",
  },
  battery: {
    width: "20px",
    height: "20px",
  },
};

export default Artists;
