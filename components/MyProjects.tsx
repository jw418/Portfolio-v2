import React from "react";
import { data } from "@data/cardInfo";
import Card from "@components/Card";

export default function MyProjects(props: { isEng: boolean; isDark: boolean }) {
  const [showMore, setShowMore] = React.useState(false);
  const bottomProjects = React.useRef<HTMLDivElement>(null);

  function toggleShowMore() {
    setShowMore((prevState) => !prevState);
    if (showMore && bottomProjects.current) {
      const rect = bottomProjects.current.getBoundingClientRect();
      const scrollTopPosition = rect.top + window.scrollY + 475;
      window.scrollTo({ top: scrollTopPosition, behavior: "smooth" });
    }
  }
  const display = data.map((card) => {
    if (card.id > 3 && !showMore) return;
    return (
      <Card
        key={card.id}
        title={card.title}
        image={card.image}
        width={card.width}
        height={card.height}
        description={card.description}
        descriptionEN={card.descriptionEN}
        tag={card.tag}
        github={card.github}
        site={card.site}
        isEng={props.isEng}
        isDark={props.isDark}
      />
    );
  });

  return (
    <section className=" p-6  max-w-[1400px] md:mx-2" id="projects">
      <h2 className="text-4xl mb-6">{props.isEng ? "Projects" : "Projets"}</h2>
      <div
        className="relative grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-4 lg:grid-cols-3 xl:gap-8 "
        ref={bottomProjects}
      >
        {display}
        {!showMore && (
          <button
            className="absolute pointer top-[75%] left-[75%] transform -translate-x-1/2 -translate-y-1/2 hidden sm:block lg:hidden bg-blue-500 border-transparent border-4  hover:border-blue-500 hover:text-black dark:hover:text-white hover:bg-transparent text-white font-bold py-3 px-5 rounded-xl"
            onClick={toggleShowMore}
          >
            {showMore
              ? props.isEng
                ? "Show less"
                : "Voir moins"
              : props.isEng
              ? "Show more"
              : "Voir plus"}
          </button>
        )}
      </div>
      <div className="flex justify-center" id="bottomProjects">
        <button
          className={`bg-blue-500 m-10 border-4 pointer ${
            !showMore && "sm:hidden"
          } lg:block border-transparent hover:border-blue-500 hover:text-black dark:hover:text-white hover:bg-transparent text-white font-bold py-3 px-5 rounded-xl`}
          onClick={toggleShowMore}
        >
          {showMore
            ? props.isEng
              ? "Show less"
              : "Voir moins"
            : props.isEng
            ? "Show more"
            : "Voir plus"}
        </button>
      </div>
    </section>
  );
}
