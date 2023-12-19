import React from "react";
import { Link } from "react-router-dom";
import { MdDashboard } from "react-icons/md";
import { ImBooks } from "react-icons/im";
import { PiStudentBold } from "react-icons/pi";
import { FaHistory } from "react-icons/fa";
import { FaUserCog } from "react-icons/fa";
import { useSelector } from "react-redux";
import { FaStar } from "react-icons/fa";

export const Sidebar = () => {
  const { user } = useSelector((state) => state.userInfo);
  return (
    <div className="p-2 sidebar">
      <div className="top mt-5"> CL - Admin </div>
      <hr />
      <div className="bottom">
        <ul>
          <li>
            <Link
              className="nav-link d-flex align-items-center gap-2"
              to="/dashboard"
            >
              <MdDashboard /> Dashboard
            </Link>
          </li>
          {user?.role === "admin" && (
            <>
              <li>
                <Link
                  className="nav-link d-flex align-items-center gap-2"
                  to="/books"
                >
                  <ImBooks /> Books
                </Link>
              </li>
              <li>
                <Link
                  className="nav-link d-flex align-items-center gap-2"
                  to="/reviews"
                >
                  <FaStar /> Reviews
                </Link>
              </li>
              <li>
                <Link
                  className="nav-link d-flex align-items-center gap-2"
                  to="/students"
                >
                  <PiStudentBold /> Students
                </Link>
              </li>
              <li>
                <Link
                  className="nav-link d-flex align-items-center gap-2"
                  to="/all-admins"
                >
                  <PiStudentBold /> All Admins
                </Link>
              </li>
              <li>
                <Link
                  className="nav-link d-flex align-items-center gap-2"
                  to="/burrow-history"
                >
                  <FaHistory />
                  All Burrow History
                </Link>
              </li>
            </>
          )}

          <li>
            <Link
              className="nav-link d-flex align-items-center gap-2"
              to="/my-books"
            >
              <FaHistory /> My Books
            </Link>
          </li>
          <li>
            <Link
              className="nav-link d-flex align-items-center gap-2"
              to="/my-profile"
            >
              <FaUserCog /> My Profile
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
