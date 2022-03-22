import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import Banners from 'api/banners';
import Title from './ui/Title';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

function NextBtn({ className, onClick }) {
  return (
    <button
      className="text-brand-color absolute top-1/2 -right-6 -translate-y-1/2"
      onClick={onClick}
      style={{
        zIndex: 10,
        position: 'absolute',
        top: '50%',
        right: '-1.5rem',
        transform: 'translateY(-50%)'
      }}
    >
      <IoIosArrowForward size={22} />
    </button>
  );
}
function PrevBtn({ className, onClick }) {
  return (
    <button
      className="text-brand-color absolute top-1/2 -left-6 -translate-y-1/2"
      style={{
        zIndex: 10,
        position: 'absolute',
        top: '50%',
        left: '-1.5rem',
        transform: 'translateY(-50%)'
      }}
      onClick={onClick}
    >
      <IoIosArrowBack size={22} />
    </button>
  );
}

function Campaigns() {
  const [banners, setBanners] = useState([]);

  useEffect(() => {
    setBanners(Banners);
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    cssEase: 'linear',
    nextArrow: <NextBtn />,
    prevArrow: <PrevBtn />,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
          arrows: true
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          arrows: false
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false
        }
      }
    ]
  };

  return (
    <div className="container mx-auto py-8">
      <Title>Kampanyalar</Title>
      <Slider className="-mx-2" {...settings}>
        {banners.length &&
          banners.map((banner, index) => (
            <div key={index}>
              <picture className="block md:px-2">
                <img
                  src={banner.image}
                  alt={banner.image}
                  className="md:rounded-lg"
                />
              </picture>
            </div>
          ))}
      </Slider>
    </div>
  );
}

export default Campaigns;
