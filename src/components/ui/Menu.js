import { useWindowWidth } from '@react-hook/window-size';
import React, { useState, useEffect } from 'react';
import { Collapse } from 'react-collapse';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';

export default function Menu({ title, items }) {
  const [isOpen, setIsOpen] = useState([]);
  const windowWidth = useWindowWidth();

  const toggleCollapse = () => {
    if (windowWidth <= 768) {
      setIsOpen(!isOpen);
    }
  };

  useEffect(() => {
    if (isOpen && windowWidth <= 768) {
      setIsOpen(false);
    }
    if (!isOpen && windowWidth > 768) {
      setIsOpen(true);
    }
  }, [windowWidth]);

  return (
    <section>
      <nav className="grid gap-y-2 md:gap-y-4">
        <h6
          onClick={toggleCollapse}
          className="text-lg text-primary-brand-color flex items-center justify-between"
        >
          {title}
          <button className="w-6 h-6 grid md:hidden place-items-center rounded-lg bg-primary-brand-color bg-opacity-10 text-primary-brand-color">
            <span
              style={{
                transform: isOpen ? 'rotate(-180deg)' : 'rotate(0deg)',
                transition: 'all .3s ease-in-out'
              }}
            >
              <IoIosArrowDown size={14} />
            </span>
          </button>
        </h6>
        <Collapse isOpened={isOpen}>
          <nav>
            <ul className="grid gap-y-1 md:gap-y-2">
              {items &&
                items.map((item, index) => (
                  <li key={index} className="text-sm hover:text-brand-color">
                    {item.title}
                  </li>
                ))}
            </ul>
          </nav>
        </Collapse>
      </nav>
    </section>
  );
}
