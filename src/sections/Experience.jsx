import TitleHeader from "../components/TitleHeader";
import { journeyCards } from "../constants";

const Experience = () => {
  return (
    <section id="experience" className="w-full md:mt-40 mt-20 
    section-padding xl:px-0">
      <div className="w-full h-full md:px-20 px-5">
        <TitleHeader
          title="Journey Till Now"
          sub={"💼 My Life's Overview"}
        />

        <div className="mt-32 relative">
          <div className="relative z-50 xl:space-y-32 space-y-10">
            {journeyCards.map((cards) => (
              <div key={cards.title} className="exp-card-wrapper">
                {cards.title}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

export default Experience;