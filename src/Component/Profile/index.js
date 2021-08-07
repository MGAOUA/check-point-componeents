import React from "react";
import Photo from "./ProfilePhoto";
import { FullName } from "./FullName";
import Address from "./Address";

const index = () => {
  const afficher = () => {
    alert(" I need to be more payed ");
  };
  return (
    <div>
      <Photo func={afficher} />
      <FullName fullName="GAOUA Meriem" />
      <Address address="ALGER" />
    </div>
  );
};

export default index;
