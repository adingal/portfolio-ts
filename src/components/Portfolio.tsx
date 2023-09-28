import React from 'react'
import Container from '../atoms/Container'
import SectionTitle from '../atoms/SectionTitle'
import externalLinkIcon from '../assets/images/external-link.png'
import projects from '../data/clientProjects'

function Portfolio() {
  const onProjectEnter: React.MouseEventHandler<HTMLDivElement> = (e) => {
    e.currentTarget.children[1].classList.add('bottom-0', 'opacity-100')
    e.currentTarget.children[1].classList.remove('-bottom-full', 'opacity-0')
  }

  const onProjectLeave: React.MouseEventHandler<HTMLDivElement> = (e) => {
    e.currentTarget.children[1].classList.add('-bottom-full', 'opacity-0')
    e.currentTarget.children[1].classList.remove('bottom-0', 'opacity-100')
  }

  return (
    <Container sectionID="portfolio">
      <div className="max-w-[1440px] mx-auto px-4">
        <SectionTitle title="Projects" />
        {projects && projects.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {projects.map((project) => (
              <div
                onMouseEnter={onProjectEnter}
                onMouseLeave={onProjectLeave}
                className="card text-white relative overflow-hidden border border-white"
                key={project.id}
              >
                <a
                  className="cursor-pointer"
                  href={project.url}
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    className="max-w-full w-full md:w-auto"
                    src={project.imgUrl}
                    alt=""
                  />
                </a>
                <div
                  className={`w-full h-auto flex flex-col justify-start bg-red-600 absolute border-t border-white -bottom-full opacity-0 transition-all delay-200 ease-in-out p-4`}
                >
                  <h2 className="text-base lg:text-lg font-medium mb-2 lg:mb-4">
                    {project.title}
                  </h2>
                  <p className="text-sm text-gray-200 mb-4 lg:mb-6">
                    {project.description}
                  </p>
                  <a
                    href={project.url}
                    className="block mt-auto ml-auto cursor-pointer"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      className="max-w-[20px] block mx-auto filter invert"
                      src={externalLinkIcon}
                      alt="External link"
                    />
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </Container>
  )
}

export default Portfolio
