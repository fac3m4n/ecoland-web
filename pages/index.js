import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Head from "next/head";
import Button from "../components/Button";
import UnderlineRec from "../components/assets/UnderlineRec";
import UnderlineRec1 from "../components/assets/UnderlineRec1";
import SingleTree from "../components/assets/SingleTree";
import TreeCard from "../components/TreeCard";
import PrevButton from "../components/assets/PrevButton";
import NextButton from "../components/assets/NextButton";
import TokenomicsGraph from "../components/assets/tokenomicsGraph";
import { useRouter } from "next/router";
import { Checkmark } from "react-ionicons";
import TreeCarousel from "../components/TreeCarousel";
import { roadmap, trees } from "../helpers/utils";
import { useState } from "react";
import TreesImage from "../components/assets/TreesImage";
import Link from "next/link";

const styles = {
  primaryButtton:
    "bg-primary-green text-secondary-green rounded-full font-semibold p-2 px-4 z-40",
};

export default function Home() {
  const router = useRouter();

  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="min-h-screen">
      <Head>
        <title>Ecoland</title>
        <meta property="og:title" content="Ecoland" />
        <meta
          property="og:description"
          content="Ecoland is a play-for-purpose game. In this blockchain universe, you plant your NFTrees and we grow them in the real world. We designed the best way to take eco-friendly action against the upcoming catastrophe."
        />
        <meta property="og:url" content="https://ecoland.world/"></meta>
        <meta
          name="description"
          content="Ecoland is a play-for-purpose game. In this blockchain universe, you plant your NFTrees and we grow them in the real world. We designed the best way to take eco-friendly action against the upcoming catastrophe."
        />
        <meta name="twitter:site" content="@EcoLandWorld"></meta>
        <meta property="og:image" content="/ecoland-thumb.jpg" />

        <meta name="twitter:title" content="Ecoland" />
        <meta
          name="twitter:description"
          content=" Ecoland is a play-for-purpose game. In this blockchain universe, you plant your NFTrees and we grow them in the real world. We designed the best way to take eco-friendly action against the upcoming catastrophe."
        />
        <meta
          name="twitter:image"
          content=" https://ecoland.world/ecoland-thumb.jpg"
        />
        <meta name="twitter:card" content="summary_large_image"></meta>

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#000" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <Navbar menuOpen={menuOpen} menuClick={handleMenuClick} />
      <main
        className={`${menuOpen ? "blur-sm opacity-75 " : ""} flex flex-col`}
      >
        {/* Section 1 - Eco Land */}
        <section className={`mt-24 h-screen relative pt-8`} id="home">
          <div className="flex flex-col justify-center text-center items-center space-y-4 mt-4 mx-auto px-6">
            <div className="relative">
              <h1 className="text-5xl lg:text-8xl font-bold font-londrinaBlack">
                Ecoland
              </h1>
              <UnderlineRec className="absolute w-20 lg:w-36 -bottom-2 -left-1 lg:bottom-0 lg:left-0 -z-10"></UnderlineRec>
            </div>
            <p className="max-w-md font-configmedium text-2xl">
              Ecoland is a play-for-purpose game. In this blockchain universe,
              you plant your NFTrees and we grow them in the real world. We
              designed the best way to take eco-friendly action against the
              upcoming catastrophe.
            </p>
            <p className="max-w-md font-londrina text-2xl">
              🌳 Plant Trees &#8594; 💰 Earn &#8594; 🌎 Save the World
            </p>
            <Link href={"#env"}>
              <a className={styles.primaryButtton}>Try EcoLand now!</a>
            </Link>
            {/* <Button className={"z-50"} onClick={() => alert("Hi")}>
              
            </Button> */}
          </div>
          <div className="h-screen bg-center eco-bg-image -left-28 -bottom-5 md:-left-28 md:-bottom-5 lg:bottom-0 lg:left-0 -z-10 overflow-hidden"></div>
          <div className="h-screen bg-center trees-image hidden lg:flex z-0"></div>
          {/* <TreesImage
            className={
              "absolute h-screen bg-center z-10 w-screen hidden lg:flex right-0 bottom-0 md:bottom-0 lg:bottom-0 bg-cover bg-no-repeat"
            }
          /> */}
        </section>
        {/* Section 2 - Environmental Issues */}
        <section
          className="h-screen relative -z-10 bg-primary-green -mt-5 md:mt-0 lg:mt-0"
          id="env"
        >
          <div className="factory-image min-h-screen bottom-0 -z-20 ml-0"></div>
          <div className="flex flex-row justify-between">
            <div></div>
            <div className="flex flex-col text-left items-start space-y-4 mx-10 my-10 py-6">
              <div className="relative">
                <h1 className="text-4xl lg:text-5xl font-bold font-londrina">
                  Environmental Issues
                </h1>
                <UnderlineRec
                  variant="white-1"
                  width={180}
                  className="absolute -left-2 w-32 sm:left-52 md:left-52 lg:left-72 -bottom-1 -z-10"
                ></UnderlineRec>
              </div>
              <p className="max-w-md font-configmedium text-2xl md:text-3xl">
                The environment is being disrupted on a global scale by
                countless new and complex factors, such as:
              </p>
              <ul className="text-2xl md:text-3xl font-configmedium max-w-md">
                <li>
                  <span className="font-londrina">1.</span> Pollution
                </li>
                <li>
                  <span className="font-londrina">2.</span> Global warming
                </li>
                <li>
                  <span className="font-londrina">3.</span> Overpopulation
                </li>
                <li>
                  <span className="font-londrina">4.</span> Depletion of natural
                  resources
                </li>
                <li>
                  <span className="font-londrina">5.</span> Waste Disposal
                </li>
                <li>
                  <span className="font-londrina">6.</span> Loss of biodiversity
                  , extinction of species
                </li>
                <li>
                  <span className="font-londrina">7.</span> Deforestation
                </li>
                <li>
                  <span className="font-londrina">8.</span> Public health
                  problems
                </li>
              </ul>
            </div>
          </div>
        </section>
        {/* Section 3 - So what is Eco Land? */}
        <section className="relative bg-white z-0" id="about">
          <div className="flex flex-row justify-between items-center mt-14">
            <div className="flex flex-col justify-center text-center md:text-left lg:text-left items-start space-y-4 mx-auto md:mx-6 lg:mx-auto my-6 px-6">
              <div className="relative flex justify-center text-center items-center mx-auto md:mx-0">
                <h1 className="text-4xl sm:text-5xl md:text-5xl lg:text-5xl font-bold font-londrina flex justify-center text-center items-center">
                  So what is Ecoland?{" "}
                </h1>
                <UnderlineRec className="absolute right-6 so-what-is-underline md:right-16 lg:right-0 -bottom-3 -z-10"></UnderlineRec>
              </div>
              <p className=" max-w-md font-configmedium text-2xl">
                Ecoland is a blockchain-based game with NFT technology as part
                of it. The first series in this is the game called
                &quot;Ecoland: Trees&quot;. There are only numbered trees left
                in the world waiting for you to be saved. Help us grow the trees
                and earn tokens for that. After a successful acquisition of
                enough tokens, your NFT is burnt and a real tree is planted in
                the real world. That way we save our beloved planet from a
                catastrophic end. A tree planted saves many of us from
                extinction and disaster. It saves the future generation. Let’s
                not be selfish and save our home. <br />
                <span className="font-londrina text-3xl">Let’s act!</span>
              </p>
              <div className="w-full flex flex-row justify-center md:justify-start lg:justify-start space-x-6">
                {/* <Button
                  onClick={() => {
                    router.push("https://google.com");
                  }}
                >
                  Learn more
                </Button> */}
                <Link
                  href={
                    "https://ecolandworld.gitbook.io/ecoland.world-whitepaper/about/team"
                  }
                >
                  <a
                    target={"_blank"}
                    rel="noreferrer"
                    className={styles.primaryButtton}
                  >
                    Our Team
                  </a>
                </Link>
              </div>
            </div>
            <SingleTree className={"hidden md:flex lg:flex"}></SingleTree>
            {/* <div className="single-tree h-screen flo"></div> */}
          </div>
        </section>
        {/* Section 4 - Our Trees */}
        <div className="relative h-20 w-full">
          <svg
            height="549"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute w-full -z-10 -top-36 overflow-x-hidden"
          >
            <path
              d="M-74 548C-57.8333 480 109 342.5 236.5 342.5C515.985 342.5 658.5 649.5 1043 423C1297.09 273.322 1492.17 114.5 1537 1"
              stroke="#A8E34B"
              strokeWidth="3"
              strokeDasharray="17 17"
            />
          </svg>
        </div>
        <section id="nfts" className="mt-10 relative z-0">
          <div className="flex flex-col justify-center items-center mt-10">
            <div className="relative">
              <h1 className="text-5xl font-bold font-londrina">Our Trees!</h1>
              <UnderlineRec className="absolute left-16 -bottom-2 -z-10"></UnderlineRec>
            </div>
          </div>
          <div>
            <TreeCarousel treeList={trees}></TreeCarousel>
          </div>
          {/* <div className="flex flex-row justify-center space-x-6 my-10 items-center text-center object-center mx-4">
            <button>
              <PrevButton width={24} height={24}></PrevButton>
            </button>
            <div className="flex justify-between space-x-4 max-w-5xl">
              <TreeCard img={"nft-tree.png"} treename={"Yaprak Tree"} />
              <TreeCard img={"nft-tree2.png"} treename={"Dokoon Tree"} />
              <TreeCard img={"nft-tree3.png"} treename={"Kempoot tree"} />
            </div>
            <button>
              <NextButton width={24} height={24}></NextButton>
            </button>
          </div> */}
          <div className="text-center">
            <Link
              href={
                "https://ecolandworld.gitbook.io/ecoland.world-whitepaper/the-game/gameplay/mother-trees"
              }
            >
              <a
                target={"_blank"}
                rel={"noreferrer"}
                className={styles.primaryButtton}
              >
                Learn More!
              </a>
            </Link>
          </div>
        </section>
        <div className="relative h-24 w-full">
          <svg
            height="316"
            fill="none"
            className="absolute w-full -top-24 -z-10 overflow-x-hidden"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1580.47 108.894C1547.11 47.4739 1453.91 36.9109 1353 89.5C1178.28 180.549 899.875 398.119 469.575 279.863C185.22 201.715 -44.5572 99.3337 -117.469 1.4757"
              stroke="#A8E34B"
              strokeWidth="3"
              strokeDasharray="17 17"
            />
          </svg>
        </div>
        {/* Section 5 - Tokenomics */}
        <section className="" id="tokenomics">
          <div className="flex flex-col justify-center items-center mt-10">
            <div className="relative mb-10">
              <h1 className="text-5xl font-bold font-londrina">Tokenomics</h1>
              <UnderlineRec className="absolute left-16 -bottom-2 -z-10"></UnderlineRec>
            </div>
          </div>
          <div className="flex flex-col items-center md:flex-col lg:flex-row my-6 justify-around">
            <div className="flex-col text-left md:text-center lg:text-left items-start flex md:flex lg:flex">
              <p className="max-w-md font-configmedium text-2xl mx-4">
                Total Supply ={" "}
                <span className="font-londrina">10 000 000 000 YPR</span>{" "}
                (YAPRAK)
                <br />
                Game Rewards = <span className="font-londrina">60%</span>
                <br />
                Public Investors = <span className="font-londrina">10%</span>
                <br />
                Team = <span className="font-londrina">10%</span>
                <br />
                Marketing & Partnership ={" "}
                <span className="font-londrina">7%</span>
                <br />
                Liquidity & Listing = <span className="font-londrina">10%</span>
                <br />
                Advisors = <span className="font-londrina">3%</span>
                <br />
              </p>
              {/* <div className="w-full flex flex-row justify-center md:justift-center lg:justify-start space-x-6">
                <Button>The Game</Button>
                <Button type="secondary">The Impact</Button>
              </div> */}
            </div>
            <div className="flex flex-col items-start space-y-4">
              <TokenomicsGraph
                className={"w-screen md:max-w-screen-sm lg:max-w-screen-sm p-4"}
              ></TokenomicsGraph>
            </div>
          </div>
        </section>
        {/* Section 6 - RoadMap */}
        <div className="relative hidden md:hidden lg:flex h-20 w-full">
          <svg
            width="1440"
            height="472"
            viewBox="0 0 1440 472"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute w-full -z-0 top-40 overflow-x-hidden"
          >
            <path
              d="M1563.67 46.0983C1522.13 -13.372 1429.29 -14.1552 1337.97 50.7463C1179.87 163.112 740.718 715.752 499.692 341.63C134 -226 -30.1003 211.765 -115.633 119.149"
              stroke="#F8F8F8"
              strokeWidth="3"
              strokeDasharray="17 17"
            />
          </svg>
        </div>
        <section
          className="hidden md:hidden lg:flex lg:flex-col bg-transparent relative"
          id="roadmap"
        >
          <div className="absolute h-full top-0 w-full bg-primary-green -z-10"></div>
          <div className="flex flex-col justify-center items-center mt-10">
            <div className="relative mb-6">
              <h1 className="text-5xl font-bold font-londrina">Roadmap</h1>
              <UnderlineRec
                variant="white-2"
                width={200}
                height={32}
                className="absolute -left-2 -bottom-2 -z-10"
              ></UnderlineRec>
            </div>
          </div>
          <div className="relative items-center overflow-x-hidden">
            <div className="flex m-10 justify-between z-10">
              <div className="flex flex-col space-y-6 items-center justify-center">
                <div className="text-2xl md:text-3xl lg:text-5xl shadow-xl rounded-lg text-secondary-green font-bold font-londrina px-8 md:px-10 lg:px-14 text-center bg-white py-8 md:py-12 lg:py-16 relative">
                  <div className="absolute right-0 -left-10 w-screen h-4 bg-secondary-green top-1/2 -z-10 overflow-x-hidden"></div>
                  <p>
                    2022 <br></br> Q1
                  </p>
                </div>
              </div>
              <div className="flex flex-col space-y-6 items-center justify-center">
                <div className="text-2xl md:text-3xl lg:text-5xl shadow-xl rounded-lg text-secondary-green font-bold font-londrina px-8 md:px-10 lg:px-14 text-center bg-white py-8 md:py-12 lg:py-16">
                  2022 <br></br> Q4
                </div>
              </div>
              <div className="flex flex-col space-y-6 items-center justify-center">
                <div className="text-2xl md:text-3xl lg:text-5xl shadow-xl rounded-lg text-secondary-green font-bold font-londrina px-8 md:px-10 lg:px-14 text-center bg-white py-8 md:py-12 lg:py-16">
                  2022 <br></br> Q4
                </div>
              </div>
              <div className="flex flex-col space-y-6 items-center justify-center">
                <div className="text-2xl md:text-3xl lg:text-5xl shadow-xl rounded-lg text-secondary-green font-bold font-londrina px-8 md:px-10 lg:px-14 text-center bg-white py-8 md:py-12 lg:py-16">
                  2022 <br></br> Q4
                </div>
              </div>
            </div>
            <div className="flex m-10 justify-between items-center">
              <ul className="w-52 ml-2 ">
                {roadmap.q1.map((item, index) => (
                  <li key={index} className="flex">
                    <span className="px-1">
                      {item.done ? (
                        <Checkmark color={"white"} height="24px" width="24px" />
                      ) : (
                        <div className="w-6"></div>
                      )}
                    </span>
                    {item.title}
                  </li>
                ))}
              </ul>
              <ul className="w-52 ml-2">
                {roadmap.q2.map((item, index) => (
                  <li key={index} className="flex">
                    <span className="px-1">
                      {item.done ? (
                        <Checkmark color={"white"} height="24px" width="24px" />
                      ) : (
                        <div className="w-6"></div>
                      )}
                    </span>
                    {item.title}
                  </li>
                ))}
              </ul>
              <ul className="w-52 ml-2">
                {roadmap.q3.map((item, index) => (
                  <li key={index} className="flex">
                    <span className="px-1">
                      {item.done ? (
                        <Checkmark color={"white"} height="24px" width="24px" />
                      ) : (
                        <div className="w-6"></div>
                      )}
                    </span>
                    {item.title}
                  </li>
                ))}
              </ul>
              <ul className="w-52 ml-2">
                {roadmap.q4.map((item, index) => (
                  <li key={index} className="flex">
                    <span className="px-1">
                      {item.done ? (
                        <Checkmark color={"white"} height="24px" width="24px" />
                      ) : (
                        <div className="w-6"></div>
                      )}
                    </span>
                    {item.title}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </main>
      <Footer></Footer>
    </div>
  );
}
