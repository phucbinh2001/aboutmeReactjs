import React from "react";

function Contact() {
  return (
    <div class="row2 contact" id="lienhe">
      <h2>Liên hệ</h2>
      <div class="center">
        <div class="form">
          <input type="text" placeholder="Họ và tên" id="name" />
          <br />
          <input type="email" placeholder="Địa chỉ email" id="mail" />
          <br />
          <textarea placeholder="Để lại lời nhắn" id="mess"></textarea>
          <br />
          <input type="submit" value="Gửi lời nhắn" id="submit" />
        </div>
        <div class="map">
          {/* <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4659.746614382251!2d106.61944305055378!3d10.859877506244457!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752a18ece60f53%3A0x94688acad2eed2f9!2zOTggVMOibiBDaMOhbmggSGnhu4dwIDM1LCBUw6JuIENow6FuaCBIaeG7h3AsIFF14bqtbiAxMiwgSOG7kyBDaMOtIE1pbmgsIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1587568105444!5m2!1svi!2s"
            width="600"
            height="450"
            frameborder="0"
            style="border: 0"
            allowfullscreen=""
            aria-hidden="false"
            tabindex="0"
          ></iframe> */}
        </div>
      </div>
    </div>
  );
}

export default Contact;
