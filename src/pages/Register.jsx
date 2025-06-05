import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Register.css";

export default function Register() {
  const [formData, setFormData] = useState({
    fullname: "",
    dob: "",
    gender: "",
    cccd: "",
    phone: "",
    address: "",
    job: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Lưu vào sessionStorage
    sessionStorage.setItem("user", JSON.stringify(formData));

    // Hiện alert xác nhận
    alert("Cảm ơn bạn đã đăng ký!");

    // Có thể thêm gọi API tại đây nếu cần:
    // fetch("/api/register", { method: "POST", body: JSON.stringify(formData), headers: { ... } });
  };

  return (
    <div className="register-page">
      <form className="form" onSubmit={handleSubmit}>
        <h1>Đăng ký</h1>

        <div className="field-wrapper">
          <input
            type="text"
            name="fullname"
            placeholder="Họ tên"
            value={formData.fullname}
            onChange={handleChange}
            required
          />
        </div>

        <div className="field-wrapper">
          <input
            type="date"
            name="dob"
            placeholder="Ngày sinh"
            value={formData.dob}
            onChange={handleChange}
            required
          />
        </div>

        <div className="field-wrapper-gender">
          <label>
            <input
              type="radio"
              name="gender"
              value="Nam"
              checked={formData.gender === "Nam"}
              onChange={handleChange}
              required
            />{" "}
            Nam
          </label>
          <label style={{ marginLeft: "10px" }}>
            <input
              type="radio"
              name="gender"
              value="Nữ"
              checked={formData.gender === "Nữ"}
              onChange={handleChange}
            />{" "}
            Nữ
          </label>
        </div>

        <div className="field-wrapper">
          <input
            type="text"
            name="cccd"
            placeholder="Số CCCD"
            value={formData.cccd}
            onChange={handleChange}
            required
          />
        </div>

        <div className="field-wrapper">
          <input
            type="text"
            name="phone"
            placeholder="Số điện thoại"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>

        <div className="field-wrapper">
          <input
            type="text"
            name="address"
            placeholder="Địa chỉ"
            value={formData.address}
            onChange={handleChange}
            required
          />
        </div>

        <div className="field-wrapper">
          <input
            type="text"
            name="job"
            placeholder="Nghề nghiệp"
            value={formData.job}
            onChange={handleChange}
            required
          />
        </div>

        <br />

        <div className="field-wrapper">
          <input
            className="wrap-submit"
            type="submit"
            value="Đăng ký"
          />
        </div>

        <br />
        <Link to="/">Trang chủ</Link>
      </form>
    </div>
  );
}
