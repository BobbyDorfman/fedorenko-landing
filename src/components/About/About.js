import React from "react";
import "./About.scss";

// Импортируем изображения
import Pen from "../../../public/image/Simple_Lined_Yellow_Pen.png";
import HeaderPhoto from "../../../public/image/header.png";
import Wave from "../../../public/image/Bright_Vibrant_Lined_Squiggly.png";
import Star from "../../../public/image/Bright_Vibrant_Lined_Stars.png";

function About() {
    return (
        <section className="about" id="about">
            <div className="about__content-wrapper">
                <div className="about__content">
                    <div className="about__box">
                        <div className="about__box-border">
                            <div className="about__box-border-inside">
                                <h1 className="about__title">Приветствую!</h1>
                                <h2 className="about__title">Я Светлана Федоренко</h2>
                                <p className="about__text">Учитель начальных классов</p>
                            </div>
                        </div>
                        <img src={Pen} alt="Pen" className="decor decor--pen" />
                    </div>
                    <div className="about__photo-wrapper">
                        <img src={HeaderPhoto} alt="photo" className="about__photo" />
                        <img src={Wave} alt="Wave" className="decor decor--wave" />
                        <img src={Star} alt="Star" className="decor decor--star" />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;
