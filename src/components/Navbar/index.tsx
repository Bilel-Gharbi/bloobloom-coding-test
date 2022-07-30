/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { useAppDispatch } from "../../hooks";
import { toggleSideBar } from "../../reducers/ui/uiSlice";
import Logo from "./Logo";
import "./style.css";

type Props = {};

const Navbar = (props: Props) => {
  const dispatch = useAppDispatch();

  return (
    <>
      <header className="navbar">
        <a
          className="navbar-button menu-button"
          onMouseEnter={() => dispatch(toggleSideBar(true))}
        >
          <span className="btn-text">Menu</span>
        </a>
        <a href="/" className="logo">
          <Logo />
        </a>
        <a></a>
      </header>
    </>
  );
};

export default Navbar;
