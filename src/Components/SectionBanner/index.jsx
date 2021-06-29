import React from "react";
import avatar from "../../assets/img/avatar.jpg";

function SectionBanner() {
  return (
    <div class="row page1">
      <div class="center">
        <div class="boxleft">
          <span>Xin chào! Tôi là</span>
          <h1>Phúc Bình</h1>
          <h3 id="jobs">Front-end Developer</h3>
          <div class="info">
            <p>
              <i class="fa fa-envelope"></i> binhtlpps13531@fpt.edu.vn
            </p>
            <p>
              <i class="fas fa-phone-alt"></i> +84 3737 82285
            </p>
            <p>
              <i class="fa fa-map-marker"></i> 98 Tân Chánh Hiệp 35, Quận 12,
              TP.HCM
            </p>
          </div>
        </div>
        <div class="boxright">
          <img src={avatar} alt="" />
        </div>
      </div>
    </div>
  );
}

export default SectionBanner;
