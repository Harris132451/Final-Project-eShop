import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { AccountList } from "./Component/AL.js";
import { auth } from "../firebase/firebase.js";
import { signInWithEmailAndPassword } from "firebase/auth";

function warning() {
  return (
    <div className="bg-white py-10 dark:bg-dark">
      <div className="container">
        <div className="flex w-full rounded-lg border-l-[6px] border-red bg-red-light-6 p-3 shadow-[0px_2px_10px_0px_rgba(0,0,0,0.08)]">
          <div className="w-full">
            <h5 className="mb-3 text-base font-semibold text-[#BC1C21]">
              ⚠️Uh oh, something went wrong
            </h5>
            <ul className="list-inside list-disc">
              <li className="text-base leading-relaxed text-red-light">
                Incorrect ID or Password !
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

const Signin = function ({ updateAccountName }) {
  const [InputID, setInputID] = useState("");
  const [InputPassword, setInputPassword] = useState("");
  const [IDName, setIDName] = useState(null);
  const [AccError, setAccError] = useState(false);

  useEffect(() => {
    setIDName(null);
    AccountList.forEach((a) => {
      if (a.id === InputID && a.password === InputPassword) {
        setIDName(a.name);
      }
    });
  }, [InputID, InputPassword]);

  function PassAccountName() {
    updateAccountName(IDName);
    setIDName(null);
  }

  function handleOnClick() {
    signInWithEmailAndPassword(auth, InputID, InputPassword)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
      });
  }

  return (
    <>
      <section className="bg-gray-1 py-10 dark:bg-dark lg:py-[120px]">
        <div className="container mx-auto">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="relative mx-auto max-w-[525px] overflow-hidden rounded-lg bg-white px-10 py-16 text-center dark:bg-dark-2 sm:px-12 md:px-[60px]">
                <div className="my-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                  <h1>Sign in to your account</h1>
                </div>
                <div>
                  {AccError && <div>{warning()}</div>}
                  <input
                    onChange={(i) => {
                      setInputID(i.target.value);
                    }}
                    className="w-full rounded-md border border-stroke bg-transparent mb-6 px-5 py-3 text-base text-black outline-none focus:border-primary focus-visible:shadow-none"
                    type="text"
                    placeholder="ID"
                  ></input>
                  <input
                    onChange={(p) => {
                      setInputPassword(p.target.value);
                    }}
                    className="w-full rounded-md border border-stroke bg-transparent mb-6 px-5 py-3 text-base text-black outline-none focus:border-primary focus-visible:shadow-none"
                    type="password"
                    placeholder="Password"
                  ></input>
                  <div className="mb-10">
                    <button
                      onClick={() => {
                        handleOnClick();
                      }}
                    >
                      Firebase
                    </button>
                    {IDName ? (
                      <Link to="/">
                        <button
                          onClick={() => {
                            PassAccountName();
                          }}
                          className="w-full cursor-pointer rounded-md border border-primary bg-primary px-5 py-3 text-black font-medium transition hover:bg-gray-400"
                        >
                          Login
                        </button>
                      </Link>
                    ) : (
                      <button
                        onClick={() => {
                          setAccError(true);
                        }}
                        className="w-full cursor-pointer rounded-md border border-primary bg-primary px-5 py-3 text-black font-medium transition hover:bg-blue-600"
                      >
                        Login
                      </button>
                    )}
                  </div>
                </div>
                <p className="text-base text-body-color dark:text-dark-6">
                  <span className="pr-0.5">Not a member yet? </span>
                  <Link
                    to="/Signup"
                    className="text-primary text-blue-800 hover:underline"
                  >
                    Sign Up
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Signin;
