import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import signupImage from "../../assets/images/signup.png";
import IdentificationIcon from "../../assets/icons/IdentificationIcon";

function Signup() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [image, setImage] = useState("");
  const [accountType, setAccountType] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/signup", {
        // .post("https://renteaseserver.onrender.com/signup", {
        accountType,
        firstName,
        lastName,
        email,
        address,
        password,
        phone,
        image,
      })
      .then((result) => {
        console.log(result);
        navigate("/login");
      })
      .catch((err) => console.log(err));
  };

  function convertToBase64(e: React.ChangeEvent<HTMLInputElement>) {
    console.log(e);
    const reader = new FileReader();
    if (e.target.files) {
      reader.readAsDataURL(e.target.files[0]);
      reader.onload = () => {
        if (typeof reader.result === "string") {
          console.log(reader.result); //base64encoded string
          setImage(reader.result);
        }
      };
      reader.onerror = (error) => {
        console.log("Error: ", error);
      };
    }
  }

  return (
    <div className="min-h-lvh flex w-full justify-center">
      <div className=" p-3 max-w-screen-xl w-full gap-8 flex flex-col justify-center items-center">
        <h2 className="font-bold text-3xl ">
          Create a <span className="text-first-primary">Rentease</span> Account
        </h2>
        <div className="flex flex-wrap-reverse justify-center items-center">
          <form
            onSubmit={handleSubmit}
            className="p-4 flex flex-wrap-reverse flex-col items-center gap-8 grow basis-96"
          >
            {/* Account Type Select */}
            <div className="bg-first-secondary flex w-full min-h-11 rounded-md outline-none pl-10 items-center border-none gap-4">
              <label htmlFor="accountType">Account Type:</label>
              <select
                className="border-none outline-none"
                id="accountType"
                value={accountType}
                onChange={(e) => setAccountType(e.target.value)}
              >
                <option value="Client">Client</option>
                <option value="Homeowner">Homeowner</option>
              </select>
            </div>
            {/*First Name Field*/}

            <input
              className="bg-first-secondary w-full min-h-11 rounded-md outline-none border-none pl-10"
              type="text"
              placeholder="First Name"
              autoComplete="off"
              name="email"
              onChange={(e) => setFirstName(e.target.value)}
            />
            {/*Last Name Field*/}

            <input
              className="bg-first-secondary w-full min-h-11 rounded-md outline-none border-none pl-10"
              type="text"
              placeholder=" Last Name"
              autoComplete="off"
              name="email"
              onChange={(e) => setLastName(e.target.value)}
            />
            {/*Email Field*/}

            <input
              className="bg-first-secondary w-full min-h-11 rounded-md outline-none border-none pl-10"
              type="email"
              placeholder="Email Address"
              autoComplete="off"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
            />
            {/*Address Field*/}

            <input
              className="bg-first-secondary w-full min-h-11 rounded-md outline-none border-none pl-10"
              type="address"
              placeholder="Current Address"
              autoComplete="off"
              name="address"
              onChange={(e) => setAddress(e.target.value)}
            />
            {/*Password Field*/}

            <input
              className="bg-first-secondary w-full min-h-11 rounded-md outline-none border-none pl-10"
              type="password"
              placeholder="Password"
              name="password"
              onChange={(e) => setPassword(e.target.value)}
            />
            {/*Phone Field*/}

            <input
              className="bg-first-secondary w-full min-h-11 rounded-md outline-none border-none pl-10"
              type="phone"
              placeholder="Phone Number"
              name="phone"
              onChange={(e) => setPhone(e.target.value)}
            />
            <div className="flex items-center bg-first-secondary w-full min-h-11 rounded-md outline-none border-none pl-10">
              <div className="flex gap-4 items-center">
                <div className="flex gap-2">
                  <IdentificationIcon />
                  <label htmlFor="email">
                    <p className="font-bold">Valid Government ID Here:</p>
                  </label>
                </div>

                <input
                  accept="image/*"
                  type="file"
                  onChange={convertToBase64}
                />

                {/*Preview the image being submitted*/}
                {image == "" || image == null ? (
                  ""
                ) : (
                  <img width={300} src={image} />
                )}
              </div>
            </div>
            <button
              type="submit"
              className="bg-first-primary hover:bg-first-primary-light transition-all duration-150 p-3 text-white font-bold rounded-md w-full"
            >
              Register
            </button>
            <div className="flex gap-4">
              <p>
                Already Have an Account?{" "}
                <Link to="/login" className="font-bold w-100">
                  Log In Here
                </Link>
              </p>
            </div>
          </form>
          <div className="basis-96 grow">
            <img src={signupImage} alt="signup" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
