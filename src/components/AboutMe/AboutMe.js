import React from "react";
import "./AboutMe.scss";

function AboutMe() {
  return (
    <section className="about-me" id="about">
      {/* <div className="about-me__content"> */}
        <div className="about-me__box">
            <div className="about-me__box-border">
                <div className="about-me__box-border-inside">
                    <div className="about__photo-wrapper">
                        <img src="/image/header.png" alt="photo" className="about__photo" />
                        <img src="/image/Bright_Vibrant_Lined_Squiggly.png" alt="Wave" className="decor decor--wave" />
                        <img src="/image/Bright_Vibrant_Lined_Stars.png" alt="Star" className="decor decor--star" />
                    </div>
                    <div className="about-me__text-content">
                        <h1 className="about-me__title">Обо мне!</h1>
                        <h2 className="about-me__title">Уже больше 30 лет…</h2>
                        <p className="about-me__text">… я встречаю малышей на пороге школы и помогаю им пройти первые шаги в большой мир знаний.
                            Каждый ребенок для меня — личность, к которой можно найти ключик. Даже если он «сложный», даже если родители 
                            в панике — мы обязательно справимся вместе!
                            Люблю свою работу, люблю детей и верю, что школа — это место радости, роста и дружбы.
                        </p>
                    </div>
                </div>
            </div>
            {/* <img src="/image/Simple_Lined_Yellow_Pen.png" alt="Pen" className="decor decor--pen" /> */}
        </div>
      {/* </div> */}
    </section>
  );
}

export default AboutMe;
