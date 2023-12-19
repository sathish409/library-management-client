import React, { useEffect, useState } from "react";
import { UserLayout } from "../../components/layout/UserLayout";
import { useDispatch, useSelector } from "react-redux";
import { Button, Form } from "react-bootstrap";
import { BookTable } from "../../components/books/BookTable";
import { Link, useNavigate, useParams } from "react-router-dom";
import { CustomInput } from "../../components/custom-input/CustomInput";
import {
  deleteBookAction,
  getABookAction,
  postNewBookAction,
  updateBookAction,
} from "./bookAction";

const UpdateBook = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // grab the _id from url
  const { _id } = useParams();
  const [form, setForm] = useState({});

  // get the selectdBook frm state and populate in the form
  const { selectedBook } = useSelector((state) => state.bookInfo);

  useEffect(() => {
    // use that _id to fetch a single book from server

    if (_id !== form._id) {
      dispatch(getABookAction(_id));
      setForm(selectedBook);
    }
  }, [_id, dispatch, selectedBook, form._id]);

  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (!window.confirm("Are you sure you want to update this book?")) {
      return;
    }

    const { __v, updatedAt, isAvailable, isbn, createdAt, dueDate, ...rest } =
      form;
    dispatch(updateBookAction(rest));
    console.log(form);
  };

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleOnDelete = async () => {
    if (window.confirm("Are you sure you wnat to delete this book?")) {
      const isDeleted = await dispatch(deleteBookAction(_id));

      isDeleted && navigate("/books");
    }
  };

  const inputs = [
    {
      label: "Bookl Name",
      name: "name",
      placeholder: "Javascript",
      type: "text",
      required: true,
      value: form.name,
    },
    {
      label: "Thumbnail link",
      name: "thumbnail",
      placeholder: "https://...",
      type: "url",
      required: true,
      value: form.thumbnail,
    },
    {
      label: "Author",
      name: "author",
      placeholder: "Rambow",
      type: "text",
      required: true,
      value: form.author,
    },
    {
      label: "Publish Year",
      name: "publishYear",
      placeholder: "2000",
      type: "number",
      value: form.publishYear,
    },
    {
      label: "ISBN",
      name: "isbn",
      placeholder: "8756453456",
      type: "text",
      required: true,
      disabled: true,
      value: form.isbn,
    },
    {
      label: "description",
      name: "description",
      placeholder: "book details ...",
      type: "text",
      as: "textarea",
      required: true,
      rows: 5,
      value: form.description,
    },
  ];
  return (
    <UserLayout title="Update book">
      <Link to="/books">
        <Button variant="secondary"> &lt; Back</Button>
      </Link>
      <div className="mt-3">
        <Form onSubmit={handleOnSubmit} className=" ">
          <h4>Update data in the form below</h4>
          <hr />
          <Form.Group className="mb-3">
            <label htmlFor="">Status</label>
            <Form.Select name="status" onChange={handleOnChange}>
              <option value="">--Select one --</option>
              <option value="active" selected={form.status === "active"}>
                Active{" "}
              </option>
              <option value="inactive" selected={form.status === "inactive"}>
                Inactive
              </option>
            </Form.Select>
          </Form.Group>

          {inputs.map((item, i) => (
            <CustomInput key={i} {...item} onChange={handleOnChange} />
          ))}

          <div className="d-grid mt-2">
            <Button variant="primary" type="submit">
              {" "}
              Update Book
            </Button>
          </div>
        </Form>

        <div className="d-grid mt-5">
          <Button onClick={handleOnDelete} variant="danger">
            Delete Book
          </Button>
        </div>
      </div>
    </UserLayout>
  );
};

export default UpdateBook;
