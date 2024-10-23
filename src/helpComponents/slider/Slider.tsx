import { FC } from 'react'
import Slider from 'react-slick';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import s from './Slider.module.scss';

interface SliderProps {
    direction?: 'right' | 'left';
    info: Array<string>,
    rtl?: boolean,
    className?: string
}

export const ReactSlider: FC<SliderProps> = ({ direction, info, rtl = false, className }) => {
  const settings1 = {
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    speed: 5000,
    autoplay: true,
    // draggable: true,
    autoplaySpeed: 0,
    cssEase: 'linear',
    arrows: false,
    adaptiveHeight: true,
    dotsClass: `slick-dots ${s.customDots}`,
    rtl: rtl,
    responsive: [
      {
        breakpoint: 1238,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
          arrows: true,
          speed: 500,
          autoplay: false
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          arrows: true,
          speed: 500,
          autoplay: false
        }
      }
    ]
  };

  return (
    <Slider {...settings1}>
        {info.map((item) => {
            return <div key={item}><img src={item} className={className} alt={item} /></div>
        })}
    </Slider>
  )
}
