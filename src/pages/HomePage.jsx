import React, { useEffect, useState } from "react";
import logo from "../images/logo.jpeg";
import banner2 from "../images/banner2.jpeg";
import image1 from "../images/image1.jpg";
import "./HomePage.css";
import { Link } from "react-router";
export default function HomePage() {
  const [username, setUsername] = useState(null);

  useEffect(() => {
    const loadUser = () => {
      try {
        const userData = localStorage.getItem("user");
        if (!userData || userData === "undefined") return;
        const user = JSON.parse(userData);
        setUsername(user?.fullName || "Người dùng");
      } catch (err) {
        console.error("Lỗi phân tích user:", err);
        localStorage.removeItem("user");
      }
    };
    loadUser();
  }, []);
  return (
    <>
      <div className="home-page">
        <div className="overlap">
          <div className="overlap-group">
            <div className="group-header">
              <img className="jimeng" alt="Jimeng" src={logo} />
              <div className="navbar">
                <div className="text-wrapper" id="home-wrapper">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                    className="house-fill"
                  >
                    <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L8 2.207l6.646 6.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293z" />
                    <path d="m8 3.293 6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293z" />
                  </svg>
                  <Link
                    style={{ textDecoration: "none", color: "#b5332b" }}
                    to="/"
                  >
                    Trang chủ
                  </Link>
                </div>

                <div className="text-wrapper">
                  {/* Globe Icon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                    className="globe"
                  >
                    <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m7.5-6.923c-.67.204-1.335.82-1.887 1.855q-.215.403-.395.872c.705.157 1.472.257 2.282.287zM4.249 3.539q.214-.577.481-1.078a7 7 0 0 1 .597-.933A7 7 0 0 0 3.051 3.05q.544.277 1.198.49zM3.509 7.5c.036-1.07.188-2.087.436-3.008a9 9 0 0 1-1.565-.667A6.96 6.96 0 0 0 1.018 7.5zm1.4-2.741a12.3 12.3 0 0 0-.4 2.741H7.5V5.091c-.91-.03-1.783-.145-2.591-.332M8.5 5.09V7.5h2.99a12.3 12.3 0 0 0-.399-2.741c-.808.187-1.681.301-2.591.332zM4.51 8.5c.035.987.176 1.914.399 2.741A13.6 13.6 0 0 1 7.5 10.91V8.5zm3.99 0v2.409c.91.03 1.783.145 2.591.332.223-.827.364-1.754.4-2.741zm-3.282 3.696q.18.469.395.872c.552 1.035 1.218 1.65 1.887 1.855V11.91c-.81.03-1.577.13-2.282.287zm.11 2.276a7 7 0 0 1-.598-.933 9 9 0 0 1-.481-1.079 8.4 8.4 0 0 0-1.198.49 7 7 0 0 0 2.276 1.522zm-1.383-2.964A13.4 13.4 0 0 1 3.508 8.5h-2.49a6.96 6.96 0 0 0 1.362 3.675c.47-.258.995-.482 1.565-.667m6.728 2.964a7 7 0 0 0 2.275-1.521 8.4 8.4 0 0 0-1.197-.49 9 9 0 0 1-.481 1.078 7 7 0 0 1-.597.933M8.5 11.909v3.014c.67-.204 1.335-.82 1.887-1.855q.216-.403.395-.872A12.6 12.6 0 0 0 8.5 11.91zm3.555-.401c.57.185 1.095.409 1.565.667A6.96 6.96 0 0 0 14.982 8.5h-2.49a13.4 13.4 0 0 1-.437 3.008M14.982 7.5a6.96 6.96 0 0 0-1.362-3.675c-.47.258-.995.482-1.565.667.248.92.4 1.938.437 3.008zM11.27 2.461q.266.502.482 1.078a8.4 8.4 0 0 0 1.196-.49 7 7 0 0 0-2.275-1.52c.218.283.418.597.597.932m-.488 1.343a8 8 0 0 0-.395-.872C9.835 1.897 9.17 1.282 8.5 1.077V4.09c.81-.03 1.577-.13 2.282-.287z" />
                  </svg>
                  <Link
                    style={{ textDecoration: "none", color: "#828282" }}
                    to="/blog"
                  >
                    Tin tức
                  </Link>
                </div>

                <div className="text-wrapper">
                  {/* Chat Square Text Icon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                    className="chat-square-text"
                  >
                    <path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1h-2.5a2 2 0 0 0-1.6.8L8 14.333 6.1 11.8a2 2 0 0 0-1.6-.8H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2.5a1 1 0 0 1 .8.4l1.9 2.533a1 1 0 0 0 1.6 0l1.9-2.533a1 1 0 0 1 .8-.4H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z" />
                    <path d="M3 3.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5M3 6a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9A.5.5 0 0 1 3 6m0 2.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5" />
                  </svg>
                  <Link
                    style={{ textDecoration: "none", color: "#828282" }}
                    to="/FAQ"
                  >
                    Hỏi đáp
                  </Link>
                </div>
                <div className="text-wrapper">
                  {/* Telephone Fill Icon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                    className="telephone-fill"
                  >
                    <path
                      fillRule="evenodd"
                      d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"
                    />
                  </svg>
                  <Link
                    style={{ textDecoration: "none", color: "#828282" }}
                    to="/contact"
                  >
                    Liên hệ
                  </Link>
                </div>
                <div className="text-wrapper">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                    className="person-circle"
                  >
                    <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                    <path
                      fillRule="evenodd"
                      d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"
                    />
                  </svg>
                  {username ? (
                    <h2>{username}</h2>
                  ) : (
                    <Link
                      style={{ textDecoration: "none", color: "#828282" }}
                      to="/login"
                    >
                      Đăng nhập
                    </Link>
                  )}
                </div>
              </div>
            </div>
            <div className="text-wrapper2">
              <h2>Hiến máu nhân đạo</h2>
              <div className="wrapper-content">
                <p className="p">
                  Hiến máu là một nghĩa cử cao đẹp, thể hiện tinh thần nhân ái
                  và trách nhiệm với cộng đồng, góp phần cứu sống hàng triệu
                  người mỗi năm.
                </p>
              </div>
              <div className="wrapper-button">
                <Link
                  style={{ textDecoration: "none", color: "white" }}
                  to="/blood-registration"
                >
                  Đăng ký hiến máu
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="overlap-group2">
          <div className="rectangle">
            <h3>Lợi ích của việc hiến máu</h3>

            <ul className="text-wrapper3">
              <li>Cứu sống người bệnh trong ca cấp cứu, phẫu thuật.</li>
              <li>Kiểm tra sức khỏe miễn phí và định kỳ.</li>
              <li>Tái tạo máu mới, tuần hoàn tốt hơn.</li>
              <li>Mang lại niềm vui và ý nghĩa nhân đạo.</li>
            </ul>

            <Link
              to={"/FAQ"}
              style={{ textDecoration: "none", color: "white" }}
              className="wrapper-button2"
            >
              Xem thêm
            </Link>
          </div>
          <img
            data-aos="fade-right"
            data-aos-duration="710"
            data-aos-delay="200"
            data-aos-easing="ease-in-out"
            className="img"
            alt="Ellipse"
            src={image1}
          />
        </div>

        <div className="overlap-group3">
          <div className="group3-row1">
            <div
              data-aos="fade-in"
              data-aos-duration="720"
              data-aos-delay="200"
              data-aos-easing="ease-in-out"
              className="overlap-group3-content"
            >
              <p className="text-wrapper-10">
                Kết quả test nhanh âm tính với kháng nguyên bề mặt của siêu vi B
              </p>

              {/* Clipboard Heart Fill Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
                className="icon-instance-node"
              >
                <path
                  fillRule="evenodd"
                  d="M6.5 0A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0zm3 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5z"
                />
                <path
                  fillRule="evenodd"
                  d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1A2.5 2.5 0 0 1 9.5 5h-3A2.5 2.5 0 0 1 4 2.5zm4 5.982c1.664-1.673 5.825 1.254 0 5.018-5.825-3.764-1.664-6.69 0-5.018"
                />
              </svg>
            </div>
            <div
              data-aos="fade-in"
              data-aos-duration="730"
              data-aos-delay="200"
              data-aos-easing="ease-in-out"
              className="overlap-group3-content"
            >
              <p className="text-wrapper-11">
                Không nghiện ma túy, rượu bia và các chất kích thích
              </p>

              {/* Capsule Pill Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
                className="capsule-pill-instance"
              >
                <path d="M11.02 5.364a3 3 0 0 0-4.242-4.243L1.121 6.778a3 3 0 1 0 4.243 4.243l5.657-5.657Zm-6.413-.657 2.878-2.879a2 2 0 1 1 2.829 2.829L7.435 7.536zM12 8a4 4 0 1 1 0 8 4 4 0 0 1 0-8m-.5 1.042a3 3 0 0 0 0 5.917zm1 5.917a3 3 0 0 0 0-5.917z" />
              </svg>
            </div>

            <div
              data-aos="fade-in"
              data-aos-duration="740"
              data-aos-delay="200"
              data-aos-easing="ease-in-out"
              className="overlap-group3-content"
            >
              <p className="text-wrapper-12">
                Người khỏe mạnh trong độ tuổi từ đủ 18 đến 60 tuổi
              </p>

              {/* People Fill Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
                className="icon-instance-node"
              >
                <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-5.784 6A2.24 2.24 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.3 6.3 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1zM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5" />
              </svg>
            </div>
            <p
              data-aos="fade-in"
              data-aos-duration="750"
              data-aos-delay="200"
              data-aos-easing="ease-in-out"
              className="overlap-group3-title"
            >
              Tiêu chuẩn để được hiến máu
            </p>
          </div>
          <div className="group3-row2">
            <div
              data-aos="fade-in"
              data-aos-duration="760"
              data-aos-delay="200"
              data-aos-easing="ease-in-out"
              className="overlap-group3-content"
            >
              <p className="text-wrapper-10">
                Cân nặng: Nam ≥ 45 kg Nữ ≥ 45 kg
              </p>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
                className="icon-instance-node"
              >
                <path d="M9.5 1.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0M6 5.5l-4.535-.442A.531.531 0 0 1 1.531 4H14.47a.531.531 0 0 1 .066 1.058L10 5.5V9l.452 6.42a.535.535 0 0 1-1.053.174L8.243 9.97c-.064-.252-.422-.252-.486 0l-1.156 5.624a.535.535 0 0 1-1.053-.174L6 9z" />
              </svg>
            </div>

            <div
              data-aos="fade-in"
              data-aos-duration="770"
              data-aos-delay="200"
              data-aos-easing="ease-in-out"
              className="overlap-group3-content"
            >
              <p className="text-wrapper-11">
                Không mắc các bệnh truyền nhiễm qua đường máu
              </p>
              {/* Virus Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
                className="virus-instance"
              >
                <path d="M8 0a1 1 0 0 1 1 1v1.402c0 .511.677.693.933.25l.7-1.214a1 1 0 0 1 1.733 1l-.701 1.214c-.256.443.24.939.683.683l1.214-.701a1 1 0 0 1 1 1.732l-1.214.701c-.443.256-.262.933.25.933H15a1 1 0 1 1 0 2h-1.402c-.512 0-.693.677-.25.933l1.214.701a1 1 0 1 1-1 1.732l-1.214-.7c-.443-.257-.939.24-.683.682l.701 1.214a1 1 0 1 1-1.732 1l-.701-1.214c-.256-.443-.933-.262-.933.25V15a1 1 0 1 1-2 0v-1.402c0-.512-.677-.693-.933-.25l-.701 1.214a1 1 0 0 1-1.732-1l.7-1.214c.257-.443-.24-.939-.682-.683l-1.214.701a1 1 0 1 1-1-1.732l1.214-.701c.443-.256.261-.933-.25-.933H1a1 1 0 1 1 0-2h1.402c.511 0 .693-.677.25-.933l-1.214-.701a1 1 0 1 1 1-1.732l1.214.701c.443.256.939-.24.683-.683l-.701-1.214a1 1 0 0 1 1.732-1l.701 1.214c.256.443.933.261.933-.25V1a1 1 0 0 1 1-1m2 5a1 1 0 1 0-2 0 1 1 0 0 0 2 0M6 7a1 1 0 1 0-2 0 1 1 0 0 0 2 0m1 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2m5-3a1 1 0 1 0-2 0 1 1 0 0 0 2 0" />
              </svg>
            </div>

            <div
              data-aos="fade-in"
              data-aos-duration="780"
              data-aos-delay="200"
              data-aos-easing="ease-in-out"
              className="overlap-group3-content"
            >
              <p className="text-wrapper-11">
                Không mắc các bệnh lý mãn tính hoặc cấp tính về tim mạch huyết
                áp, gan, hô hấp,...
              </p>
              {/* Heart Pulse Fill Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
                className="heart-pulse-fill"
              >
                <path d="M1.475 9C2.702 10.84 4.779 12.871 8 15c3.221-2.129 5.298-4.16 6.525-6H12a.5.5 0 0 1-.464-.314l-1.457-3.642-1.598 5.593a.5.5 0 0 1-.945.049L5.889 6.568l-1.473 2.21A.5.5 0 0 1 4 9z" />
                <path d="M.88 8C-2.427 1.68 4.41-2 7.823 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C11.59-2 18.426 1.68 15.12 8h-2.783l-1.874-4.686a.5.5 0 0 0-.945.049L7.921 8.956 6.464 5.314a.5.5 0 0 0-.88-.091L3.732 8z" />
              </svg>
            </div>

            <div
              data-aos="fade-in"
              data-aos-duration="800"
              data-aos-delay="200"
              data-aos-easing="ease-in-out"
              className="overlap-group3-content"
            >
              <p className="text-wrapper-13">
                Thời gian tối thiểu giữa 2 lần hiến máu là 12 tuần đối với cả
                Nam và Nữ
              </p>
              {/* Calendar 3 Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
                className="calendar"
              >
                <path d="M14 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2M1 3.857C1 3.384 1.448 3 2 3h12c.552 0 1 .384 1 .857v10.286c0 .473-.448.857-1 .857H2c-.552 0-1-.384-1-.857z" />
                <path d="M6.5 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2" />
              </svg>
            </div>
          </div>
        </div>
        <div className="overlap-group4">
          <div className="overlap-group4-content">
            <h2 style={{ color: "rgb(35, 108, 218)" }}>Trước khi hiến máu</h2>
            <ul>
              <li>
                Đêm trước khi hiến máu không nên thức quá khuya (ngủ ít nhất 6
                tiếng).
              </li>
              <li>Nên ăn nhẹ, không ăn các đồ ăn có nhiều đạm, nhiều mỡ.</li>
              <li>Không uống rượu, bia.</li>
              <li>Chuẩn bị tâm lý thực sự thoải mái.</li>
              <li>Mang theo giấy tờ tùy thân.</li>
              <li>Uống nhiều nước.</li>
            </ul>
          </div>
          <div className="overlap-group4-content">
            <h2 style={{ color: "rgb(218, 35, 35)" }}>Sau khi hiến máu</h2>
            <ul>
              <li>Duỗi thẳng, hơi nâng cao cánh tay trong 15 phút.</li>
              <li>Hạn chế gập tay trong quá trình nghỉ sau hiến máu.</li>
              <li>Nghỉ tại điểm hiến máu tối thiểu 15 phút.</li>
              <li>Uống nhiều nước.</li>
              <li>Chỉ ra về khi cảm thấy thực sự thoải mái.</li>
              <li>
                Nếu vết băng cầm máu chảy máu, hãy nâng tay lên, ấn nhẹ vào vết
                bông, ngồi xuống và báo nhân viên y tế hỗ trợ.
              </li>
            </ul>
          </div>
        </div>
        {/*Footer*/}
        <div className="footer">
          <div className="footer-content">
            <div className="footer-contact">
              <h1>Liên hệ</h1>
              <div className="contact-info">
                <div className="info-address">
                  <h3>Trung tâm hiến máu nhân đạo</h3>
                  <p>
                    466 Nguyễn Thị Minh Khai, Phường 2, Quận 3, Thành phố Hồ Chí
                    Minh
                  </p>
                  <p>
                    106 Thiên Phước, Phường 9, Tân Bình, Thành phố Hồ Chí Minh
                  </p>
                </div>
                <div className="info-phone">
                  <p>028 3868 5509</p>
                  <p>028 3868 5507</p>
                </div>
              </div>
              <div className="contact-info">
                <div className="info-address">
                  <h3>Bệnh viện BTH</h3>
                  <p>
                    118 Đ. Hồng Bàng, Phường 12, Quận 5, Thành phố Hồ Chí Minh
                  </p>
                  <p>
                    24 Nguyễn Thị Diệu, Phường Võ Thị Sáu, Quận 3, Thành phố Hồ
                    Chí Minh
                  </p>
                </div>
                <div className="info-phone">
                  <p>028 39571342</p>
                  <p>028 39557858</p>
                </div>
              </div>
              <div className="contact-info">
                <div className="info-address">
                  <h3>Trung tâm truyền máu Chợ Rẫy</h3>
                  <p>
                    56 Phạm Hữu Chí, Phường 12, Quận 5, Thành phố Hồ Chí Minh
                  </p>
                </div>
                <div className="info-phone">
                  <p>028 39555885</p>
                </div>
              </div>
            </div>
            <div className="footer-copywrite">
              <h1></h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
