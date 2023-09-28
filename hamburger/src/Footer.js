import React from "react";

const Footer = () => {
  const insta =()=>{
window.location.href="https://www.instagram.com/"
  }
  const face =()=>{
    window.location.href="https://tr-tr.facebook.com/"
  }
  const th=()=>{
    window.location.href="https://www.threads.net/"
    
  }
  const google=()=>{
    window.location.href="https://nicelocal.biz.tr/duzce/restaurants/dogan_burger/"
    
  }
  const youtube=()=>{

    window.location.href='https://www.youtube.com/watch?v=9t2FxZ0jP5k&ab_channel=NefisYemekTarifleri'
  }
  return (
    <div className="footer">
      <div className="socialMedya">
        <p>&copy; 2023 burger47.com</p>
        <i
          onClick={insta}
          class="fa-brands fa-instagram"
        ></i>
        <i
          onClick={face}
          class="fa-brands fa-facebook"
        ></i>
        <i
          onClick={th}
          class="fa-brands fa-threads"
        ></i>

        <i onClick={google} class="fa-brands fa-google"></i>
        <i onClick={youtube} class="fa-brands fa-youtube"></i>
      </div>
    </div>
  );
};

export default Footer;
