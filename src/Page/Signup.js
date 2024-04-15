import { Link } from "react-router-dom";
import { useState } from "react";
import { auth } from "../firebase/firebase.js";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

function Signup({ updateAccountName }) {
  const [InputName, setInputName] = useState("");
  const [InputID, setInputID] = useState("");
  const [InputPassword, setInputPassword] = useState("");
  const [InputCheckPassword, setInputCheckPassword] = useState("");
  const [Warning, setWarning] = useState(false);
  const [Message, setMessage] = useState("");

  function warning() {
    return (
      <div className="bg-white py-10 dark:bg-dark">
        <div className="container">
          <div className="flex w-full rounded-lg border-l-[6px] border-red bg-red-light-6 p-3 shadow-[0px_2px_10px_0px_rgba(0,0,0,0.08)]">
            <div className="w-full">
              <h5 className="mb-3 text-base font-semibold text-[#BC1C21]">
                ⚠️Uh oh, something went wrong:
              </h5>
              <ul>
                <li className="text-base leading-relaxed text-red-light">
                  {Message}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }

  function checkPassword() {
    if (InputCheckPassword !== "" && InputPassword !== InputCheckPassword) {
      setWarning(true);
      setMessage("Password do not match");
    }
  }

  function checkInput() {
    if (
      InputName === "" ||
      InputID === "" ||
      InputPassword === "" ||
      InputCheckPassword === ""
    ) {
      setWarning(true);
      setMessage("Missing items");
    }
  }

  function handleOnClick() {
    setWarning(false);
    if (checkInput() || checkPassword()) {
      return;
    } else {
      createUserWithEmailAndPassword(auth, InputID, InputCheckPassword)
        .then((userCredential) => {
          const user = userCredential.user;
          console.log("Sign up success!");
          console.log(user);
          console.log(auth.currentUser);
        })
        .then(() => {
          //Update Username
          updateProfile(auth.currentUser, { displayName: InputName })
            .then(() => {
              console.log(
                "Update usename success: ",
                auth.currentUser.displayName
              );
              updateAccountName(auth.currentUser.displayName);
            })
            .catch((error) => console.log(error));
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode);
          console.log(errorMessage);
          setWarning(true);
          switch (error.code) {
            case "auth/invalid-email":
              setMessage("Invalid email format");
              break;
            case "auth/email-already-in-use":
              setMessage("Email already in use");
              break;
            case "auth/weak-password":
              setMessage("Weak password: At least 6 digits");
              break;
            default:
              setMessage("Default");
          }
        });
    }
  }

  return (
    <>
      <section className="bg-gray-1 py-10 dark:bg-dark lg:py-[120px]">
        <div className="container mx-auto">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="relative mx-auto max-w-[525px] overflow-hidden rounded-lg bg-white px-10 py-16 text-center dark:bg-dark-2 sm:px-12 md:px-[60px]">
                <div className="my-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                  <h1>Sign up account here</h1>
                </div>
                <div>
                  {
                    //Control warning message
                    Warning && <div>{warning()}</div>
                  }
                  <input
                    onChange={(el) => {
                      setInputName(el.target.value);
                    }}
                    className="w-full rounded-md border border-stroke bg-transparent mb-6 px-5 py-3 text-base text-black outline-none focus:border-primary focus-visible:shadow-none"
                    type="text"
                    placeholder="Enter username here"
                  ></input>
                  <input
                    onChange={(el) => {
                      setInputID(el.target.value);
                    }}
                    className="w-full rounded-md border border-stroke bg-transparent mb-6 px-5 py-3 text-base text-black outline-none focus:border-primary focus-visible:shadow-none"
                    type="email"
                    placeholder="Enter Email here"
                  ></input>
                  <input
                    onChange={(el) => {
                      setInputPassword(el.target.value);
                    }}
                    className="w-full rounded-md border border-stroke bg-transparent mb-6 px-5 py-3 text-base text-black outline-none focus:border-primary focus-visible:shadow-none"
                    type="password"
                    placeholder="Enter Password here (At least 6 digits)"
                  ></input>
                  <input
                    onChange={(el) => {
                      setInputCheckPassword(el.target.value);
                    }}
                    className="w-full rounded-md border border-stroke bg-transparent mb-6 px-5 py-3 text-base text-black outline-none focus:border-primary focus-visible:shadow-none"
                    type="password"
                    placeholder="Enter Password here again (At least 6 digits)"
                  ></input>
                  <div className="mb-10">
                    <button
                      onClick={() => {
                        handleOnClick();
                      }}
                      className="w-full cursor-pointer rounded-md border border-primary bg-primary px-5 py-3 text-black font-medium transition hover:bg-blue-600"
                    >
                      Sign up
                    </button>
                  </div>
                </div>
                <p className="text-base text-body-color dark:text-dark-6">
                  <span className="pr-0.5">Already a member? </span>
                  <Link
                    to="/Signin"
                    className="text-primary text-blue-800 hover:underline"
                  >
                    Click here
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Signup;
