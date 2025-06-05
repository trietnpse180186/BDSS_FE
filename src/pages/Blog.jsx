import React from "react";
import "./Blog.css";
import { Link } from "react-router";
import logo from "../images/logo.jpeg";

const posts = [
  {
    id: 1,
    title: "Ngày hội hiến máu nhân đạo tại Hà Nội",
    image: "https://source.unsplash.com/featured/?blood,donation",
    author: "Nguyễn Văn A",
    date: "05/06/2025",
    description: "Sự kiện thu hút hàng ngàn người tham gia với mục tiêu lan tỏa tinh thần tương thân tương ái.",
    link: "https://example.com/post1",
  },
  {
    id: 2,
    title: "Tăng cường nhận thức về hiến máu ở giới trẻ",
    image: "https://source.unsplash.com/featured/?young,blood",
    author: "Trần Thị B",
    date: "02/06/2025",
    description: "Chương trình truyền thông mới nhằm nâng cao nhận thức trong cộng đồng học sinh – sinh viên.",
    link: "https://example.com/post2",
  },
];

const BlogSection = () => {
  return (
    <>
      <div className="home-header">
        <div className="hd-container">
          <div className="hd-component">
            <div className="logo">
              <img src={logo} alt="logo" />
            </div>
            <div className="nav-links">
              <Link to="/">Trang chủ</Link>
              <Link to="/blog">Tin tức</Link>
              <Link to="/FAQ">Hỏi đáp</Link>
              <a href="#">Liên hệ</a>
              <Link to="/login">Đăng nhập</Link>
            </div>
          </div>
        </div>
      </div>

      <div className="blog-hero">
        <div className="overlay">
          <h1>Tin tức Hiến Máu</h1>
          <p>Cập nhật những thông tin, sự kiện và câu chuyện truyền cảm hứng về hiến máu</p>
          <a href="#" className="donate-btn">Đăng ký hiến máu</a>
        </div>
      </div>

      <div className="blog-section">
        <div className="posts">
          {posts.map((post) => (
            <div key={post.id} className="post-card">
              <img src={post.image} alt={post.title} />
              <div className="post-content">
                <h3>
                  <a
                    href={post.link}
                    className="post-title-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {post.title}
                  </a>
                </h3>
                <p className="meta">
                  {post.author} - {post.date}
                </p>
                <p>{post.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default BlogSection;
