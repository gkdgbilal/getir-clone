import React from 'react';

export default function Menu({ title, items }) {
  return (
    <section>
      <nav className="grid gap-y-4">
        <h6 className="text-lg text-primary-brand-color">{title}</h6>
        <nav>
          <ul className="grid gap-y-2">
            {items &&
              items.map((item, index) => (
                <li key={index} className="text-sm hover:text-brand-color">
                  {item.title}
                </li>
              ))}
          </ul>
        </nav>
      </nav>
    </section>
  );
}
