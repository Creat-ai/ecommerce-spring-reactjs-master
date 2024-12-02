import React, { FC, ReactElement, useRef } from "react";
import { Carousel } from "antd";
import { Link } from "react-router-dom";

import { PRODUCT } from "../../../constants/routeConstants";
import "./CarouselImageSlider.css";

export const sliderItems = [
    {
        id: "85",
        name: "Photo 1",
        url: "https://f.nodacdn.net/577287"
    },
    {
        id: "46",
        name: "Photo 2",
        url: "https://f.nodacdn.net/577287"
    }
];

const CarouselImageSlider: FC = (): ReactElement => {
    const carouselRef = useRef<any>(null); // Создаем ссылку на компонент Carousel

    const next = () => {
        if (carouselRef.current) {
            carouselRef.current.next(); // Переход к следующему слайду
        }
    };

    const prev = () => {
        if (carouselRef.current) {
            carouselRef.current.prev(); // Переход к предыдущему слайду
        }
    };

    return (
        <div className="carousel-container">
            <Carousel ref={carouselRef} autoplay autoplaySpeed={5000} dotPosition="bottom" effect="fade" dots={false}>
                {sliderItems.map((item) => (
                    <div key={item.id} className="carousel-item-wrapper">
                        <Link to={`${PRODUCT}/${item.id}`} className="carousel-link">
                            <img src={item.url} alt={item.name} className="carousel-image" />
                        </Link>
                    </div>
                ))}
            </Carousel>
            {/* Кнопки навигации */}
            <div className="carousel-nav">
                <button className="carousel-button prev" onClick={prev}>◀</button>
                <button className="carousel-button next" onClick={next}>▶</button>
            </div>
        </div>
    );
};

export default CarouselImageSlider;
