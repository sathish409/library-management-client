import React, { useEffect } from "react";
import { UserLayout } from "../../components/layout/UserLayout";
import { useDispatch, useSelector } from "react-redux";
import { BurrowHistoryTable } from "../../components/burrow-history/BurrowHistoryTable";
import { fetchBurrowsActioin } from "./burrowActions";

const BurrowHistory = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.userInfo);

  useEffect(() => {
    user?.role === "admin" && dispatch(fetchBurrowsActioin());
  }, [user?.role, dispatch]);

  return user?.role === "admin" ? (
    <UserLayout title={"Browser History"}>
      <BurrowHistoryTable />
    </UserLayout>
  ) : (
    <h1>Unauthorize</h1>
  );
};

export default BurrowHistory;
