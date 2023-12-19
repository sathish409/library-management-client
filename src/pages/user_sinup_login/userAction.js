import {
  getAllUsers,
  getNewAccessJwt,
  getUser,
  logOutUser,
  postUser,
} from "../../helpers/axiosHelper";
import { setAllUsers, setUser } from "./userSlic";

export const getUserAction = () => async (dispatch) => {
  const { status, message, user } = await getUser();

  if (status === "success") {
    // send user to the store
    dispatch(setUser(user));
  }
};

export const getAllUsersAction = () => async (dispatch) => {
  const { status, message, users } = await getAllUsers();

  if (status === "success") {
    // send user to the store
    dispatch(setAllUsers(users));
  }
};

//Let's login user automatically

export const autoLogin = () => async (dispatch) => {
  //check if we have  accessJWT. if so use, get user and mouunt in the state
  const accessJWT = sessionStorage.getItem("accessJWT");
  const refreshJWT = localStorage.getItem("refreshJWT");

  if (!accessJWT && refreshJWT) {
    const response = await getNewAccessJwt();
    if (response?.accessJWT) {
      sessionStorage.setItem("accessJWT", response.accessJWT);
      dispatch(getUserAction());
    }
  }

  dispatch(getUserAction());
};

export const logOutUserAction = (email) => async (dispatch) => {
  const accessJWT = sessionStorage.getItem("accessJWT");
  //clear the state
  dispatch(setUser({}));

  // clear browser storage
  sessionStorage.removeItem("accessJWT");
  localStorage.removeItem("refreshJWT");

  // delete both jwts from server - both table
  await logOutUser({ email, accessJWT });
};
