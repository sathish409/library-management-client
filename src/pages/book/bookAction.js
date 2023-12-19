import { toast } from "react-toastify";
import {
  deleteBook,
  deleteReview,
  fetchReviews,
  getBooks,
  postBook,
  postReview,
  updateBook,
  updateReview,
} from "../../helpers/axiosHelper";
import { setABook, setBooks, setReviews } from "./bookSlice";
import { setShowModal } from "../../system-state/systemSlice";
import { fetchBurrowsActioin } from "../burrow-history/burrowActions";

export const getAllBooksAction = () => async (dispatch) => {
  const { status, message, books } = await getBooks();
  if (status === "success") {
    dispatch(setBooks(books));
  }
};

export const getABookAction = (_id) => async (dispatch) => {
  const { status, message, books } = await getBooks(_id);
  if (status === "success") {
    dispatch(setABook(books));
  }
};

export const postNewBookAction = (bookObj) => async (dispatch) => {
  const pending = postBook(bookObj);
  toast.promise(pending, {
    pending: "Please wait...",
  });
  const { status, message } = await pending;
  toast[status](message);

  if (status === "success") {
    // call the fuction that fatches all the books and updates the store
    dispatch(getAllBooksAction());
  }
};

export const updateBookAction = (bookObj) => async (dispatch) => {
  const pending = updateBook(bookObj);
  toast.promise(pending, {
    pending: "Please wait...",
  });
  const { status, message } = await pending;
  toast[status](message);

  if (status === "success") {
    // call the fuction that fatches all the books and updates the store
    dispatch(getAllBooksAction());
    dispatch(setABook({}));
  }
};

export const deleteBookAction = (_id) => async (dispatch) => {
  const pending = deleteBook(_id);
  toast.promise(pending, {
    pending: "Please wait...",
  });
  const { status, message } = await pending;
  toast[status](message);

  if (status === "success") {
    // call the fuction that fatches all the books and updates the store
    dispatch(getAllBooksAction());
    return true;
  }
};

// ========= review actions
export const postNewReviewAction = (reviewObj) => async (dispatch) => {
  const pending = postReview(reviewObj);

  toast.promise(pending, {
    pending: "Please wait...",
  });

  const { status, message } = await pending;
  toast[status](message);

  if (status === "success") {
    dispatch(setShowModal(false));

    //refetch all burrows
    dispatch(fetchBurrowsActioin());
    // call the fuction that fatches all the reviews and updates the store
    // dispatch(getAllReviewsAction());
  }
};
export const updateReviewAction = (reviewObj) => async (dispatch) => {
  const pending = updateReview(reviewObj);

  toast.promise(pending, {
    pending: "Please wait...",
  });

  const { status, message } = await pending;
  toast[status](message);

  if (status === "success") {
    dispatch(fetchReviewsAction());
  }
};
export const deleteReviewAction = (_id) => async (dispatch) => {
  const pending = deleteReview(_id);

  toast.promise(pending, {
    pending: "Please wait...",
  });

  const { status, message } = await pending;
  toast[status](message);

  if (status === "success") {
    dispatch(fetchReviewsAction());
  }
};

export const fetchReviewsAction = () => async (dispatch) => {
  const { status, message, reviews } = await fetchReviews();

  if (status === "success") {
    dispatch(setReviews(reviews));
  }
};
