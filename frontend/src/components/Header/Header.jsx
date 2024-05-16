import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <Link to="/">Events</Link>
      <br />
      <Link to="/login">Login</Link>
      <br />
      <Link to="/register">Sign Up</Link>
    </>
  );
}
