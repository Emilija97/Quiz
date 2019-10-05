import { User } from "../models/User";
import { Action } from "redux";
import {
  LOGIN_SUCCESS,
  LogInSuccess,
  LOGIN_FAILURE,
  LogInFailure,
  CHECK_USER,
  CheckUser,
  CHECK_USER_SUCCESS,
  CheckUserSuccess,
  CHECK_USER_FAILURE,
  CheckUserFailure,
  LOGOUT
} from "./actions";

export interface UserState {
  user: User;
  isLoggedIn: boolean;
  errorMessage: string;
}

const initialState: UserState = {
  user: {
    id: "",
    username: "",
    password: "",
    name: "",
    surname: "",
    score: 0
  },
  isLoggedIn: false,
  errorMessage: ""
};

// const initialState: User = new User();
// const initialState = user ? { loggedIn: true, user } : {};
// const initialState: User = {
//   id: -1,
//   username: "",
//   password: "",
//   name: "",
//   surname: "",
//   score: -1
// };

export function authReducer(state = initialState, action: Action) {
  switch (action.type) {
    case LOGIN_SUCCESS: {
      console.log("Usao sam u success");
      const { user } = action as LogInSuccess;
      console.log(user);
      let newState: UserState = {
        user: user,
        isLoggedIn: true,
        errorMessage: ""
      };
      localStorage.setItem("token", user.id);
      console.log(newState);
      return { user: user, isLoggedIn: true, errorMessage: "" };
      //   return newState;
    }
    case LOGIN_FAILURE: {
      console.log("Usao sam u failure");
      const { errorMessage } = action as LogInFailure;
      const newState: UserState = {
        user: {
          id: "",
          username: "",
          password: "",
          name: "",
          surname: "",
          score: 0
        },
        isLoggedIn: false,
        errorMessage: "Username or password is invalid."
      };
      return newState;
    }
    case CHECK_USER_SUCCESS: {
      const { user } = action as CheckUserSuccess;
      return { user: user, isLoggedIn: true, errorMessage: "" };
    }
    case CHECK_USER_FAILURE: {
      const { errorMessage } = action as CheckUserFailure;
      localStorage.removeItem("token");
      return {
        user: {
          id: "",
          username: "",
          password: "",
          name: "",
          surname: "",
          score: 0
        },
        isLoggedIn: true,
        errorMessage: errorMessage
      };
    }
    case LOGOUT: {
      localStorage.removeItem("token");
      return initialState;
    }
    default: {
      return state;
    }
  }
}
