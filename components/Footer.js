import FooterItem from "./FooterItem";
import { About, Help } from "./FooterMenus";
import FooterSocialIcons from "./FooterSocialIcons";
import Button from "../components/Button";
import FooterBg1 from "./assets/FooterBg1";
import FooterBg2 from "./assets/FooterBg2";
import EcolandLogo from "./assets/EcolandLogo";
import { useRouter } from 'next/router';


function Footer() {
  const router = useRouter();
  return (
    <footer className="flex flex-col justify-end">
      <div className="hidden md:flex lg:flex absolute -z-20 right-0">
        <FooterBg1 />
      </div>
      <div className="hidden md:flex lg:flex absolute -z-20 botton-0">
        <FooterBg2 />
      </div>

      <div className="flex flex-col justify-between">
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6 sm:px-8 px-5 py-16">
          <div className="md:col-span-1 sm:col-span-1 lg:col-span-2 gap-4">
            <span className="font-londrina text-secondary-green">
              Ready to get started?
            </span>{" "}
            <br />
            <Button type="secondary" onClick={() => {
                    router.push("mailto:hello@ecoland.world");
                  }}>Contact Us</Button>
          </div>
          <FooterItem links={Help} title="Help" />
          <FooterItem links={About} title="About" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 md:gap-2 lg:grid-cols-3 gap-10 text-center pt-2 text-sm pb-8 font-configmedium items-center">
          <p>©2022 Ecoland. All rights reserved.</p>

          <p className="flex items-center justify-center">
            Made with{" "}
            <span className="flex p-2">
              <EcolandLogo width={24}></EcolandLogo>
            </span>{" "}
            by{" "}
            <span>
              <a
                target={"_blank"}
                rel="noreferrer"
                className="underline text-blue-500 px-1"
                href="https://sanly.studio"
              >
                {" "}
                Sanly Studio
              </a>
            </span>
          </p>

          <FooterSocialIcons />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
