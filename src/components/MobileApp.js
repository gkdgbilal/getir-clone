import React from 'react';

function MobileApp() {
  return (
    <div className="bg-primary-brand-color flex items-center justify-between bg-mobile-app  mt-7 rounded-lg text-white">
      <div className="flex flex-col gap-y-3 p-10">
        <h3 className="text-2xl font-bold tracking-tight">Getir'i indirin!</h3>
        <p className="font-semibold">
          İstediğiniz ürünleri dakikalar içinde kapınıza getirelim.
        </p>
        {/* <div className="grid grid-cols-3 gap-2 flex justify-start mt-4 sm:mt-8 mb-4"> */}
        <nav className="mt-5 flex gap-x-2">
          <a href="/" className="transition-all transform hover:scale-105">
            <img
              src="https://getir.com/_next/static/images/appstore-tr-141ed939fceebdcee96af608fa293b31.svg"
              className="md-h-8 lg:h-auto"
              alt="App Store"
            />
          </a>
          <a href="/" className="transition-all transform hover:scale-105">
            <img
              src="https://getir.com/_next/static/images/googleplay-tr-6b0c941b7d1a65d781fb4b644498be75.svg"
              className="md-h-8 lg:h-auto"
              alt="Google Play"
            />
          </a>
          <a href="/" className="transition-all transform hover:scale-105">
            <img
              src="https://getir.com/_next/static/images/huawei-appgallery-tr-4b890fa3167bc62f9069edaf45aa7f30.svg"
              className="md-h-8 lg:h-auto"
              alt="Huawei App Gallery"
            />
          </a>
        </nav>
      </div>
      <picture className="pt-8">
        <img
          src="https://getir.com/_next/static/images/phoneLanding-88c033545710c4808054072689e187d7.png"
          alt="Getir Phone"
        />
      </picture>
    </div>
  );
}

export default MobileApp;
