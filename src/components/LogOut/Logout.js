import React from "react";
import { Button } from "rebass";
import FireConnection from "./firebase";
const logOutUser = () => {
  FireConnection.auth().signOut();
};
const LogOut = () => {
  return <Button onClick={logOutUser} children="Log Out" />;
};
export default LogOut;
