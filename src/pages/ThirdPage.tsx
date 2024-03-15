import { Link } from "react-router-dom";

const ThirdPage = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "100svw",
        height: "100svh",
      }}
    >
      <h1>Success!</h1>
      <p>You have successfully logged in.</p>
      <Link to="/">
        <button>Go to First Page</button>
      </Link>
    </div>
  );
};

export default ThirdPage;
