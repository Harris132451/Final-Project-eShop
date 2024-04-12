import { Link } from "react-router-dom";
import { auth } from "../firebase/firebase.js";
import { signOut } from "firebase/auth";

export default function SignOut() {
  const handleOnClick = async function () {
    try {
      signOut(auth);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <button
      class="flex text-1xl text-white flex-row mr-2 sm:mr-0"
      onClick={() => {
        handleOnClick();
      }}
    >
      <div class="h-auto w-9 pl-2 pr-2 hidden sm:block">
        <img src="/AccBtn.png" />
      </div>
      <div>Login</div>
    </button>
  );
}
