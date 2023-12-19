import React, { useEffect } from "react";
import { UserLayout } from "../../components/layout/UserLayout";
import { BurrowHistoryTable } from "../../components/burrow-history/BurrowHistoryTable";
import { useDispatch, useSelector } from "react-redux";
import { fetchBurrowsActioin } from "../burrow-history/burrowActions";

const MyBook = () => {
  const { user } = useSelector((state) => state.userInfo);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBurrowsActioin());
  }, [dispatch]);

  return (
    <UserLayout title={"My Books burrow history"}>
      <BurrowHistoryTable userId={user._id} />
    </UserLayout>
  );
};

export default MyBook;
