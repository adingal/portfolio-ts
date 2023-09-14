import React, { useState } from 'react'
import Container from '../atoms/Container'
import profile from '../assets/images/profile.jpg'
import experiences from '../data/experience'

type Collapse = {
  skills: boolean
  experience: boolean
  education: boolean
}

function About(): JSX.Element {
  const [collapse, setCollapse] = useState<Collapse>({
    skills: true,
    experience: false,
    education: false,
  })

  const onButtonClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const collapseCopy = { ...collapse }
    const targetHref = e.currentTarget.href.slice(
      e.currentTarget.href.indexOf('#') + 1
    )

    Object.keys(collapseCopy).forEach(
      (key) => (collapseCopy[key as keyof Collapse] = false)
    )

    collapseCopy[targetHref as keyof Collapse] = true

    setCollapse({
      ...collapseCopy,
    })
  }

  return (
    <Container sectionID="about">
      <div className="max-w-[1440px] mx-auto px-4">
        <div className="flex flex-col md:flex-row">
          <div className="w-full lg:w-2/5">
            <img
              className="max-w-full w-1/2 md:w-full h-auto block mx-auto mb-4 md:mb-0 object-cover rounded-full filter grayscale"
              src={profile}
              alt="Profile"
            />
          </div>
          <div className="w-full text-white md:ml-8 xl:ml-12 pt-0">
            <div className="text-center md:text-left mb-4 xl:mb-6">
              <h2 className="text-2xl md:text-3xl xl:text6xl font-heading font-bold mb-2">
                About me
              </h2>
              <p className="lg:max-w-xl text-sm md:text-base">
                A story of an electronics technician into a full-time frontend
                developer. Studied web development after my working hours. And
                successfully landed a frontend developer position.
              </p>
            </div>
            <div className="flex flex-row space-x-2 mb-4 xl:mb-6">
              <a
                onClick={onButtonClick}
                className={`${
                  collapse.skills ? 'bg-red-600' : 'bg-zinc-800'
                } hover:bg-red-600 border border-zinc-600 rounded-md py-2 px-4 cursor-pointer transition-colors delay-100`}
                href="#skills"
              >
                Skills
              </a>
              <a
                onClick={onButtonClick}
                className={`${
                  collapse.experience ? 'bg-red-600' : 'bg-zinc-800'
                } hover:bg-red-600 border border-zinc-600 rounded-md py-2 px-4 cursor-pointer transition-colors delay-100`}
                href="#experience"
              >
                Experience
              </a>
              <a
                onClick={onButtonClick}
                className={`${
                  collapse.education ? 'bg-red-600' : 'bg-zinc-800'
                } hover:bg-red-600 border border-zinc-600 rounded-md py-2 px-4 cursor-pointer transition-colors delay-100`}
                href="#education"
              >
                Education
              </a>
            </div>
            <div>
              <div className={`${collapse.skills ? 'block' : 'hidden'}`}>
                <div className="flex flex-col md:flex-row md:space-x-8">
                  <div>
                    <h3 className="text-base lg:text-xl font-medium mb-2">
                      Technology
                    </h3>
                    <ul className="mb-4 list-disc list-inside">
                      <li>HTML</li>
                      <li>CSS</li>
                      <li>JavaScript</li>
                      <li>TypeScript (Basics)</li>
                      <li>NodeJs (Basics)</li>
                      <li>Git</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-base lg:text-xl font-medium mb-2">
                      Framework/Library
                    </h3>
                    <ul className="mb-4 list-disc list-inside">
                      <li>React</li>
                      <li>Bootstrap</li>
                      <li>TailwindCSS</li>
                      <li>ExpressJs (Basics)</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className={`${collapse.experience ? 'block' : 'hidden'}`}>
                {experiences &&
                  experiences.length > 0 &&
                  experiences.map((experience) => (
                    <div className="mb-4" key={experience.id}>
                      <h3 className="text-lg lg:text-xl font-medium mb-0">
                        {experience.title}
                        <span className="text-sm text-gray-500 ml-2">
                          {experience.position}
                        </span>
                      </h3>
                      <p className="text-base font-normal lg:font-medium text-gray-300 mb-0">
                        {experience.company}
                      </p>
                      <p className="text-sm text-gray-300 mb-0">
                        {experience.companyLocation}
                      </p>
                      <span className="text-sm text-gray-500">
                        {experience.startDate.toLocaleDateString()}
                        {experience.endDate !== null
                          ? ` - ${experience.endDate.toLocaleDateString()}`
                          : ' - present'}
                      </span>
                    </div>
                  ))}
              </div>
              <div className={`${collapse.education ? 'block' : 'hidden'}`}>
                <div className="mb-4">
                  <h3 className="text-lg lg:text-xl font-medium mb-0">
                    Associate in Computer System and Network Technology
                  </h3>
                  <p className="text-base font-normal lg:font-medium text-gray-300 mb-0">
                    AMA Computer Learning Center
                  </p>
                  <p className="text-sm text-gray-300 mb-0">
                    Tarlac City, Tarlac
                  </p>
                  <span className="text-sm text-gray-500">2006-2008</span>
                </div>
                <div>
                  <h3 className="text-lg lg:text-xl font-medium mb-0">
                    Electronics
                  </h3>
                  <p className="text-base font-normal lg:font-medium text-gray-300 mb-0">
                    Lorraine Technical School
                  </p>
                  <p className="text-sm text-gray-300 mb-0">
                    Angeles City, Pampanga
                  </p>
                  <span className="text-sm text-gray-500">2005-2006</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default About
