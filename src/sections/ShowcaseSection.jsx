import { useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { projects } from "../constants";

gsap.registerPlugin(ScrollTrigger)

const ProjectCard = ({ project, className = "", imgClass = "" }) => (
  <div className={`flex flex-col ${className}`}>
    <a
      href={project.githubUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="block group"
    >
      <div
        className={`relative rounded-xl overflow-hidden ${imgClass}`}
        style={project.bgColor ? { backgroundColor: project.bgColor + "b3" } : {}}
      >
        <img src={project.imgPath} alt={project.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <span className="text-white font-semibold flex items-center gap-2">
            <img src="/images/logos/github.png" alt="GitHub" className="size-5 invert" />
            View on GitHub
          </span>
        </div>
      </div>
    </a>

    <div className="mt-4 space-y-2">
      <div className="flex flex-wrap gap-2">
        {project.techBadges.map((badge) => (
          <span key={badge} className="text-xs px-2 py-1 rounded-full bg-black-200 text-white-50 border border-black-50">
            {badge}
          </span>
        ))}
      </div>
      <h2>{project.title}</h2>
      <p className="text-white-50">{project.description}</p>
      <a
        href={project.githubUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 text-blue-50 hover:text-white transition-colors duration-200 text-sm"
      >
        <img src="/images/logos/github.png" alt="GitHub" className="size-4 invert opacity-60" />
        View on GitHub
      </a>
    </div>
  </div>
)

const ShowcaseSection = () => {
  const sectionRef = useRef(null)

  useGSAP(() => {
    gsap.utils.toArray(".showcase-card").forEach((card) => {
      gsap.fromTo(
        card,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=80",
          }
        }
      )
    })
  }, [])

  const [first, ...rest] = projects

  return (
    <section id="work" ref={sectionRef} className="app-showcase">
      <div className="w-full">
        <div className="showcaselayout items-start">
          {/* Left — featured project */}
          <div className="showcase-card first-project-wrapper !justify-start gap-5">
            <a
              href={first.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block group"
            >
              <div className="image-wrapper">
                <img src={first.imgPath} alt={first.title} className="w-full h-full object-cover rounded-xl absolute inset-0" />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl flex items-center justify-center">
                  <span className="text-white font-semibold text-lg flex items-center gap-2">
                    <img src="/images/logos/github.png" alt="GitHub" className="size-6 invert" />
                    View on GitHub
                  </span>
                </div>
              </div>
            </a>
            <div className="text-content !space-y-2">
              <div className="flex flex-wrap gap-2">
                {first.techBadges.map((badge) => (
                  <span key={badge} className="text-xs px-2 py-1 rounded-full bg-black-200 text-white-50 border border-black-50">
                    {badge}
                  </span>
                ))}
              </div>
              <h2>{first.title}</h2>
              <p className="text-white-50 md:text-xl">{first.description}</p>
              <a
                href={first.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-blue-50 hover:text-white transition-colors duration-200 text-sm"
              >
                <img src="/images/logos/github.png" alt="GitHub" className="size-4 invert opacity-60" />
                View on GitHub
              </a>
            </div>
          </div>

          {/* Right — two smaller projects */}
          <div className="project-list-wrapper overflow-hidden">
            {rest.map((project) => (
              <div key={project.title} className="showcase-card flex flex-col">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block group"
                >
                  <div
                    className="image-wrapper rounded-xl overflow-hidden relative"
                    style={project.bgColor ? { backgroundColor: project.bgColor + "b3" } : {}}
                  >
                    <img src={project.imgPath} alt={project.title} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <span className="text-white font-semibold flex items-center gap-2">
                        <img src="/images/logos/github.png" alt="GitHub" className="size-5 invert" />
                        View on GitHub
                      </span>
                    </div>
                  </div>
                </a>
                <div className="mt-3 space-y-2">
                  <div className="flex flex-wrap gap-2">
                    {project.techBadges.map((badge) => (
                      <span key={badge} className="text-xs px-2 py-1 rounded-full bg-black-200 text-white-50 border border-black-50">
                        {badge}
                      </span>
                    ))}
                  </div>
                  <h2>{project.title}</h2>
                  <p className="text-white-50">{project.description}</p>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-blue-50 hover:text-white transition-colors duration-200 text-sm"
                  >
                    <img src="/images/logos/github.png" alt="GitHub" className="size-4 invert opacity-60" />
                    View on GitHub
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ShowcaseSection;
