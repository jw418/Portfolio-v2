import Image from "next/image";
import Link from "next/link";
import React from "react";
export default function Formation(props: { isEng: boolean; isDark: boolean }) {
  const [popupImg, setPopupImg] = React.useState({ display: "none" });

  const expand = () => {
    setPopupImg({
      display: "block",
    });
  };

  const close = () => {
    setPopupImg({
      display: "none",
    });
  };

  return (
    <>
      <section
        className={`p-8 max-w-screen-xl mt-12 ${
          props.isDark ? "text-white" : "text-black"
        }xl:mx-24 lg:mx-5 md:mx-10 sm:mx-1`}
      >
        <h2 className="text-4xl mb-6">
          {props.isEng ? "Courses" : "Formation"}
        </h2>
        <ol className={`relative border-l border-gray-200`}>
          <li className="mb-10 ml-4">
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white"></div>
            <time className="mb-1 text-sm font-normal leading-none text-gray-400">
              {props.isEng
                ? "September 2021 - November 2021"
                : "Septembre 2021 - Novembre 2021"}
            </time>
            <h3
              className={`text-lg font-semibold ${
                props.isDark ? "text-white" : "text-gray-900"
              } `}
            >
              {props.isEng
                ? "Introductory Web Development Courses"
                : "Initiation au Développement Web"}
            </h3>
            <h4
              className={`text-sm font-semibold ${
                props.isDark ? "text-gray-400" : "text-gray-700"
              }`}
            >
              <Link
                href="https://openclassrooms.com/"
                target="_blank"
                className="pointer hover:text-blue-500 flex items-center"
              >
                Open Class Rooms
                <svg
                  className="w-3 h-3 ml-2 text-gray-800  dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 18 18"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778"
                  />
                </svg>
              </Link>
            </h4>
            <p
              className={`mb-4 text-base font-normal ${
                props.isDark ? "text-white" : "text-gray-500"
              }`}
            >
              {props.isEng
                ? "Basics of Python, Javascript, Git/Github, HTML, CSS"
                : "Bases de Python, Javascript, Git/Github, HTML, CSS"}
            </p>
          </li>
          <li className="mb-10 ml-4">
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white"></div>
            <div className="flex items-start">
              <div>
                <time className="mb-1 text-sm font-normal leading-none text-gray-400 ">
                  {props.isEng
                    ? "December 2021 - May 2022"
                    : "Decembre 2021 - Mai 2022"}
                </time>
                <h3
                  className={`text-lg font-semibold ${
                    props.isDark ? "text-white" : "text-gray-900"
                  } `}
                >
                  {props.isEng
                    ? "Blockchain developer certification"
                    : "Certification développeur blockchain"}
                </h3>
                <h4
                  className={`text-sm font-semibold ${
                    props.isDark ? "text-gray-400 " : "text-gray-700"
                  }`}
                >
                  <Link
                    href="https://www.alyra.fr/"
                    target="_blank"
                    className="pointer flex items-center hover:text-blue-500"
                  >
                    {"Alyra, l'école blockchain"}
                    <svg
                      className="w-3 h-3 ml-2 text-gray-800  dark:text-white"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 18 18"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778"
                      />
                    </svg>
                  </Link>
                </h4>
              </div>
              <Link
                href="https://certificate.bcdiploma.com/check/AF32D56CA58A264097E947F84728FD4521BC4938C810958BD2500113851C9CD0ZkQvb0JxclJPU0xhcGNvNTllS1FlWkRNVTY5UU9sWEhGeENQdGQycU1xaW5yRmp0"
                target="_blank"
                title={
                  props.isEng ? "Alyra Certificate" : "Alyra Certification"
                }
                className="pointer"
              >
                <Image
                  src="/img/certification.svg"
                  alt="Certification"
                  className={`max-w-[90px] mx-4 rounded-full hover:-translate-y-1 transition-all`}
                  width={553}
                  height={558}
                />
              </Link>
            </div>
            <div
              className={`p-4 rounded-md ${
                props.isDark ? "bg-transparent shadow-gray-600" : "bg-gray-100"
              }   shadow-lg max-w-[1000px]`}
            >
              <ul className="list-disc pl-5 space-y-2">
                <li
                  className={`text-base font-normal ${
                    props.isDark ? "text-white" : "text-gray-500"
                  }`}
                >
                  {props.isEng
                    ? "Developing an intelligent contract on EVM"
                    : "Développement d'un contrat intelligent sur EVM"}
                </li>
                <li
                  className={`text-base font-normal ${
                    props.isDark ? "text-white" : "text-gray-500"
                  }`}
                >
                  {props.isEng
                    ? "Adopting good development practices to reduce risks"
                    : "Adoption de bonnes pratiques de développement pour réduire les risques"}
                </li>
                <li
                  className={`text-base font-normal ${
                    props.isDark ? "text-white" : "text-gray-500"
                  }`}
                >
                  {props.isEng
                    ? "Optimising code to limit gas costs"
                    : "Optimisation du code pour limiter les coûts de gaz"}
                </li>
                <li
                  className={`text-base font-normal ${
                    props.isDark ? "text-white" : "text-gray-500"
                  }`}
                >
                  {props.isEng
                    ? "Integrating the front-end of a decentralised application using libraries"
                    : "Intégration du front-end d'une application décentralisée en utilisant des bibliothèques"}
                </li>
                <li
                  className={`text-base font-normal ${
                    props.isDark ? "text-white" : "text-gray-500"
                  }`}
                >
                  {props.isEng
                    ? "Deploying a decentralised application on a blockchain"
                    : "Déploiement d'une application décentralisée sur une blockchain"}
                </li>
              </ul>
            </div>
          </li>

          <li className="mb-10 ml-4">
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white "></div>
            <time className="mb-1 text-sm font-normal leading-none text-gray-400 ">
              {props.isEng
                ? "September 2022 - March 2023"
                : "Septembre 2022 - Mars 2023"}
            </time>

            <h3
              className={`text-lg font-semibold ${
                props.isDark ? "text-white" : "text-gray-900"
              } `}
            >
              {props.isEng
                ? "In-depth Web development"
                : "Approfondissement du développement Web"}
            </h3>
            <h4
              className={`flex items-center text-sm font-semibold ${
                props.isDark ? "text-gray-400" : "text-gray-700"
              }`}
            >
              {props.isEng ? "Online Courses on " : "Cours en ligne sur "}
              <Link
                href="https://scrimba.com/"
                target="_blank"
                className="pointer flex items-center ml-1 mr-2 hover:text-blue-500"
              >
                Scrimba
                <svg
                  className="w-3 h-3 ml-1 text-gray-800  dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 18 18"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778"
                  />
                </svg>
              </Link>
              {"  "}&{"  "}
              <Link
                href="https://fireship.io/"
                target="_blank"
                className="pointer ml-2 flex items-center hover:text-blue-500"
              >
                Fireship.io
                <svg
                  className="w-3 h-3 mx-1 text-gray-800  dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 18 18"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778"
                  />
                </svg>
              </Link>{" "}
              :
            </h4>

            <div
              className={`p-4 ${
                props.isDark ? "bg-transparent shadow-gray-600" : "bg-gray-100"
              }  rounded-md shadow-lg max-w-[1000px]`}
            >
              <ul className="list-disc pl-5 space-y-2 ">
                <li
                  className={`text-base font-normal ${
                    props.isDark ? "text-white" : "text-gray-500"
                  }`}
                >
                  Learn React
                </li>
                <li
                  className={`text-base font-normal ${
                    props.isDark ? "text-white" : "text-gray-500"
                  }`}
                >
                  Advanced React
                </li>
                <li
                  className={`text-base font-normal ${
                    props.isDark ? "text-white" : "text-gray-500"
                  }`}
                >
                  Learn Typescript
                </li>
                <li
                  className={`text-base font-normal ${
                    props.isDark ? "text-white" : "text-gray-500"
                  }`}
                >
                  Next.js Firebase Full Course
                </li>
              </ul>
            </div>
          </li>

          <li className="mb-10 ml-4">
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white "></div>
            <div className="flex items-start">
              <div>
                <time className="mb-1 text-sm font-normal leading-none text-gray-400 ">
                  {props.isEng
                    ? "September 2023 - Now"
                    : "Septembre 2023 - Aujourd'hui"}
                </time>
                <h3
                  className={`text-lg font-semibold ${
                    props.isDark ? "text-white" : "text-gray-900"
                  } `}
                >
                  {props.isEng
                    ? "In-depth Web3 development"
                    : "Approfondissement du développement Web3"}
                </h3>
                <h4
                  className={`text-sm font-semibold ${
                    props.isDark ? "text-gray-400" : "text-gray-700"
                  }`}
                >
                  <Link
                    href="https://nodeguardians.io/"
                    target="_blank"
                    className="pointer flex items-center hover:text-blue-500"
                  >
                    NodeGuardians.io
                    <svg
                      className="w-3 h-3 ml-2 text-gray-800  dark:text-white"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 18 18"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778"
                      />
                    </svg>
                  </Link>
                </h4>
              </div>
              <div className="relative w-[130px] ml-4 ">
                <Image
                  src="/img/node_guardians_profile.png"
                  alt="Node Guardians"
                  title={
                    props.isEng
                      ? "Node Guardians Profile"
                      : "Profile Node Guardians"
                  }
                  width={1554}
                  height={870}
                  onClick={expand}
                  className="h-30  cursor-pointer rounded-xl object-cover shadow-xl shadow-transparent m-2 hover:shadow-md  hover:shadow-gray-800  dark:hover:shadow-gray-100"
                />
                <Image
                  className="block w-[15%] absolute top-[10px] right-[0px] bg-black rounded-[15%] opacity-75 cursor-pointer "
                  src="/img/link.png"
                  width={96}
                  height={96}
                  alt=""
                  onClick={expand}
                  title="Maximize"
                />
                <div
                  className="fixed top-0 left-0 bg-black bg-opacity-90 h-full w-full z-50"
                  onClick={close}
                  style={popupImg}
                >
                  <Image
                    src="/img/node_guardians_profile.png"
                    alt=""
                    width={1554}
                    height={870}
                    className="border-4 border-white rounded-md max-w-[90%] max-h-[90%] object-cover cursor-pointer flex relative mx-auto my-5 mt-20"
                  />
                  <p className="text-white fixed text-xl top-1 right-3 p-1 px-2 rounded-lg bg-black bg-opacity-90 cursor-pointer">
                    X
                  </p>
                </div>
              </div>
            </div>

            <div className="max-w-[1000px] lg:flex">
              <p className="mt-4 mb-2 max-w-[80%] flex">
                {props.isEng
                  ? "Node Guardians is a blockchain educational platform that provides a space for intermediate to advanced developers to master smart contract development."
                  : "Node Guardians est une plateforme éducative blockchain qui offre un espace aux développeurs intermédiaires et avancés pour maîtriser le développement de contrats intelligents."}
              </p>
            </div>

            <div
              className={`p-4 ${
                props.isDark ? "bg-transparent shadow-gray-600" : "bg-gray-100"
              }  rounded-md shadow-lg max-w-[1000px]`}
            >
              <ul className="list-disc pl-5 space-y-2 ">
                <li
                  className={`text-base font-normal ${
                    props.isDark ? "text-white" : "text-gray-500"
                  }`}
                >
                  Proxy Contract
                </li>
                <li
                  className={`text-base font-normal ${
                    props.isDark ? "text-white" : "text-gray-500"
                  }`}
                >
                  Assembly
                </li>
                <li
                  className={`text-base font-normal ${
                    props.isDark ? "text-white" : "text-gray-500"
                  }`}
                >
                  Diamond Storage
                </li>
                <li
                  className={`text-base font-normal ${
                    props.isDark ? "text-white" : "text-gray-500"
                  }`}
                >
                  {props.isEng
                    ? "Randomness in solidity"
                    : "L'aléatoire en solidity"}
                </li>
                <li
                  className={`text-base font-normal ${
                    props.isDark ? "text-white" : "text-gray-500"
                  }`}
                >
                  {props.isEng ? "Gas Optimization" : "Optimisation du gaz"}
                </li>
                <li
                  className={`text-base font-normal ${
                    props.isDark ? "text-white" : "text-gray-500"
                  }`}
                >
                  ...
                </li>
              </ul>
            </div>
          </li>
        </ol>
      </section>
    </>
  );
}
