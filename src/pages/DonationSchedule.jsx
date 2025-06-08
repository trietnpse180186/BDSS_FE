import React, { useEffect, useState } from "react";
import "./DonationSchedule.css";
import bloodDonationSchedules from "../assets/donationSchedule";
import { getUsernameFromToken } from "../assets/getUserName";
import { Link } from "react-router";
import { Button, ButtonGroup, Dropdown } from "react-bootstrap";
import { useLocation } from "react-router";
import { logout } from "../assets/authLogout";
import Navbar from "../assets/navbar";

export default function DonationSchedule() {
  const [username, setUsername] = useState(null);
  const [searchName, setSearchName] = useState("");
  const [searchDate, setSearchDate] = useState("");
  const [filteredSchedules, setFilteredSchedules] = useState(
    bloodDonationSchedules
  );
  const location = useLocation();
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const date = params.get("date") || "";
    setSearchDate(date);
  }, [location.search]);

  useEffect(() => {
    const name = getUsernameFromToken();
    setUsername(name);
  }, []);
  useEffect(() => {
    let filtered = bloodDonationSchedules;

    if (searchName.trim()) {
      filtered = filtered.filter((s) =>
        s.center.toLowerCase().includes(searchName.trim().toLowerCase())
      );
    }
    if (searchDate) {
      filtered = filtered.filter((s) => s.date === searchDate);
    }
    setFilteredSchedules(filtered);
  }, [searchName, searchDate]);
  return (
    <>
      {/*Navbar*/}
      <Navbar />
      {/* Search */}
      <div
        style={{
          maxWidth: 900,
          margin: "32px auto 0 auto",
          display: "flex",
          gap: 16,
          alignItems: "center",
        }}
      >
        <input
          type="text"
          placeholder="Tìm theo tên trung tâm..."
          value={searchName}
          onChange={(e) => setSearchName(e.target.value)}
          style={{
            padding: "10px 14px",
            borderRadius: 8,
            border: "1px solid #ccc",
            flex: 1,
            minWidth: 0,
          }}
        />
        <input
          type="date"
          value={searchDate}
          onChange={(e) => setSearchDate(e.target.value)}
          style={{
            padding: "10px 14px",
            borderRadius: 8,
            border: "1px solid #ccc",
          }}
        />
        <Button
          variant="outline-danger"
          onClick={() => {
            setSearchName("");
            setSearchDate("");
          }}
        >
          Xóa lọc
        </Button>
      </div>
      {/*Donation Schedule*/}
      <div className="donation-schedule">
        {filteredSchedules.length === 0 ? (
          <div className="no-schedule">Không tìm thấy lịch phù hợp.</div>
        ) : (
          filteredSchedules.map((schedule, idx) => (
            <div className="schedule-container" key={idx}>
              <div className="schedule-detail">
                <ul>
                  <li>
                    <strong>{schedule.center}</strong>
                  </li>
                  <li>
                    <strong>Địa điểm:</strong> {schedule.location}{" "}
                  </li>
                  <li>
                    <strong>Thời gian:</strong> {schedule.date} - Từ{" "}
                    {schedule.startTime} đến {schedule.endTime}
                  </li>
                </ul>
              </div>
              <div className="schedule-total">
                <strong>Số lượng người đăng ký:</strong>
                <br />
                {schedule.donorCount}
              </div>
            </div>
          ))
        )}
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
