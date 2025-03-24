import React, { useEffect, useState } from "react";
import "./BackgroundSlideshow.css";
import img1 from "../../assets/image/relativas/fundo_estudantes_1.webp";
import img2 from "../../assets/image/relativas/fundo_estudantes_2.webp";
import img3 from "../../assets/image/relativas/fundo_estudantes_3.webp";
import img4 from "../../assets/image/relativas/fundo_estudantes_4.webp";
import img5 from "../../assets/image/relativas/fundo_estudantes_5.webp";
import img6 from "../../assets/image/relativas/fundo_estudantes_6.webp";
import img7 from "../../assets/image/relativas/fundo_estudantes_7.webp";

const images = [img1, img2, img3, img4, img5, img6, img7];

const BackgroundSlideshow = () => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 10000);

        return () => clearInterval(interval);
    }, []);

    return <div className="BackgroundSlideshow" style={{ backgroundImage: `url(${images[index]})` }} />;
};

export default BackgroundSlideshow;
