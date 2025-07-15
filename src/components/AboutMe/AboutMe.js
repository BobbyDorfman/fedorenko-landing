import React from "react";
import "./AboutMe.scss";

// Импортируем изображения
import HeaderPhoto from "../../image/header.png";
import Wave from "../../image/Bright_Vibrant_Lined_Squiggly.png";
import Star from "../../image/Bright_Vibrant_Lined_Stars.png";
import Apple from "../../image/Simple_Lined_Apple.png";
import Shape from "../../image/Abstract_Shape_Illustration.png";

function AboutMe() {
  return (
    <section className="about-me" id="about">
        <div className="about-me__box">
            <div className="about-me__box-border">
                <div className="about-me__box-border-inside">
                    <div className="about-me__photo-wrapper">
                        <img src={HeaderPhoto} alt="photo" className="about-me__photo" />
                        <img src={Wave} alt="Wave" className="decor decor--wave" />
                        <img src={Star} alt="Star" className="decor decor--star" />
                        <img src={Apple} alt="Apple" className="decor decor--apple" />
                        <img src={Shape} alt="Shape" className="decor decor--shape" />
                    </div>
                    <div className="about-me__text-content">
                        <h1 className="about-me__title">Обо мне!</h1>
                        <h2 className="about-me__title-add">Уже больше 30 лет…</h2>
                        <p className="about-me__text">
                            … я встречаю малышей на пороге школы и помогаю им пройти первые шаги в большой мир знаний.
                        </p>
                        <p className="about-me__text">
                            Каждый ребенок для меня — личность, к которой можно найти ключик. Даже если он «сложный», даже если родители 
                            в панике — мы обязательно справимся вместе!
                        </p>
                        <p className="about-me__text">
                            Люблю свою работу, люблю детей и верю, что школа — это место радости, роста и дружбы.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
}

export default AboutMe;
