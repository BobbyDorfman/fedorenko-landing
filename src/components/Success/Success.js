import React from "react";
import "./Success.scss";
import CardSlider from "../CardSlider/CardSlider";
import useMediaQuery, { PHONE_QUERY } from "../../hooks/useMediaQuery";

// Импортируем изображения
import Projector from "../../image/Simple_Lined_Screen_Projector.png";
import Equipment from "../../image/Simple_Lined_Lab_Equipment.png";
import Hands from "../../image/Single_Mother_Holding_Hands.png";
import Apple from "../../image/Simple_Lined_Apple.png";
import Shape from "../../image/Abstract_Shape_Illustration.png";

const CARDS = [
    {
        title: "Индивидуальный подход",
        image: Projector,
        imageClass: "decor--projector",
        text: "Каждый ребёнок — уникальный. Я подбираю ключик к каждому: где-то нужна поддержка, где-то — чёткие границы, а где-то — немного волшебства.",
    },
    {
        title: "Обучение через интерес",
        image: Equipment,
        imageClass: "decor--equipment",
        text: "Учёба должна быть увлекательной. Мы играем, двигаемся, обсуждаем, смеёмся — и при этом учимся думать, читать, считать и понимать мир.",
    },
    {
        title: "Сотрудничество с родителями",
        image: Hands,
        imageClass: "decor--hands",
        text: "Верю в силу команды. Родители — мои союзники, особенно если ребёнку трудно. Вместе мы находим решение и поддерживаем его шаги к успеху",
    },
];

function Success() {
    const isPhone = useMediaQuery(PHONE_QUERY);

    const cards = CARDS.map((card) => (
        <div className="success__card" key={card.title}>
            <div className="success__image-wrapper">
                <img src={card.image} alt="" className={`decor ${card.imageClass}`} />
            </div>
            <h3>{card.title}</h3>
            <p>{card.text}</p>
        </div>
    ));

    return (
        <section className="success" id="success">
            <div className="success__box">
                <h2 className="success__title">Каждому ребенку - путь к успеху</h2>
                {isPhone ? (
                    // Телефон: карточки — слайдер
                    <CardSlider label="Каждому ребенку - путь к успеху">{cards}</CardSlider>
                ) : (
                    <div className="success__content">{cards}</div>
                )}
                <img src={Apple} alt="" className="decor decor--apple" />
                <img src={Shape} alt="" className="decor decor--shape" />
            </div>
        </section>
    );
}

export default Success;
