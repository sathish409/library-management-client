import { Button, Form } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteReviewAction,
  updateReviewAction,
} from "../../pages/book/bookAction";

export const ReviewTable = () => {
  const dispatch = useDispatch();
  const { reviews } = useSelector((state) => state.bookInfo);

  const handleOnStatusUpdate = (e) => {
    const { value, checked } = e.target;

    if (window.confirm("Are you sure you want to updatee")) {
      // call server to update the review and refetch all the review

      dispatch(
        updateReviewAction({
          _id: value,
          status: checked ? "active" : "inactive",
        })
      );
    }
  };

  const handleOnDelete = (_id) => {
    if (window.confirm("Are you sure you want to Delete")) {
      // call server to update the review and refetch all the review
      dispatch(deleteReviewAction(_id));
    }
  };

  return (
    <div className="">
      <p className="d-flex justify-content-between">
        <label htmlFor="">10 Reviews found!</label>
        <div>
          <Form.Control type="text" placeholder="search book by name" />
        </div>
      </p>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>status</th>
            <th>Book Name</th>
            <th>Review title</th>
            <th>Rating</th>
            <th>message</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {reviews.map(
            ({ _id, status, title, message, rating, bookName }, i) => (
              <tr key={i}>
                <td>{i + 1}</td>
                <td>
                  <Form.Check
                    type="switch"
                    checked={status === "active"}
                    id="custom-switch"
                    label={status}
                    onChange={handleOnStatusUpdate}
                    value={_id}
                  />
                </td>
                <td>{bookName}</td>
                <td>{title}</td>
                <td>{message}</td>
                <td>{rating}</td>
                <td>
                  <Button variant="danger" onClick={() => handleOnDelete(_id)}>
                    Delete
                  </Button>
                </td>
              </tr>
            )
          )}
        </tbody>
      </Table>
    </div>
  );
};
