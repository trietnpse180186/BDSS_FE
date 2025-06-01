import React from "react";
import { Link } from "react-router";
import "./Register.css";
export default function Register() {
  return (
    <>
      <div className="register-page">
        <div className="form">
          <h1>Register</h1>
          <div className="field-wrapper">
            <input type="text" name="fullname" placeholder="Họ tên" />
          </div>
          <div className="field-wrapper">
            <input type="date" name="dob" placeholder="Ngày tháng năm sinh" />
          </div>
          <div className="field-wrapper-gender">
            <label>
              <input type="checkbox" name="gender" value="male" /> Nam
            </label>
            <label style={{ marginLeft: "10px" }}>
              <input type="checkbox" name="gender" value="female" /> Nữ
            </label>
          </div>
          <div className="field-wrapper">
            <input type="text" name="cccd" placeholder="Số căn cước công dân" />
          </div>
          <div className="field-wrapper">
            <input type="text" name="phone" placeholder="Số điện thoại" />
          </div>
          <div className="field-wrapper">
            <input type="text" name="address" placeholder="Địa chỉ" />
          </div>
          <div className="field-wrapper">
            <input type="text" name="job" placeholder="Nghề nghiệp" />
          </div>
          <br />
          <div className="field-wrapper">
            <input
              className="wrap-submit"
              type="submit"
              onClick={() => alert("Cảm ơn bạn đã đăng ký!")}
              value="Đăng ký"
            />
          </div>
          <br />
          <Link to={"/"}>Home</Link>
        </div>
      </div>
    </>
  );
}
