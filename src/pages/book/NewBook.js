import React, { useState } from "react";
import { UserLayout } from "../../components/layout/UserLayout";
import { useDispatch, useSelector } from "react-redux";
import { Button, Form } from "react-bootstrap";
import { BookTable } from "../../components/books/BookTable";
import { Link } from "react-router-dom";
import { CustomInput } from "../../components/custom-input/CustomInput";
import { postNewBookAction } from "./bookAction";

const NewBook = () => {
  const dispatch = useDispatch();
  const [book, setBook] = useState({});

  const handleOnSubmit = (e) => {
    e.preventDefault();
    dispatch(postNewBookAction(book));
  };
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setBook({
      ...book,
      [name]: value,
    });
  };

  const inputs = [
    {
      label: "Bookl Name",
      name: "name",
      placeholder: "Javascript",
      type: "text",
      required: true,
    },
    {
      label: "Thumbnail link",
      name: "thumbnail",
      placeholder: "https://...",
      type: "url",
      required: true,
    },
    {
      label: "Author",
      name: "author",
      placeholder: "Rambow",
      type: "text",
      required: true,
    },
    {
      label: "Publish Year",
      name: "publishYear",
      placeholder: "2000",
      type: "number",
    },
    {
      label: "ISBN",
      name: "isbn",
      placeholder: "8756453456",
      type: "text",
      required: true,
    },
    {
      label: "description",
      name: "description",
      placeholder: "book details ...",
      type: "text",
      as: "textarea",
      required: true,
      rows: 5,
    },
  ];
  return (
    <UserLayout title="Add new book">
      <Link to="/books">
        <Button variant="secondary"> &lt; Back</Button>
      </Link>
      <div className="mt-3">
        <Form onSubmit={handleOnSubmit} className=" ">
          <h4>Enter books details below</h4>
          <hr />
          {inputs.map((item, i) => (
            <CustomInput key={i} {...item} onChange={handleOnChange} />
          ))}

          <div className="d-grid mt-2">
            <Button variant="primary" type="submit">
              {" "}
              Login
            </Button>
          </div>
        </Form>
      </div>
    </UserLayout>
  );
};

export default NewBook;
