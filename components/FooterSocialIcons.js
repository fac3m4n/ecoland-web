import React from "react";
import FooterDiscord from "./assets/FooterDiscord";
import FooterFacebook from "./assets/FooterFacebook";
import FooterInsta from "./assets/FooterInsta";
import FooterTwitter from "./assets/FooterTwitter";
import AtomicHubIcon from "./assets/AtomicHubIcon";
import TelegramIcon from "./assets/TelegramIcon";

function FooterSocialIcons() {
  return (
    <div className="flex items-center justify-center">
      <span className="p-3 cursor-pointer inline-flex items-center">
        <a
          target={"_blank"}
          rel="noreferrer"
          href="https://discord.com/invite/tnPXrTKhZB"
        >
          <FooterDiscord className={"w-8 sm:w-6 md:w-6"} />
        </a>
      </span>
      <span className="p-3 cursor-pointer inline-flex items-center">
        <a target={"_blank"} rel="noreferrer" href="https://t.me/ecoland_news">
          <TelegramIcon className={"w-8 sm:w-6 md:w-6"} />
        </a>
      </span>
      <span className="p-3 cursor-pointer inline-flex items-center">
        <a
          target={"_blank"}
          rel="noreferrer"
          href="https://twitter.com/EcoLandWorld"
        >
          <FooterTwitter className={"w-8 sm:w-6 md:w-6"} />
        </a>
      </span>
      <span className="p-3 cursor-pointer inline-flex items-center">
        <a
          target={"_blank"}
          rel="noreferrer"
          href="https://www.instagram.com/ecolandworld/"
        >
          <FooterInsta className={"w-8 sm:w-6 md:w-6"} />
        </a>
      </span>
      <span className="p-2 cursor-pointer inline-flex items-center">
        <a
          target={"_blank"}
          rel="noreferrer"
          href="https://wax.atomichub.io/explorer/collection/ecolandworld"
        >
          <AtomicHubIcon className={"w-8 sm:w-6 md:w-6"} />
        </a>
      </span>
    </div>
  );
}

export default FooterSocialIcons;
