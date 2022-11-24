import React, { useState } from "react";
import Radium from "radium";
import logo from "../assets/images/ecourse-logo.png";
import { FaBars } from "react-icons/fa";
import { MdClose } from "react-icons/md";
import { NavLink } from "react-router-dom";

const styles = {
  container: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "30px 70px",
    "@media (max-width: 900px)": {
      padding: "30px 30px",
    },
  },
  logo: {
    width: "auto",
    height: "50px",
  },
  list: {
    listStyleType: "none",
    display: "flex",
    gap: "50px",
    "@media (max-width: 900px)": {
      display: "none",
    },
  },
  navlink: {
    textDecoration: "none",
    color: "rgb(220,220,220)",
  },
  navlinkMenu: {
    textDecoration: "none",
    color: "black",
  },
  activeWeb: {
    textDecoration: "none",
    color: "white",
  },
  activeMob: {
    textDecoration: "none",
    color: "rgb(233,40,80)",
  },
  barBox: {
    width: "40px",
    height: "40px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgb(233,40,80)",
    cursor: "pointer",
    "@media (min-width: 900px)": {
      display: "none",
    },
  },
  barIcon: {
    color: "rgb(245,245,245)",
    fontSize: "22px",
  },
  menu: {
    width: "100%",
    backgroundColor: "white",
    position: "absolute",
    top: "100px",
  },
  item: {
    width: "100%",
    height: "55px",
    borderBottom: "1px solid rgb(245,245,245)",
    display: "flex",
    alignItems: "center",
    padding: "0px 30px",
  },
};
const NavBar = () => {
  const [menuBar, setMenuBar] = useState(false);
  return (
    <>
      <div style={styles.container}>
        <img style={styles.logo} src={logo} alt="Logo" />
        <ul style={styles.list}>
          <li>
            <NavLink
              to={"/"}
              style={({ isActive }) =>
                isActive ? styles.activeWeb : styles.navlink
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/about"}
              style={({ isActive }) =>
                isActive ? styles.activeWeb : styles.navlink
              }
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/courses"}
              style={({ isActive }) =>
                isActive ? styles.activeWeb : styles.navlink
              }
            >
              Courses
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/testimonials"}
              style={({ isActive }) =>
                isActive ? styles.activeWeb : styles.navlink
              }
            >
              Testimonials
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/pricing"}
              style={({ isActive }) =>
                isActive ? styles.activeWeb : styles.navlink
              }
            >
              Pricing
            </NavLink>
          </li>
        </ul>
        {menuBar ? (
          <div style={styles.barBox} onClick={() => setMenuBar(false)}>
            <MdClose style={styles.barIcon} />
          </div>
        ) : (
          <div style={styles.barBox} onClick={() => setMenuBar(true)}>
            <FaBars style={styles.barIcon} />
          </div>
        )}
      </div>
      {menuBar && (
        <div style={styles.menu}>
          <NavLink
            to={"/"}
            style={({ isActive }) =>
              isActive ? styles.activeMob : styles.navlinkMenu
            }
          >
            <div style={styles.item}>
              <p>Home</p>
            </div>
          </NavLink>
          <NavLink
            to={"/about"}
            style={({ isActive }) =>
              isActive ? styles.activeMob : styles.navlinkMenu
            }
          >
            <div style={styles.item}>
              <p>About</p>
            </div>
          </NavLink>
          <NavLink
            to={"/courses"}
            style={({ isActive }) =>
              isActive ? styles.activeMob : styles.navlinkMenu
            }
          >
            <div style={styles.item}>
              <p>Courses</p>
            </div>
          </NavLink>
          <NavLink
            to={"/testimonials"}
            style={({ isActive }) =>
              isActive ? styles.activeMob : styles.navlinkMenu
            }
          >
            <div style={styles.item}>
              <p>Testimonials</p>
            </div>
          </NavLink>
          <NavLink
            to={"/pricing"}
            style={({ isActive }) =>
              isActive ? styles.activeMob : styles.navlinkMenu
            }
          >
            <div style={styles.item}>
              <p>Pricing</p>
            </div>
          </NavLink>
        </div>
      )}
    </>
  );
};

export default Radium(NavBar);
