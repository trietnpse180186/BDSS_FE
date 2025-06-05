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
    },
    {
      question: "Nhóm máu A,B,O,AB có thể hiến cho nhóm máu nào?",
      answer: [
        "Người có nhóm máu O có thể cho máu cho tất cả các nhóm máu: O, A, B, AB. Đây là nhóm máu cho phổ quát.",
        "Người có nhóm máu A có thể cho máu cho người có nhóm A và AB",
        "Người có nhóm máu B có thể cho máu cho người có nhóm B và AB.",
        "Người có nhóm máu AB chỉ có thể cho máu cho người có nhóm AB. Tuy nhiên, AB là nhóm nhận phổ quát, có thể nhận máu từ tất cả các nhóm máu (O, A, B, AB).",
      ],
    },
    {
      question: "Máu của tôi sẽ được làm những xét nghiệm gì?",
      answer: [
        "Người đã nhiễm hoặc đã thực hiện hành vi có nguy cơ nhiễm HIV, viêm gan B, viêm gan C, và các vius lây qua đường truyền máu.",
        "Người có các bệnh mãn tính: tim mạch, huyết áp, hô hấp, dạ dày…",
      ],
    },
  ];
  return (
    <>
      {/*-------------------Navbar-----------------------*/}
      <div className="navbar">
        <div className="text-wrapper">
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
          <Link style={{ textDecoration: "none", color: "#828282" }} to="/">
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
          <Link style={{ textDecoration: "none", color: "#828282" }} to="/blog">
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
          <Link style={{ textDecoration: "none", color: "#B5332B" }} to="/FAQ">
            Hỏi đáp
          </Link>
        </div>
        <div className="text-wrapper" id="contact-wrapper">
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
          {/* Person Circle Icon */}
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
          <Link
            style={{ textDecoration: "none", color: "#828282" }}
            to="/login"
          >
            Đăng nhập
          </Link>
        </div>
      </div>
      {/*Accordion------------------------------------------------*/}
      <div>
        <h1 className="faq-title">Câu hỏi thường gặp</h1>
        <div className="faq-container">
          {ListFAQ.map((items, index) => (
            <details key={index} className="faq-item">
              <summary className="faq-question">{items.question}</summary>
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
