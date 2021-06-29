import React from "react";

function Footer() {
  return (
    <div class="footer row2">
      <a href="https://phucbinh.me/">
        <img src="images/logo.svg" alt="" />
      </a>
      <ul>
        <li class="active">
          <a href="#">TRANG CHỦ</a>
        </li>
        <li>
          <a href="#congviec">CÔNG VIỆC</a>
        </li>
        <li>
          <a href="#kinang">KĨ NĂNG</a>
        </li>
        <li>
          <a href="#sp">SẢN PHẨM</a>
        </li>
        <li>
          <a href="#lienhe">LIÊN HỆ</a>
        </li>
      </ul>
      <ul class="social">
        <li>
          <a href="tel:0373782285">
            <i class="fas fa-phone-alt"></i>
          </a>
        </li>
        <li>
          <a href="mailto:phucbinh.2001@fmail.com">
            <i class="fa fa-envelope"></i>
          </a>
        </li>
        <li>
          <a href="https://www.facebook.com/Phucbinh.2001/">
            <i class="fab fa-facebook-f"></i>
          </a>
        </li>
        <li>
          <a href="#">
            <i class="fab fa-youtube"></i>
          </a>
        </li>
      </ul>
      <p>
        Copyright ©2020 All rights reserved | Made with
        <i class="fas fa-heart"></i> by <span>Phucbinh</span>
      </p>
    </div>
  );
}

export default Footer;
