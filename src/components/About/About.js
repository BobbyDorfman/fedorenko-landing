import React from "react";
import "./About.scss";

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
                        <img src="/image/Simple_Lined_Yellow_Pen.png" alt="Pen" className="decor decor--pen" />
                    </div>
                    <div className="about__photo-wrapper">
                        <img src="/image/header.png" alt="photo" className="about__photo" />
                        <img src="/image/Bright_Vibrant_Lined_Squiggly.png" alt="Wave" className="decor decor--wave" />
                        <img src="/image/Bright_Vibrant_Lined_Stars.png" alt="Star" className="decor decor--star" />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;
