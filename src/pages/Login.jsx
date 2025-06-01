import React from "react";
import "./Login.css";
import { Link } from "react-router";
export default function Login() {
  return (
    <>
      <div className="face">
        <div className="content">
          <h1>Đăng nhập</h1>
          <form onsubmit="event.preventDefault()">
            <div className="field-wrapper">
              <input
                className="wrap-username"
                type="text"
                name="username"
                placeholder="Căn cước công dân"
              />
            </div>
            <div className="field-wrapper">
              <input
                className="wrap-password"
                type="password"
                name="password"
                placeholder="Mật khẩu"
              />
            </div>
            <br></br>
            <div className="field-wrapper">
              <input
                className="wrap-submit"
                type="submit"
                value="Đăng nhập"
                onClick={() => alert("Cảm ơn bạn đã đăng nhập!")}
              />
            </div>
            <br></br>
            <span>
              <Link to={"/register"} className="link-no">
                Đăng ký ở đây!
              </Link>
            </span>
          </form>
          <Link to={"/"} className="link-no">
            Trang chủ
          </Link>
        </div>
      </div>
    </>
  );
}
