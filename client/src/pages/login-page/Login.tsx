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
    <div className="min-h-lvh flex w-full justify-center">
      <div className=" p-3 max-w-screen-xl w-full gap-8 flex flex-col justify-center items-center">
        <form
          onSubmit={handleSubmit}
          className="border border-red-600 flex flex-col items-center gap-8 p-4"
        >
          <div className="w-full h-full flex flex-col gap-7 items-center justify-center ">
            <h2 className="font-bold text-3xl ">
              Login to your RentEase Account
            </h2>
            <input
              className="bg-first-secondary w-full min-h-11 rounded-md outline-none border-none pl-10"
              type="email"
              placeholder="Email Address"
              autoComplete="off"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Enter Password"
              name="password"
              className="bg-first-secondary w-full min-h-11 rounded-md outline-none border-none pl-10"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="bg-first-primary p-3 text-white font-bold rounded-md w-full"
          >
            Login
          </button>
          <p>
            {"Don't Have an Account Yet?"}
            <Link
              to="/signup"
              className="bg-first-green p-4 tex font-bold rounded-md"
            >
              Sign Up Here
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
