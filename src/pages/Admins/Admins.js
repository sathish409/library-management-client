import React, { useEffect } from "react";
import { UserLayout } from "../../components/layout/UserLayout";
import { useDispatch, useSelector } from "react-redux";
import { getAllUsersAction } from "../user_sinup_login/userAction";
import { UsersTable } from "../../components/users/UsersTable";

const Admins = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.userInfo);

  useEffect(() => {
    user?.role === "admin" && dispatch(getAllUsersAction());
  }, [user?.role, dispatch]);

  return user?.role === "admin" ? (
    <UserLayout title={"All Admins"}>
      <UsersTable role="admin" />
    </UserLayout>
  ) : (
    <h1>Unauthorize</h1>
  );
};

export default Admins;
