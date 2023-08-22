import api from "services/api";
import Cookies from "js-cookie";
import { useState, useCallback } from "react";

const useSignIn = () => {
  const [data, setData] = useState({});
  const [error, setError] = useState(null);

  const signIn = useCallback(async (user) => {
    if (user) {
      api
        .post("/users/sign_in", user)
        .then((response) => {
          Cookies.set("email", response.data.email);
          Cookies.set(
            "authentication_token",
            response.data.authentication_token
          );
          setData(response.data);
        })
        .catch((err) => {
          setError(error);
        });
    }
  }, []);

  return { error, data, signIn };
};

export default useSignIn;
