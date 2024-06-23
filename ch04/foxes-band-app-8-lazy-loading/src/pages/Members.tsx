import React from "react";
import { MemberType } from "../loaders";
import { Await, useAsyncValue, useLoaderData } from "react-router-dom";
import { ReactCsspin } from "react-csspin";
import "react-csspin/dist/style.css";

const Members = () => {
  const members = useAsyncValue() as MemberType[];

  const imgstyle = { width: 90, height: 80 };
  const list = members.map((member) => {
    return (
      <div className="col-6 col-md-4 col-lg-3" key={member.name}>
        <img src={member.photo} className="img-thumbnail" alt={member.name} style={imgstyle} />
        <br />
        <h6>{member.name}</h6>
        <br />
        <br />
      </div>
    );
  });

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
  const data = useLoaderData() as DeferredMembersDataType;

  return (
    <React.Suspense fallback={<ReactCsspin />}>
      <Await resolve={data.members}>
        <Members />
      </Await>
    </React.Suspense>
  );
};

export { MembersSuspense };
export default Members;
