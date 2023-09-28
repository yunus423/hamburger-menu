import React from "react";
import beefImage from "./assets/1beef.jpg";

const About = () => {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${beefImage})` }}
      ></div>
      <div className="aboutBottom">
        <h1>About us</h1>
    
        <p>
          Hamburger markaları Kaynakça Ayrıca bakınız Hamburger Madde Tartışma
          Oku Bekleyen değişiklikler Değiştir Kaynağı değiştir Geçmişi gör
          Araçlar Vikipedi, özgür ansiklopedi Hamburger Ülke(ler) Amerika
          Birleşik Devletleri Almanya Bölgesi Hamburg Servis şekli Sıcak Ana
          malzemeler Kıyma, Ekmek Hamburger Hamburger veya sadece Burger, iki
          dilim yuvarlak sandviç ekmeği arasına yerleştirilen bir köfte,
          Amerikan peyniri, marul yapılan sandviç türü.
        </p>
      </div>
    </div>
  );
};

export default About;
