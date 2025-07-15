import React from "react";
import "./Success.scss";

// Импортируем изображения
import Apple from "../../image/Simple_Lined_Apple.png";
import Shape from "../../image/Abstract_Shape_Illustration.png";

function Success() {
    return (
        <section className="success" id="success">
            <div className="success__box">
                <h2 className="success__title">Каждому ребенку - путь к успеху</h2>
                <div className="success__content">
                    <div className="success__card">
                        <div className="success__image-wrapper">
                            <img src="/image/Simple_Lined_Screen_Projector.png" alt="Projector" className="decor decor--projector" />
                        </div>
                        <h3>Индивидуальный подход</h3>
                        <p>Каждый ребёнок — уникальный. 
                            Я подбираю ключик к каждому: где-то нужна поддержка, 
                            где-то — чёткие границы, а где-то — немного волшебства.
                        </p>
                    </div>
                    <div className="success__card">
                        <div className="success__image-wrapper">
                            <img src="/image/Simple_Lined_Lab_Equipment.png" alt="Equipment" className="decor decor--equipment" />
                        </div>
                        <h3>Обучение через интерес</h3>
                        <p>Учёба должна быть увлекательной. 
                            Мы играем, двигаемся, обсуждаем, смеёмся — и при этом учимся думать, 
                            читать, считать и понимать мир.
                        </p>
                    </div>
                    <div className="success__card">
                        <div className="success__image-wrapper">
                            <img src="/image/Single_Mother_Holding_Hands.png" alt="Hands" className="decor decor--hands" />
                        </div>
                        <h3>Сотрудничество с родителями</h3>
                        <p>Верю в силу команды. 
                            Родители — мои союзники, особенно если ребёнку трудно. 
                            Вместе мы находим решение и поддерживаем его шаги к успеху
                        </p>
                    </div>
                </div>
                <img src={Apple} alt="Apple" className="decor decor--apple" />
                <img src={Shape} alt="Shape" className="decor decor--shape" />
            </div>
        </section>
    );
}

export default Success;
