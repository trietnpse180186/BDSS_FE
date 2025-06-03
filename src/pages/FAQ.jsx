import React from "react";
import { Link } from "react-router";
import logo from "../images/logo.jpeg";
import "./FAQ.css";
export default function FAQ() {
  const ListFAQ = [
    {
      question: "Ai có thể tham gia hiến máu?",
      answer: [
        "Từ 18-60 tuổi, tình nguyện và đủ sức khỏe.",
        "Cân nặng ≥ 45kg, không mắc bệnh truyền nhiễm.",
        "Cách lần hiến máu gần nhất ít nhất 12 tuần.",
        "Có giấy tờ tùy thân hợp lệ.",
      ],
    },
    {
      question: "Quy trình hiến máu diễn ra như thế nào?",
      answer: [
        "Đăng ký thông tin cá nhân và kiểm tra sức khỏe.",
        "Lấy mẫu máu để xét nghiệm nhóm máu và các bệnh truyền nhiễm.",
        "Tiến hành hiến máu dưới sự giám sát của nhân viên y tế.",
        "Nghỉ ngơi và nhận quà sau khi hiến máu.",
      ],
    },
    {
      question: "Sau khi hiến máu cần lưu ý gì?",
      answer: [
        "Uống đủ nước và ăn nhẹ để phục hồi sức khỏe.",
        "Tránh vận động mạnh trong 24 giờ đầu sau khi hiến máu.",
        "Theo dõi sức khỏe, nếu có triệu chứng bất thường thì liên hệ ngay với cơ sở y tế.",
      ],
    }
  ]
  return (
    <>
        <link
          href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400..700&family=Poppins&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Italianno&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter&display=swap"
          rel="stylesheet"
        />
        {/*Header------------------------------------------------*/}
        <div className="home-header">
          <div className="hd-container">
            <div className="hd-component">
              <div className="slogan">
                <em>Một giọt máu cho đi</em>
                <em> Một cuộc đời ở lại</em>
              </div>
              <div className="logo">
                <img src={logo} />
              </div>
              <div className="authorization">
                <ul style={{ listStyleType: "none" }}>
                  <li>
                    <Link className="link-no" to="/login">
                      Đăng nhập
                    </Link>
                  </li>
                  <li style={{ color: "#6366f1" }}> | </li>
                  <li>
                    <Link className="link-no" to="/register">
                      Đăng ký
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/*Navbar------------------------------------------------*/}
        <div className="nb-container">
          <div className="nb-component">
            <div className="item">
              <Link to={"/"}>Trang chủ</Link>
            </div>
            <div className="item">
              <a href="#">Đăng ký hiến máu</a>
            </div>
            <div className="item">
              <Link to={"/FAQ"}>Hỏi Đáp</Link>
            </div>
            <div className="item">
              <a href="#">Blog</a>
            </div>
            <div className="item">
              <a href="#">Liên hệ</a>
            </div>
          </div>
        </div>
        {/*Accordion------------------------------------------------*/}
        <div>
            <div className="faq-container">
              {ListFAQ.map((items, index) => (
                <details key={index} className="faq-item">
                  <summary className="faq-question">
                    {items.question}
                  </summary>
                  <ul className="faq-answer">
                    {items.answer.map((line, i) => (
                      <li key={i}>{line}</li>
                    ))}
                  </ul>
                </details>
              ))}
            </div>
          </div>

    </>
  );
}
