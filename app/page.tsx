"use client";
import React from "react";
import { useTheme } from "next-themes";
import Image from "next/image";

import Header from "@components/Header";
import Skills from "@components/Skills";
import MyProjects from "@components/MyProjects";
import Formation from "@components/Formation";
import ContactForm from "@components/ContactForm";
import Footer from "@components/Footer";

export default function Home() {
  const [isEng, setIsEng] = React.useState(true);
  const [isDark, setIsDark] = React.useState(true);
  const [showCopied, setShowCopied] = React.useState(false);
  const { setTheme, theme } = useTheme();

  React.useEffect(() => {
    setTheme("dark");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function toggleLang() {
    setIsEng((prevState) => !prevState);
  }

  function toggleStyle() {
    setIsDark((prevState) => !prevState);
    setTheme(theme === "light" ? "dark" : "light");
  }

  function handleCopyClick(toCopy: string) {
    navigator.clipboard.writeText(toCopy);
    setShowCopied(true);
    setTimeout(() => setShowCopied(false), 2500);
  }

  return (
    <>
      <div
        className={`flex flex-col mx-auto font-sans min-w-[300px] min-h-full max-w-6xl m-auto p-4 relative bg-gray-100 text-black dark:bg-gray-800 dark:text-white `}
      >
        <Header
          toggleStyle={toggleStyle}
          toggleLang={toggleLang}
          isEng={isEng}
          isDark={isDark}
        />
        <main className="flex min-h-screen flex-col items-center justify-between p10">
          <Skills isEng={isEng} isDark={isDark} />
          <MyProjects isEng={isEng} isDark={isDark} />
          <Formation isEng={isEng} isDark={isDark} />
          <section className="form">
            <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
                <div className="lg:col-span-2 lg:py-12 lg:flex lg:items-center">
                  <div className="flex flex-col h-full">
                    <p className="max-w-xl text-xl">
                      {isEng
                        ? "Dear visitor, if you are looking for someone to bring your Web3 projects to life, please don't hesitate to contact me. Whether it's for a full-time position or freelance collaboration, I'm eager to help you turn your ideas into reality. Let's collaborate and create something impactful."
                        : "Cher visiteur, si vous recherchez quelqu'un pour concrétiser vos projets Web3, n'hésitez pas à me contacter. Que ce soit pour un poste à plein temps ou une collaboration freelance, je suis désireux de vous aider à transformer vos idées en réalité. Collaborons et créons quelque chose d'impactant."}
                    </p>

                    <div className="flex flex-col h-full justify-evenly text-xl items-center  mt-4 lg:items-start lg:my-0">
                      <a
                        href="https://github.com/jw418"
                        title="https://github.com/jw418"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center my-2"
                      >
                        <Image
                          className="p-1 w-8 mr-2"
                          src={`/img/github-logo-${
                            isDark ? "white" : "dark"
                          }.png`}
                          alt="GitHub Logo"
                          width={96}
                          height={96}
                        />
                        <span>Github.com/jw418</span>
                      </a>

                      <a
                        href="https://www.linkedin.com/in/julien-wolff-web3/"
                        title="https://www.linkedin.com/in/julien-wolff-web3/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center my-2"
                      >
                        <Image
                          className="p-1 w-8 mr-2"
                          src="/img/linkedin.png"
                          alt="LinkedIn Logo"
                          width={536}
                          height={536}
                        />
                        <span>Linkedin</span>
                      </a>

                      {/* Email */}
                      <button
                        onClick={() =>
                          handleCopyClick("wolffjulien8@gmail.com")
                        }
                        className="flex items-center my-2"
                      >
                        <Image
                          className="p-1 w-8 mr-2"
                          src={
                            isDark
                              ? "/img/mail-logo-white.png"
                              : "/img/mail-logo-dark.png"
                          }
                          alt="Email Logo"
                          width={96}
                          height={96}
                        />
                        <span>wolffjulien8@gmail.com</span>
                      </button>
                      {showCopied && (
                        <div className="fixed z-101 bottom-4 right-2/4 transform translate-x-[40%] translate-y-[-11%] bg-white border-4 border-[#838894] rounded-full w-[150px] p-[11px] flex justify-center text-black text-lg">
                          {isEng ? "Copied " : "Copié "}✅
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                <ContactForm isEng={isEng} />
              </div>
            </div>
          </section>
          <Footer isEng={isEng} isDark={isDark} />
        </main>
      </div>
    </>
  );
}
