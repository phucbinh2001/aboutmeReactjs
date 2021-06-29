import React from "react";

function Navbar() {
  return (
    <>
      <div id="ctt" onclick="totop()">
        <i class="fas fa-angle-up"></i>
      </div>
      <div class="menu row2">
        <div class="center">
          <a href="https://phucbinh.me/">
            <img src="./assets/img/logo.svg" alt="" />
          </a>
          <ul id="smenu">
            <div id="close" onclick="hidemenu()">
              <i class="fa fa-times" aria-hidden="true"></i>
            </div>
            <li class="active">
              <a href="#">Trang chủ</a>
            </li>
            <li>
              <a href="#congviec">Công việc</a>
            </li>
            <li>
              <a href="#kinang">Kĩ năng</a>
            </li>
            <li>
              <a href="#sp">Sản phẩm</a>
            </li>
            <li>
              <a href="#lienhe">Liên hệ</a>
            </li>
          </ul>
          <div id="btn-menu" onclick="showmenu()">
            <i class="fa fa-bars" aria-hidden="true"></i>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
