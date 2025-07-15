import React, { useState } from "react";
import Popup from "../Popup/Popup";
import "./Experience.scss";
import Masonry from 'react-masonry-css';

// Импортируем изображения
import Folder from "../../../public/image/Simple_Bold_Lined_Folder.png";
import Notebook from "../../../public/image/Simple_Lined_Pen_with_Notebook.png";
import Star from "../../../public/image/Bright_Vibrant_Lined_Stars.png";
import Backpack from "../../../public/image/Simple_Lined_Backpack.png";
import Shape_Blue from "../../../public/image/Abstract_Shape_Illustration_Blue.png";
import Squiggly_Yellow from "../../../public/image/Bright_Vibrant_Lined_Squiggly_Yellow.png";

function Experience() {
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const breakpointColumnsObj = {
        default: 3,
        1100: 2,
        700: 1
    };

    return (
        <section className="experience" id="experience">
            <div className="experience__box">
                <h2 className="experience__title">Опыт, которым я горжусь</h2>
                <Masonry
                    breakpointCols={breakpointColumnsObj}
                    className="experience__grid"
                    columnClassName="experience__column"
                >
                    <div className="experience__card">
                        <h3>Первые шаги</h3>
                        <p>После вуза — первая школа, первый класс и волнение. Училась вместе с детьми, каждый день открывая что-то новое.</p>
                    </div>
                    <div className="experience__card">
                        <h3>Контакт с любым ребенком</h3>
                        <p>Даже «трудные» дети — это просто дети. Главное — понять и поддержать. Родители часто удивляются, как быстро налаживаем контакт.</p>
                    </div>
                    <div className="experience__card">
                        <h3>Организация - моя стихия</h3>
                        <p>Планы, расписания, мероприятия — как мозаика, которую я обожаю собирать. Коллеги знают: если надо всё организовать — я на месте.</p>
                    </div>
                    <div className="experience__card">
                        <h3>Учусь и делюсь</h3>
                        <p>Сама прохожу курсы, читаю, ищу новое. И с радостью делюсь опытом с молодыми учителями.</p>
                    </div>
                    <div className="experience__card">
                        <h3>С любовью - до сих пор</h3>
                        <p>Каждое 1 сентября волнуюсь, как в первый раз. Люблю свою работу и детей — именно это даёт силы каждый день.</p>
                    </div>
                    <div className="experience__card experience__card--popup" onClick={() => setIsPopupOpen(true)}>
                        <h3>Мои сертификаты тут →</h3>
                        <img src={Folder} alt="Folder" className="experience__folder-icon"/>
                    </div>
                </Masonry>
            </div>
            <img src={Notebook} alt="Notebook" className="decor decor--notebook" />
            <img src={Star} alt="Star" className="decor decor--star" />
            <img src={Star} alt="Star" className="decor decor--star2" />
            <img src={Backpack} alt="Backpack" className="decor decor--backpack" />
            <img src={Shape_Blue} alt="Shape_Blue" className="decor decor--shape_blue" />
            <img src={Squiggly_Yellow} alt="Squiggly_Yellow" className="decor decor--squiggly_yellow" />

            <Popup isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} title="Сертификаты и грамоты">
                <ul>
                    <li><a href="/certificates/cert1.pdf" target="_blank">Сертификат 1</a></li>
                    <li><a href="/certificates/cert2.pdf" target="_blank">Сертификат 2</a></li>
                    {/* Добавь свои файлы */}
                </ul>
            </Popup>
        </section>
    );
}

export default Experience;
