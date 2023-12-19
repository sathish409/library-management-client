import { Alert, Button, Form } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { returnBurrowedBookActioin } from "../../pages/burrow-history/burrowActions";
import { Review } from "../review/Review";
import { CustomModal } from "../custom-modal/CustomModal";
import { setShowModal } from "../../system-state/systemSlice";
import { useState } from "react";

export const BurrowHistoryTable = ({ userId }) => {
  const dispatch = useDispatch();
  const [selectedBurrow, setSelectedBurrow] = useState({});
  //if this is requested from all burrow history
  let { burrows } = useSelector((state) => state.burrowInfo);

  // if show only admins burrow books list

  //applies to admin and students both
  if (userId) {
    burrows = burrows.filter((item) => item.userId === userId);
  }

  const handleOnReturn = (_id) => {
    if (window.confirm("Are you ready to reaturn the book?")) {
      // call teh api to update the book and re fetch all teh burrow history to synchronize the udpate via action
      dispatch(returnBurrowedBookActioin(_id));
    }
  };

  const handleOnReview = (obj) => {
    setSelectedBurrow(obj);
    // show modal
    dispatch(setShowModal(true));
  };
  return (
    <div className="">
      <CustomModal title="Give reviews">
        <Review {...selectedBurrow} />
      </CustomModal>

      <div className="d-flex justify-content-between">
        <label htmlFor="">{burrows.lenght} burrow history found!</label>
        <div>
          <Form.Control type="text" placeholder="search book by name" />
        </div>
      </div>

      <Table bordered>
        <thead>
          <tr>
            <th>#</th>
            <th>Thumbnail</th>
            <th>Book Name</th>
            <th>Student name</th>
            <th>Burrowed Date</th>
            <th>Due Date</th>
            <th>Returned</th>
          </tr>
        </thead>
        <tbody>
          {burrows.map(
            (
              {
                thumbnail,
                _id,
                userName,
                bookName,
                bookId,
                dueDate,
                isReturned,
                returnedDate,
                createdAt,
                reviewGiven,
              },
              i
            ) => (
              <tr key={i} className="tr-red">
                <td>{i + 1}</td>
                <td>
                  <img src={thumbnail} alt="" width={"80px"} />
                </td>
                <td>
                  <h4>{bookName}</h4>
                </td>
                <td>{userName}</td>
                <td>{createdAt?.slice(0, 10)}</td>
                <td>{dueDate?.slice(0, 10)}</td>
                {userId ? (
                  <td>
                    {isReturned ? (
                      reviewGiven ? (
                        <span className="text-success fw-bolder">
                          {" "}
                          Review Received
                        </span>
                      ) : (
                        <Button
                          onClick={() =>
                            handleOnReview({ _id, bookId, bookName })
                          }
                          variant="warning"
                        >
                          Leave Review
                        </Button>
                      )
                    ) : (
                      <Button onClick={() => handleOnReturn(_id)}>
                        Return Book
                      </Button>
                    )}
                  </td>
                ) : (
                  <td>
                    <Alert variant={isReturned ? "success" : "warning"}>
                      {isReturned ? "Returned" : "Not Yet"}
                    </Alert>
                  </td>
                )}
              </tr>
            )
          )}
        </tbody>
      </Table>
    </div>
  );
};
