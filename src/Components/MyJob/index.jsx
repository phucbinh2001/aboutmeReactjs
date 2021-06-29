import React from "react";
import iconDesign from "../../assets/img/edit-alt.svg";
import iconDB from "../../assets/img/database.svg";
import iconApp from "../../assets/img/apps.svg";

const MyJob = () => {
  return (
    <div class="page3 row" id="congviec">
      <div class="center">
        <h2>Công việc của tôi</h2>
        <div class="box">
          <img src={iconDesign} alt="" />
          <h3>UI Design</h3>
          <p>
            Giao diện của một trang web ảnh hưởng rất lớn đến quyết định của
            người dùng. Đó là lí do các trang web ngày càng chú trọng hơn đến
            phần giao diện.
          </p>
        </div>
        <div class="box">
          <img src={iconDB} alt="" />
          <h3>Web Development</h3>
          <p>
            Sứ mệnh của chúng tôi là tạo ra những trang web có giao diện thân
            thiện, hiệu năng vượt trội và trải nghiệm người dùng tuyệt vời.
          </p>
        </div>
        <div class="box">
          <img src={iconApp} alt="" />
          <h3>App Development</h3>
          <p>
            Chúng tôi cam kết tạo ra những ứng dụng có dung lượng nhẹ, hiệu năng
            ổn định, phục vụ thật tốt cho nhu cầu sử dụng của người dùng.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MyJob;
