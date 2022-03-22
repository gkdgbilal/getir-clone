import React from 'react';

function Category({ category: { id, title, image } }) {
  return (
    <a
      href="/"
      className="flex group items-center gap-y-2 text-center rounded transition hover:bg-purple-50 flex-col p-4"
    >
      <img
        src={image}
        className="w-12 h-12 rounded border border-gray-200"
        alt={image}
      />
      <span className="font-semibold text-gray-700 transition-colors group-hover:text-brand-color whitespace-nowrap block mt-2 text-sm tracking-tight">
        {title}
      </span>
    </a>
  );
}

export default Category;
