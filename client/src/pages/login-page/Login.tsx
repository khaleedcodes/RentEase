import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/login", { email, password })
      .then((result) => {
        console.log(result);
        if (result.data === "Success") {
          navigate("/listings");
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="flex justify-center items-center vh-100">
      <div className="bg-white p-3 rounded w-25">
        <h2>Login to your RentEase Account</h2>
        <form onSubmit={handleSubmit}>
          {/*Email Field*/}
          <div className="mb-3">
            <label htmlFor="email">
              <strong>Email:</strong>
            </label>
            <input
              type="email"
              placeholder="Enter Email"
              autoComplete="off"
              name="email"
              className="form-control rounded-0"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          {/*Password Field*/}
          <div className="mb-3">
            <label htmlFor="email">
              <strong>Password:</strong>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              name="password"
              className="form-control rounded-0"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="btn btn-success w-100 rounded-0"
            style={{ background: "#B5A9E8", color: "#39197C" }}
          >
            Login
          </button>
          <p>{"Don't Have an Account Yet?"}</p>
          <Link
            to="/signup"
            className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none"
          >
            Sign Up Here
          </Link>
        </form>
      </div>
    </div>
  );
}

export default Login;
