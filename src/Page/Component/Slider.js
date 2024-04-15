import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function PromotionSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  return (
    <div className="slider-container mx-auto max-w-7xl px-4 pt-[170px]  pb-5 sm:px-6 lg:px-8 z-50">
      <Slider {...settings}>
        <div>
          <img
            className="mx-auto object-scale-down"
            src="https://api.pns.hk/medias/HB-GRAB92nGRAB88-20240410-E.png?context=bWFzdGVyfGltYWdlc3w1OTk3MHxpbWFnZS9wbmd8YUdSaUwyZzVOQzh4TURZME9UUXdNelV5TXpFd01pOUlRbDlIVWtGQ09USnVSMUpCUWpnNFh6SXdNalF3TkRFd1gwVXVjRzVufDJkN2ZlMmQxMTEyYjJkNjE3MGU0YzljYjE1NzNjNDYzOWQwYjA3MTk4YWMxZGUxN2Y3M2UyOTk2N2JiZThlMWY"
            alt="promotion1"
          />
        </div>
        <div>
          <img
            className="mx-auto"
            src="https://api.pns.hk/medias/HB-Food-Bag-20240418-E.png?context=bWFzdGVyfGltYWdlc3wxMDY3NjB8aW1hZ2UvcG5nfGFHUTVMMmhsTnk4eE1EWTBOekl6TmpFeE5qVXhNQzlJUWw5R2IyOWtYMEpoWjE4eU1ESTBNRFF4T0Y5RkxuQnVad3w4OTliY2JjNDg4Y2UwNmRjMjllYmQyYTJkYjk4YjgyODdjOTI2YTY0ZWRjODcyZmM4MDk2ODQwOGViOTkwYTI4"
            alt="promotion2"
          />
        </div>
        <div>
          <img
            className="mx-auto"
            src="https://api.pns.hk/medias/HB-Food-Kao-20240430-E.jpg?context=bWFzdGVyfGltYWdlc3wzNTU3ODd8aW1hZ2UvanBlZ3xhRFpsTDJnM01DOHhNRFl6T1RRNU5Ua3lNVFk1TkM5SVFsOUdiMjlrWDB0aGIxOHlNREkwTURRek1GOUZMbXB3Wnd8ZmI1NzZlZGUzOGM0NDA4NTViODY4YjM3NDllMjg2MzMwZDcyNmIxYjY5YzhkZTY1NzA0MjRlOTIxZTBkODBiNw"
            alt="promotion3"
          />
        </div>
      </Slider>
    </div>
  );
}
