import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { AccountList } from "./Component/AL.js";

const Account = function ({ updateAccountName }) {
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
  return (
    <>
      <h2>Account</h2>
      <div>ID: </div>
      <input
        onChange={(i) => {
          setInputID(i.target.value);
        }}
      ></input>
      <div>Password: </div>
      <input
        onChange={(p) => {
          setInputPassword(p.target.value);
        }}
      ></input>
      {AccError && <div>Wrong ID & Password !</div>}
      {IDName ? (
        <Link to="/">
          <button
            onClick={() => {
              PassAccountName();
            }}
          >
            Login
          </button>
        </Link>
      ) : (
        <button
          onClick={() => {
            setAccError(true);
          }}
        >
          Login
        </button>
      )}
    </>
  );
};

export default Account;
