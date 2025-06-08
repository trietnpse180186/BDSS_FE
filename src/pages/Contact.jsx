import React from "react";
import "./Contact.css";
import contact1 from "../images/contact1.jpg";
import Navbar from "../assets/navbar";

export default function Contact() {
  return (
    <>
      {/*-------------------Navbar-----------------------*/}
      <Navbar />
      {/*-------------------Contact-----------------------*/}
      <div className="contact">
        <div className="contact-header-img" style={{ position: "relative" }}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <img
              src={contact1}
              alt="Contact"
              style={{
                width: "100%",
              }}
            />
          </div>
          <div
            className="contact-header-form"
            style={{
              position: "absolute",
              top: "8%",
              right: "8%",
              color: "white",
              padding: "30px",
              borderRadius: "8px",
              maxWidth: "500px",
              height: "480px",
            }}
          >
            <h1>Bạn cần hỗ trợ?</h1>
            <br />
            <p>
              Hãy để lại thông tin và thắc mắc của bạn, hoặc có thể liên hệ qua
              hotline phía bên dưới.
            </p>
            <br />
            <div className="form-text">
              <label>Họ và Tên</label>
              <br />
              <input
                className="form-input"
                type="text"
                style={{ width: "300px", height: "45px", margin: "10px 0px" }}
                placeholder="Vd: Nguyen Van A"
              />
            </div>
            <div className="form-text">
              <label>Email</label>
              <br />
              <input
                className="form-input"
                type="text"
                style={{ width: "300px", height: "45px", margin: "10px 0px" }}
                placeholder="Vd: gmd@gmail.vn"
              />
            </div>
            <div className="form-text">
              <label>Lời nhắn</label>
              <br />
              <input
                className="form-input"
                type="text"
                style={{ width: "300px", height: "45px", margin: "10px 0px" }}
              />
            </div>
            <div className="form-submit">
              <button className="button">Gửi lời nhắn</button>
            </div>
          </div>
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
                <p>56 Phạm Hữu Chí, Phường 12, Quận 5, Thành phố Hồ Chí Minh</p>
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
    </>
  );
}
