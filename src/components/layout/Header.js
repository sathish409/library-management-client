import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, useNavigate } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { MdDashboard } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { logOutUserAction } from "../../pages/user_sinup_login/userAction";

export const Header = () => {
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.userInfo);

  return (
    <Navbar expand="md" variant="dark" className="bg-dark">
      <Container>
        <Link className="navbar-brand" to="/">
          CL
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {user?._id ? (
              <>
                <Link className="nav-link" to="/">
                  <FaHome /> Home
                </Link>

                <Link className="nav-link " to="/dashboard">
                  <MdDashboard /> Dashboard
                </Link>

                <Link
                  className="nav-link"
                  to="/"
                  onClick={() => dispatch(logOutUserAction(user.email))}
                >
                  Logout
                </Link>
              </>
            ) : (
              <>
                <Link className="nav-link" to="/login">
                  Login
                </Link>
                <Link className="nav-link" to="/signup">
                  SignUp
                </Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
