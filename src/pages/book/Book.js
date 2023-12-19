import React from "react";
import { UserLayout } from "../../components/layout/UserLayout";
import { useSelector } from "react-redux";
import { Button } from "react-bootstrap";
import { BookTable } from "../../components/books/BookTable";
import { Link } from "react-router-dom";

const Book = () => {
  return (
    <UserLayout title="Books">
      <div className="book">
        <div className="text-end mb-3">
          <Link to="/new-book">
            <Button variant="primary">Add New Book</Button>
          </Link>
        </div>
        {/* book listing table  */}

        <BookTable />
      </div>
    </UserLayout>
  );
};

export default Book;
