import React from "react";
import { UserLayout } from "../../components/layout/UserLayout";

import { ReviewTable } from "../../components/books/ReviewTable";

const ReviewPage = () => {
  return (
    <UserLayout title="Reviews">
      <div className="">
        {/* book listing table  */}

        <ReviewTable />
      </div>
    </UserLayout>
  );
};

export default ReviewPage;
