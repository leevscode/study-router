import React from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="p-3 text-bg-dark">
      <div className="container">
        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-between">
          {/*  Link 는 html 의 a 태그로 변환됨   to 는 href로 변경*/}
          <Link
            to="/"
            className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none"
          >
            로고
          </Link>

          <ul className="nav col-12 col-lg-auto mb-2 justify-content-center mb-md-0">
            <li>
              {/* NavLink 는 a태그로 변환, isActive 있어서 css 포커즈 적용  */}
              {/* isActive 는 URL 을 비교해서 Routes 의 path 경로와 같으면 isActive가 true */}
              <NavLink
                to="/"
                className={({ isActive }) => {
                  return isActive
                    ? "nav-link px-2 text-danger"
                    : // 참이면 danger 리턴(출력)
                      "nav-link px-2 text-white";
                  // 거짓이면 white 리턴(출력)
                }}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) => {
                  return isActive
                    ? "nav-link px-2 text-danger"
                    : // 참이면 danger 리턴(출력)
                      "nav-link px-2 text-white";
                  // 거짓이면 white 리턴(출력)
                }}
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/members"
                className={({ isActive }) => {
                  return isActive
                    ? "nav-link px-2 text-danger"
                    : // 참이면 danger 리턴(출력)
                      "nav-link px-2 text-white";
                  // 거짓이면 white 리턴(출력)
                }}
              >
                Menubars
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/songs"
                className={({ isActive }) => {
                  return isActive
                    ? "nav-link px-2 text-danger"
                    : // 참이면 danger 리턴(출력)
                      "nav-link px-2 text-white";
                  // 거짓이면 white 리턴(출력)
                }}
              >
                Songs
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
