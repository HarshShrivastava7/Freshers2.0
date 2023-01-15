// import "./App.css";
import TeamCard from "./TeamCard";

const customStyle = {
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
  backgroundColor: "#000000",
  height: "100vh"
};

function Team() {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        background: "#000000",
      }}
    >
      <h1
        style={{
          color: "#e8e0cd",
          width: "90vh",
          margin: "60px",
          textAlign: "center",
          marginBottom: "0px",
        }}
      >
        ORGANISING TEAM
      </h1>
      <TeamCard />
      <h3
        style={{
          color: "#e8e0cd",
          width: "90vh",
          margin: "80px",
          textAlign: "center",
          marginBottom: "20px",
        }}
      >
        "College is a journey, Faccho. And we're the crazy tour guides you never
        knew you needed."
      </h3>
    </div>
  );
}

export default Team;
