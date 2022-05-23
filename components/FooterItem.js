import React from "react";

function FooterItem({ links, title }) {
  return (
    <ul>
      <h1 className="mb-1 font-londrina">{title}</h1>
      {links.map((link) => (
        <li key={link.name} className="font-configmedium">
          <a
            href={link.link}
            target={"_blank"}
            rel="noreferrer"
            className="hover:text-primary-green duration-300 text-sm cursor-pointer leading-6"
          >
            {link.name}
          </a>
        </li>
      ))}
    </ul>
  );
}

export default FooterItem;
