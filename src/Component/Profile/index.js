import React from "react";
import Photo from "./ProfilePhoto";
import { FullName } from "./FullName";
import Address from "./Address";

const index = () => {
  return (
    <div>
      <Photo />
      <FullName />
      <Address />
    </div>
  );
};

export default index;
