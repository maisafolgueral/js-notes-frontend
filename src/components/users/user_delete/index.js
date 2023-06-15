import React, { useState } from "react";
import UserService from "../../../services/users";
import { Redirect } from "react-router-dom";

function UsersDelete() {
  const [redirectToHome, setRedirectToHome] = useState(false);

  const deleteUser = async () => {
    if (window.confirm("Você tem certeza que deseja excluir essa conta?")) {
      try {
        await UserService.deleteUser(); 
        setRedirectToHome(true);
      } catch (error) {
        console.log("Error:", error);
      }
    }
  };

  if (redirectToHome === true) {
    return <Redirect to={{ pathname: "/" }} />;
  }

  return (
    <button className="button is-danger" onClick={() => deleteUser()}>
      Excluir conta
    </button>
  );
}

export default UsersDelete;
