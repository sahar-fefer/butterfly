import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards, Navigation, Pagination } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";

import Play from "../../assets/icons/play-icon.svg";
import RightArrow from "../../assets/icons/right-arrow.svg";
import LeftArrow from "../../assets/icons/left-arrow.svg";

import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/navigation";
import "swiper/css/pagination";
import * as s from "./_cardsCarousel.module.scss";

import card1 from "../../assets/images/omers-house-in-the-media-marriage-from-first-sight.jpg";
import card2 from "../../assets/images/omers-house-in-the-media-marriage-from-first-sight.jpg";
import card3 from "../../assets/images/omers-house-in-the-media-marriage-from-first-sight.jpg";

interface CarouselCards {
  id: number;
  image: string;
  title: string;
  subtitle: string;
  description: string;
}

const cards: CarouselCards[] = [
  {
    id: 1,
    image: card1,
    title: "אנחנו במדיה",
    subtitle: "הצמידים של עומר",
    description:
      "לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית קטיב וג׳יבון. תצטנפל בלינדר לפרומר, צונפ וצמיגז - לפוקיכס ברשג׳ - ולתיכס גדרש.",
  },
  {
    id: 2,
    image: card2,
    title: "חדשנות וקריאטיב",
    subtitle: "הצוות שלנו",
    description:
      "עם צוות מקצועי ומנוסה, אנחנו יוצרים פתרונות חדשניים ומקוריים. כל פרויקט הוא הזדמנות לחדש ולהוביל את השוק קדימה.",
  },
  {
    id: 3,
    image: card3,
    title: "מובילים את הדרך",
    subtitle: "הסיפור שלנו",
    description:
      "מתחילה קטנה להצלחה גדולה. הדרך שלנו מוכיחה שעם חזון ברור ועבודה קשה, הכל אפשרי.",
  },
];

const CardsCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSlideChange = (swiper: SwiperType) => {
    setActiveIndex(swiper.activeIndex);
  };

  const currentCard = cards[activeIndex];

  return (
    <div className={s.carouselContainer}>
      {/* <div className="carousel-wrapper">
        <div className="carousel-grid"> */}

      {/* Swiper Cards */}
      <div className={s.swiperContainer}>
        <div className={s.swiperWrapperInner}>
          <Swiper
            effect={"cards"}
            grabCursor={true}
            // loop={true}
            modules={[EffectCards, Navigation, Pagination]}
            className={s.cardSwiper}
            navigation={{
              prevEl: ".swiper-button-prev-custom",
              nextEl: ".swiper-button-next-custom",
            }}
            pagination={{
              el: `.${s.swiperPagination}`,
              clickable: true,
            }}
            cardsEffect={{
              slideShadows: false,
              perSlideOffset: 10,
              perSlideRotate: 3,
            }}
            onSlideChange={handleSlideChange}
          >
            {cards.map((card) => (
              <SwiperSlide key={card.id} className={s.polaroidCard}>
                <img
                  className={s.polaroidImage}
                  src={card.image}
                  alt={card.title}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* Content */}
      <div className={s.contentSection}>
        <p className={s.subtitle}>{currentCard.subtitle}</p>
        <h1 className={s.title}>{currentCard.title}</h1>
        <p className={s.description}>{currentCard.description}</p>
        <button className={s.playButton}>
          <img loading="lazy" src={Play} alt="play icon" />
        </button>
      </div>

      {/* Navigation Buttons */}
      <button className={`${s.navButton} ${s.prev} swiper-button-prev-custom`}>
        <img src={LeftArrow} alt="left arrow" />
      </button>
      <button className={`${s.navButton} ${s.next} swiper-button-next-custom`}>
        <img src={RightArrow} alt="right arrow" />
      </button>
      <div className={s.swiperPagination}></div>
    </div>
    //   </div>
    // </div>
  );
};

export default CardsCarousel;
