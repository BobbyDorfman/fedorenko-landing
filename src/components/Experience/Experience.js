import React, { useState } from "react";
import Popup from "../Popup/Popup";
import Certificates from "../Certificates/Certificates";
import CardSlider from "../CardSlider/CardSlider";
import useMediaQuery, { PHONE_QUERY } from "../../hooks/useMediaQuery";
import "./Experience.scss";
import Masonry from 'react-masonry-css';

// Импортируем изображения
import Folder from "../../image/Simple_Bold_Lined_Folder.png";
import Notebook from "../../image/Simple_Lined_Pen_with_Notebook.png";
import Star from "../../image/Bright_Vibrant_Lined_Stars.png";
import Backpack from "../../image/Simple_Lined_Backpack.png";
import Shape_Blue from "../../image/Abstract_Shape_Illustration_Blue.png";
import Squiggly_Yellow from "../../image/Bright_Vibrant_Lined_Squiggly_Yellow.png";

const CARDS = [
    {
        title: "Первые шаги",
        text: "После вуза — первая школа, первый класс и волнение. Училась вместе с детьми, каждый день открывая что-то новое.",
    },
    {
        title: "Контакт с любым ребенком",
        text: "Даже «трудные» дети — это просто дети. Главное — понять и поддержать. Родители часто удивляются, как быстро налаживаем контакт.",
    },
    {
        title: "Организация - моя стихия",
        text: "Планы, расписания, мероприятия — как мозаика, которую я обожаю собирать. Коллеги знают: если надо всё организовать — я на месте.",
    },
    {
        title: "Учусь и делюсь",
        text: "Сама прохожу курсы, читаю, ищу новое. И с радостью делюсь опытом с молодыми учителями.",
    },
    {
        title: "С любовью - до сих пор",
        text: "Каждое 1 сентября волнуюсь, как в первый раз. Люблю свою работу и детей — именно это даёт силы каждый день.",
    },
];

function Experience() {
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const isPhone = useMediaQuery(PHONE_QUERY);
    const breakpointColumnsObj = {
        default: 3,
        1100: 2,
        700: 1
    };

    const cards = CARDS.map((card) => (
        <div className="experience__card" key={card.title}>
            <h3>{card.title}</h3>
            <p>{card.text}</p>
        </div>
    ));

    const certificatesCard = (
        <div
            key="certificates"
            className="experience__card experience__card--popup"
            role="button"
            tabIndex={0}
            onClick={() => setIsPopupOpen(true)}
            onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setIsPopupOpen(true);
                }
            }}
        >
            <h3>Мои сертификаты тут →</h3>
            <img src={Folder} alt="" className="experience__folder-icon"/>
        </div>
    );

    return (
        <section className="experience" id="experience">
            <div className="experience__box">
                <h2 className="experience__title">Опыт, которым я горжусь</h2>
                {isPhone ? (
                    // Телефон: карточки — слайдер, кнопка сертификатов — отдельно под ним
                    <>
                        <CardSlider label="Опыт, которым я горжусь">
                            {cards}
                        </CardSlider>
                        <div className="experience__certificates">{certificatesCard}</div>
                    </>
                ) : (
                    <Masonry
                        breakpointCols={breakpointColumnsObj}
                        className="experience__grid"
                        columnClassName="experience__column"
                    >
                        {cards}
                        {certificatesCard}
                    </Masonry>
                )}
            </div>
            <img src={Notebook} alt="" className="decor decor--notebook" />
            <img src={Star} alt="" className="decor decor--star" />
            <img src={Star} alt="" className="decor decor--star2" />
            <img src={Backpack} alt="" className="decor decor--backpack" />
            <img src={Shape_Blue} alt="" className="decor decor--shape_blue" />
            <img src={Squiggly_Yellow} alt="" className="decor decor--squiggly_yellow" />

            <Popup isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} title="Сертификаты и грамоты" wide>
                <Certificates />
            </Popup>
        </section>
    );
}

export default Experience;
