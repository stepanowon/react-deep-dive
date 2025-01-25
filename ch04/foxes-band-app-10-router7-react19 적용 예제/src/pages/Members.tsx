import { Await, Navigate, useAsyncValue, useLoaderData, useLocation } from "react-router-dom";
import { MemberType } from "../loaders";
import React from "react";
import { ReactCsspin } from "react-csspin";

const Members = () => {
  const members = useAsyncValue() as MemberType[];

  const imgstyle = { width: 90, height: 80 };
  const list =
    typeof members !== "string" ? (
      members.map((member) => {
        return (
          <div className="col-6 col-md-4 col-lg-3" key={member.name}>
            <img src={member.photo} className="img-thumbnail" alt={member.name} style={imgstyle} />
            <br />
            <h6>{member.name}</h6>
            <br />
            <br />
          </div>
        );
      })
    ) : (
      <Navigate to={"/"} state={{ from: "/members" }} />
    );

  return (
    <div>
      <h2 className="m-4">Members</h2>
      <div className="container">
        <div className="row">{list}</div>
      </div>
    </div>
  );
};

type DeferredMembersDataType = { members: Promise<MemberType[]> };
const MembersSuspense = () => {
  const location = useLocation()
  const data = useLoaderData() as DeferredMembersDataType;
  return (
    <React.Suspense fallback={<ReactCsspin />} key={location.key}>
      <Await resolve={data.members}>
        <Members />
      </Await>
    </React.Suspense>
  );
};

export { MembersSuspense };
export default Members;
