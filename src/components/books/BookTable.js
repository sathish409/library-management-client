import { Button, Form } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export const BookTable = () => {
  const { books } = useSelector((state) => state.bookInfo);
  return (
    <div className="">
      <p className="d-flex justify-content-between">
        <label htmlFor="">10 books found!</label>
        <div>
          <Form.Control type="text" placeholder="search book by name" />
        </div>
      </p>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Thumbnail</th>
            <th>Book Info</th>
            <th>Book Summary</th>
            <th>Edit</th>
          </tr>
        </thead>
        <tbody>
          {books.map(
            (
              {
                thumbnail,
                _id,
                status,
                name,
                author,
                isbn,
                publishYear,
                description,
              },
              i
            ) => (
              <tr key={i}>
                <td>{i + 1}</td>
                <td>
                  <img src={thumbnail} alt="" width={"150px"} />
                </td>
                <td>
                  <h4>{name}</h4>
                  <p>
                    <span
                      className={
                        status === "active"
                          ? "bg-success p-2 rounded text-light"
                          : " bg-danger p-2 rounded text-light"
                      }
                    >
                      {status}
                    </span>
                  </p>

                  <p>
                    {author} · {publishYear}
                  </p>
                </td>
                <td>{description.slice(0, 100)}...</td>
                <td>
                  <Link to={`/edit-book/${_id}`}>
                    <Button variant="warning">Edit</Button>
                  </Link>
                </td>
              </tr>
            )
          )}
        </tbody>
      </Table>
    </div>
  );
};
