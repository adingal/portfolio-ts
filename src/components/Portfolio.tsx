import React, { useState } from 'react'
import Container from '../atoms/Container'
import externalLinkIcon from '../assets/images/external-link.png'

function Portfolio() {
  const [hover, setHover] = useState<boolean>(false)

  return (
    <Container sectionID="portfolio">
      <div className="max-w-[1440px] mx-auto px-4">
        <h2 className="text-2xl md:text-3xl xl:text6xl font-heading font-bold text-center mb-2 md:mb-3 lg:mb-4 xl:mb-6 text-white">
          Portfolio
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
          <div
            onMouseEnter={() => setHover(!hover)}
            onMouseLeave={() => setHover(!hover)}
            className="card text-white relative overflow-hidden border-2 border-white cursor-pointer"
          >
            <img
              className="max-w-full w-full md:w-auto"
              src="https://www.dummyimage.com/340"
              alt=""
            />
            <div
              className={`w-full h-1/2 bg-red-600 absolute border-t-2 border-white ${
                hover ? 'bottom-0 opacity-100' : '-bottom-full opacity-0'
              } transition-all delay-300 ease-in-out p-4`}
            >
              <h2 className="text-base lg:text-lg font-medium mb-2 lg:mb-4">
                Title
              </h2>
              <p className="text-sm text-gray-200 mb-4 lg:mb-6">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor,
                explicabo?
              </p>
              <a
                onClick={(e) => {
                  e.preventDefault()
                  console.log('External')
                }}
                href="#"
                className="cursor-pointer"
              >
                <img
                  className="max-w-[20px] block mx-auto filter invert"
                  src={externalLinkIcon}
                  alt="External link"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default Portfolio
