import { toast } from "react-toastify";
import {
  fetchBurrows,
  postBurrow,
  returnBurrowedBook,
} from "../../helpers/axiosHelper";
import { getABookAction } from "../book/bookAction";
import { setBurrows } from "./burrowSlice";

export const postBurrowActioin = (obj) => async (dispatch) => {
  const pending = postBurrow(obj);
  toast.promise(pending, {
    pending: "Please wait...",
  });
  const { status, message } = await pending;
  toast[status](message);

  if (status === "success") {
    // refetch the selected book and update the page

    dispatch(getABookAction(obj.bookId));
  }
};

export const returnBurrowedBookActioin = (_id) => async (dispatch) => {
  const pending = returnBurrowedBook(_id);
  toast.promise(pending, {
    pending: "Please wait...",
  });
  const { status, message } = await pending;
  toast[status](message);

  if (status === "success") {
    // refetch all the books - check first
    // refetch all burrow

    dispatch(fetchBurrowsActioin());
  }
};

export const fetchBurrowsActioin = () => async (dispatch) => {
  const { status, message, burrows } = await fetchBurrows();

  if (status === "success") {
    // refetch the selected Burrow and update the page

    dispatch(setBurrows(burrows));
  }
};
