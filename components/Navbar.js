import Link from "next/link";
import DiscordIcon from "./assets/DiscordIcon";
import EcolandLogo from "./assets/EcolandLogo";
import FacebookIcon from "./assets/FacebookIcon";
import InstaIcon from "./assets/InstaIcon";
import TwitterIcon from "./assets/TwitterIcon";
import Button from "./Button";
import PrevButton from "./assets/PrevButton";
import TelegramIcon from "./assets/TelegramIcon";
import { useEffect, useRef, useState } from "react";
import { ShareSocialOutline } from "react-ionicons";

const socialMediaLinks = [
  {
    name: "Discord",
    link: "https://discord.com/invite/tnPXrTKhZB",
    icon: DiscordIcon,
  },
  {
    name: "Telegram",
    link: "https://t.me/ecoland_news",
    icon: TelegramIcon,
  },
  {
    name: "Twitter",
    link: "https://twitter.com/EcoLandWorld",
    icon: TwitterIcon,
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/ecolandworld/",
    icon: InstaIcon,
  },
];

const menuItems = [
  {
    name: "Home",
    href: "#home",
  },
  {
    name: "Environmental Issues",
    href: "#env",
  },
  {
    name: "About Us",
    href: "#about",
  },
  {
    name: "NFTs",
    href: "#nfts",
  },
  {
    name: "Tokenomics",
    href: "#tokenomics",
  },
  {
    name: "Roadmap",
    href: "#roadmap",
  },
  {
    name: "Whitepaper",
    href: "https://ecolandworld.gitbook.io/ecoland.world-whitepaper/",
  },
];

function Navbar({ menuOpen, menuClick }) {
  const prevScrollY = useRef(0);
  const [goingUp, setGoingUp] = useState(true);
  const [isOnTop, setIsOnTop] = useState(true);
  const [showLinks, setShowLinks] = useState(false);

  const [shortenLinks, setShortenLinks] = useState(false);
  const size = useWindowSize();

  useEffect(() => {
    if (size.width >= 1024 && size.width < 1150) {
      setShortenLinks(true);
    } else {
      setShortenLinks(false);
    }
  }, [size]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (prevScrollY.current < currentScrollY && goingUp) {
        setGoingUp(false);
      }
      if (prevScrollY.current > currentScrollY + 1 && !goingUp) {
        setGoingUp(true);
      }

      if (currentScrollY < 10) {
        setIsOnTop(true);
        setGoingUp(true);
      }

      if (currentScrollY > 50) {
        setIsOnTop(false);
      } else {
        setIsOnTop(true);
      }

      prevScrollY.current = currentScrollY;
      console.log(goingUp, currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, [goingUp]);

  return (
    <header
      className={`fixed bg-white transition-all duration-300 ${
        !goingUp && !menuOpen ? "-translate-y-52" : "translate-y-0"
      } z-50 w-screen ${!isOnTop && !menuOpen ? "h-14" : "h-20"} shadow-md`}
    >
      <nav
        className={`flex items-center justify-between flex-wrap px-6 ${
          !isOnTop && !menuOpen ? "py-1" : "py-5"
        } z-10`}
      >
        <button onClick={menuClick} className="flex lg:hidden">
          <svg
            width="34"
            height="33"
            viewBox="0 0 34 33"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              opacity="0.4"
              d="M24.3464 0H8.87772C3.26685 0 0 2.87686 0 7.80632V24.5018C0 29.5121 3.26685 32.3243 8.87772 32.3243H24.3464C30.0477 32.3243 33.2222 29.5121 33.2222 24.5018V7.80632C33.2222 2.87686 30.0477 0 24.3464 0"
              fill="#A8E34B"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M9.64504 8.08105V8.09621C8.87024 8.09621 8.24285 8.62654 8.24285 9.27809C8.24285 9.92964 8.87024 10.46 9.64504 10.46H15.0183C15.7931 10.46 16.4223 9.92964 16.4223 9.26142C16.4223 8.61139 15.7931 8.08105 15.0183 8.08105H9.64504ZM23.7389 17.3088H9.64504C8.87024 17.3088 8.24285 16.7785 8.24285 16.127C8.24285 15.4754 8.87024 14.9436 9.64504 14.9436H23.7389C24.5119 14.9436 25.1411 15.4754 25.1411 16.127C25.1411 16.7785 24.5119 17.3088 23.7389 17.3088ZM23.7389 24.2335H9.64504C9.10574 24.2941 8.58441 24.0668 8.29678 23.688C8.00915 23.294 8.00915 22.794 8.29678 22.4152C8.58441 22.0212 9.10574 21.8091 9.64504 21.8546H23.7389C24.4562 21.9152 24.9973 22.4304 24.9973 23.0516C24.9973 23.6562 24.4562 24.1729 23.7389 24.2335Z"
              fill="#345901"
            />
          </svg>
        </button>
        <div
          className={`${
            menuOpen ? "flex" : "hidden"
          } transition transform duration-150 scale-100 flex-col justify-start left-0 top-5 absolute bg-opacity-95 bg-white p-2 rounded-lg z-50 space-y-2 md:space-y-4 px-6 pb-6 w-80 md:w-96`}
        >
          <button onClick={menuClick}>
            <PrevButton width={30} height={30}></PrevButton>
          </button>
          <div className="ml-2 flex flex-col space-y-2 md:space-y-4">
            {menuItems.map((item, index) => (
              <div key={index} className="flex items-center space-x-2">
                <div className="w-3 h-1 bg-primary-green rounded-full"></div>
                <button onClick={menuClick}>
                  {item.href.includes("#") ? (
                    <a
                      href={item.href}
                      className="text-2xl md:text-3xl font-bold font-londrina"
                    >
                      {item.name}
                    </a>
                  ) : (
                    <a
                      target={"_blank"}
                      rel="noreferrer"
                      href={item.href}
                      className="text-2xl md:text-3xl font-bold font-londrina"
                    >
                      {item.name}
                    </a>
                  )}
                </button>
              </div>
            ))}
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div className="lg:mr-2 flex">
            <Link href={"#"}>
              <EcolandLogo
                width={isOnTop ? 40 : 30}
                height={isOnTop ? 40 : 30}
              />
            </Link>
          </div>
          <div className="space-x-4 mx-2 text-base font-medium hidden md:hidden lg:flex">
            {menuItems.map((item) =>
              item.href.includes("#") ? (
                <Link href={item.href} key={item.name}>
                  <a className="hover:text-primary-green duration-300">
                    {item.name}
                  </a>
                </Link>
              ) : (
                <Link href={item.href} key={item.name}>
                  <a
                    target={"_blank"}
                    rel={"noreferrer"}
                    className="hover:text-primary-green duration-300"
                  >
                    {item.name}
                  </a>
                </Link>
              )
            )}
          </div>
        </div>
        <div></div>
        <div className="space-x-4 items-center hidden md:hidden lg:flex z-50">
          {/* Social Media Links */}
          <div
            className={`${
              shortenLinks ? "hidden" : "flex"
            }  items-center justify-center space-x-4`}
          >
            <Link href={"https://discord.com/invite/tnPXrTKhZB"}>
              <a target="_blank" rel="noreferrer">
                <DiscordIcon width={16}></DiscordIcon>
              </a>
            </Link>
            <Link href={"https://t.me/ecoland_news"}>
              <a target={"_blank"} rel="noreferrer">
                <TelegramIcon width={16}></TelegramIcon>
              </a>
            </Link>
            <Link href={"https://twitter.com/EcoLandWorld"}>
              <a target="_blank" rel="noreferrer">
                <TwitterIcon width={16}></TwitterIcon>
              </a>
            </Link>
            <Link href={"https://www.instagram.com/ecolandworld/"}>
              <a target={"_blank"} rel="noreferrer">
                <InstaIcon width={16}></InstaIcon>
              </a>
            </Link>
          </div>
          <div className="flex items-center">
            <Link
              href={"https://wax.atomichub.io/explorer/collection/ecolandworld"}
            >
              <a
                target={"_blank"}
                rel="noreferrer"
                className="bg-primary-green text-secondary-green rounded-full font-semibold p-2 px-4 "
              >
                Our NFT collection
              </a>
            </Link>
          </div>
          <button
            onClick={() => {
              setShowLinks(!showLinks);
            }}
          >
            <svg
              className={`${shortenLinks ? "relative" : "hidden"}`}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              width={24}
            >
              <circle
                cx="128"
                cy="256"
                r="48"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="32"
              ></circle>
              <circle
                cx="384"
                cy="112"
                r="48"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="32"
              ></circle>
              <circle
                cx="384"
                cy="400"
                r="48"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="32"
              ></circle>
              <path
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="32"
                d="M169.83 279.53l172.34 96.94M342.17 135.53l-172.34 96.94"
              ></path>
            </svg>
          </button>
        </div>
        <div
          className={`${
            showLinks ? "flex" : "hidden"
          } transition transform duration-150 scale-100 flex-col justify-start right-0 top-5 absolute bg-opacity-95 bg-white p-2 rounded-lg z-50 space-y-2 md:space-y-4 px-6 pb-6 w-80 md:w-96`}
        >
          <button
            onClick={() => {
              setShowLinks(!showLinks);
            }}
          >
            <PrevButton
              className={"rotate-180 absolute right-0 mx-4"}
              width={30}
              height={30}
            ></PrevButton>
          </button>
          <div className="ml-2 flex flex-col space-y-2 md:space-y-4">
            {socialMediaLinks.map((item, index) => (
              <div key={index} className="flex items-center space-x-2">
                <div className="flex items-center ">
                  <item.icon width={24} height={24} />
                </div>
                <Link href={item.link}>
                  <a
                    target={"_blank"}
                    rel="noreferrer"
                    className="text-2xl md:text-3xl font-bold font-londrina"
                  >
                    {item.name}
                  </a>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;

function useWindowSize() {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    // only execute all the code below in client side
    if (typeof window !== "undefined") {
      // Handler to call on window resize
      function handleResize() {
        // Set window width/height to state
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }

      // Add event listener
      window.addEventListener("resize", handleResize);

      // Call handler right away so state gets updated with initial window size
      handleResize();

      // Remove event listener on cleanup
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []); // Empty array ensures that effect is only run on mount
  return windowSize;
}
