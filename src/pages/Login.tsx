import React, { useEffect } from "react";
import { auth } from "../Store/auth";
import loginPage from "../assets/loginpage.jpg";
import { TextField } from "@mui/material";
import Button from "@mui/material/Button/Button";
import { useNavigate } from "react-router";
import FacebookIcon from "@mui/icons-material/Facebook";
import {
  initFacebookSdk,
  getFacebookLoginStatus,
  fbLogin,
} from "../utils/FacebookSdk";

interface LoginState {
  password: string;
  username: string;
  isLoading: boolean;
  error: string;
  isLoggedIn: boolean;
}

type LoginAction =
  | { type: "login" | "success" | "error" | "logout" }
  | { type: "field"; fieldName: string; payload: string };

const loginReducer = (state: LoginState, action: LoginAction): LoginState => {
  switch (action.type) {
    case "field": {
      return {
        ...state,
        [action.fieldName]: action.payload,
      };
    }
    case "login": {
      return {
        ...state,
        error: "",
        isLoading: true,
      };
    }
    case "success": {
      return { ...state, error: "", isLoading: false, isLoggedIn: true };
    }
    case "error": {
      return {
        ...state,
        isLoading: false,
        isLoggedIn: false,
        username: "",
        password: "",
        error: "Incorrect username or password!",
      };
    }
    case "logout": {
      return {
        ...state,
        isLoggedIn: false,
      };
    }
    default:
      return state;
  }
};

const initialState: LoginState = {
  password: "",
  username: "",
  isLoading: false,
  error: "",
  isLoggedIn: false,
};

export default function Login() {
  const [state, dispatch] = React.useReducer(loginReducer, initialState);
  const { username, password, isLoading, error, isLoggedIn } = state;
  const navigate = useNavigate();

  useEffect(() => {
    console.log("Started use effect");
    initFacebookSdk().then(() => {
      getFacebookLoginStatus().then((response) => {
        if (response == null) {
          console.log("No login status for the person");
        } else {
          console.log(response);
        }
      });
    });
  }, []);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch({ type: "login" });

    try {
      await auth({ username, password });
      dispatch({ type: "success" });
      navigate("/website");
    } catch (error) {
      dispatch({ type: "error" });
    }
  };

  function login() {
    console.log("reached log in button");
    fbLogin().then((response) => {
      console.log(response);
      if (response.status === "connected") {
        console.log("Person is connected");
        alert("Person is connected");
      } else {
        // something
        alert("error-person not connected");
      }
    });
  }

  return (
    <div className="App">
      <div className="min-h-screen w-screen">
        {isLoggedIn ? (
          <>
            <p>{`Hello ${username}`}</p>
            <button type="button" onClick={() => dispatch({ type: "logout" })}>
              Log out
            </button>
          </>
        ) : (
          <div className="flex w-full">
            <img
              src={loginPage}
              alt="image"
              width={900}
              className="h-screen object-fill"
            ></img>
            <div>
              <form
                className="border border-black ml-[6rem] mt-[40%] rounded-md shadow-md shadow-gray-500"
                onSubmit={onSubmit}
              >
                <div className="bg-slate-400 text-black font-bold text-centre p-3">
                  {" "}
                  Login
                </div>

                <div className="p-5">
                  {error && <p className="text-red-700">{error}</p>}
                  <div className="flex gap-4 my-3">
                    <label>UserName</label>
                    <TextField
                      type="text"
                      placeholder="username"
                      size="small"
                      value={username}
                      onChange={(e) =>
                        dispatch({
                          type: "field",
                          fieldName: "username",
                          payload: e.currentTarget.value,
                        })
                      }
                    />
                  </div>

                  <div className="flex gap-5 mb-3">
                    <label>Password</label>
                    <TextField
                      type="password"
                      placeholder="password"
                      autoComplete="new-password"
                      size="small"
                      value={password}
                      onChange={(e) =>
                        dispatch({
                          type: "field",
                          fieldName: "password",
                          payload: e.currentTarget.value,
                        })
                      }
                    />
                  </div>

                  <div className=" flex justify-between">
                    <div>
                      <a className="cursor-pointer  pt-5">
                        Login with{" "}
                        <FacebookIcon
                          className="hover:text-[#FF0000]"
                          onClick={login}
                        />
                      </a>
                    </div>
                    <Button
                      type="submit"
                      className="submit"
                      disabled={isLoading}
                      variant="contained"
                    >
                      {isLoading ? "Loggin in....." : "Login"}
                    </Button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
