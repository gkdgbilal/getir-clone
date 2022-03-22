import React, { useState, useEffect } from 'react';
import Menus from 'api/menus';
import Menu from './ui/Menu';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import { FiGlobe } from 'react-icons/fi';

function Footer() {
  const [menus, setMenus] = useState([]);

  useEffect(() => {
    setMenus(Menus);
  }, []);

  return (
    <div className="bg-white mt-10">
      <div className="container mx-auto">
        <div className="grid grid-cols-4 pt-10">
          <section>
            <nav className="grid gap-y-4">
              <h6 className="text-lg text-primary-brand-color">
                Getir'i indirin!
              </h6>
              <a href="/">
                <img
                  src="https://getir.com/_next/static/images/appstore-tr-141ed939fceebdcee96af608fa293b31.svg"
                  alt=""
                />
              </a>
              <a href="/">
                <img
                  src="https://getir.com/_next/static/images/googleplay-tr-6b0c941b7d1a65d781fb4b644498be75.svg"
                  alt=""
                />
              </a>
              <a href="/">
                <img
                  src="https://getir.com/_next/static/images/huawei-appgallery-tr-4b890fa3167bc62f9069edaf45aa7f30.svg"
                  alt=""
                />
              </a>
            </nav>
          </section>
          {menus.length &&
            menus.map((menu, index) => <Menu key={index} {...menu} />)}
        </div>
        <div className="flex justify-between items-center border-t border-gray-100 mt-6 py-6">
          <div className="text-xs text-gray-700 flex gap-x-8">
            &copy; 2022 Getir
            <a
              href="/"
              className="text-primary-brand-color hover:underline relative before:w-[3px] before:h-[3px] before:bg-black before:absolute before:-left-4 before:top-1/2 before:-translate-y-1/2 before:rounded-full"
            >
              Bilgi Toplumu Hizmetleri
            </a>
          </div>
          <nav className="flex gap-x-4">
            <a
              href="/"
              className="transition-colors w-8 h-8 flex items-center justify-center rounded-lg text-gray-700 hover:bg-purple-50 hover:text-purple-700"
            >
              <FaFacebook size={20} />
            </a>
            <a
              href="/"
              className="transition-colors w-8 h-8 flex items-center justify-center rounded-lg text-gray-700 hover:bg-purple-50 hover:text-purple-700"
            >
              <FaTwitter size={20} />
            </a>
            <a
              href="/"
              className="transition-colors w-8 h-8 flex items-center justify-center rounded-lg text-gray-700 hover:bg-purple-50 hover:text-purple-700"
            >
              <FaInstagram size={20} />
            </a>
            <a
              href="/"
              className="transition-colors h-8 flex items-center gap-x-2 border border-gray-100 rounded-lg text-sm text-gray-700 px-3 hover:bg-purple-50 hover:text-purple-700"
            >
              <FiGlobe size={18} />
              Türkçe (TR)
            </a>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Footer;
