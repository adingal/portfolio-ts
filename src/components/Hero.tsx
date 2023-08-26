import Container from '../atoms/Container'
import heroImage from '../assets/images/hero-image.svg'

function Hero(): JSX.Element {
  const firstName: string[] = ['A', 'l', 'e', 'x']

  return (
    <Container sectionID="home">
      <div className="max-w-[1440px] mx-auto px-4">
        <div className="flex flex-col-reverse md:flex-row items-center justify-center">
          <div className="w-full md:w-1/2 flex flex-col items-center md:items-start justify-center space-y-2 text-white">
            <h2 className="text-sm md:text-base xl:text-lg text-gray-300">
              Frontend Developer
            </h2>
            <h1 className="flex flex-row text-4xl md:text-5xl xl:text-8xl font-heading font-bold">
              <span>Hi, I'm</span>
              {firstName?.length > 0 ? (
                <ul className="hero-name flex flex-row ml-2 md:ml-3 lg:ml-4 xl:ml-6">
                  {firstName.map((letter, idx) => {
                    if (idx === 0) {
                      return (
                        <li key={letter}>
                          <input
                            onChange={(): void => {}}
                            className="w-full max-w-full h-full"
                            type="checkbox"
                            checked
                          />
                          <div>{letter}</div>
                        </li>
                      )
                    }
                    return (
                      <li key={letter}>
                        <input
                          onChange={(): void => {}}
                          className="w-full max-w-full h-full"
                          type="checkbox"
                        />
                        <div>{letter}</div>
                      </li>
                    )
                  })}
                </ul>
              ) : (
                <p className="text-sm text-white">Please define your name.</p>
              )}
            </h1>

            <p className="text-base md:text-lg xl:text-xl">
              A career shifter from the Philippines
            </p>
          </div>
          <div className="w-full md:w-1/2 text-center mb-4 md:mb-0">
            <img
              className="max-w-full w-full h-auto"
              src={heroImage}
              alt="Hero"
            />
          </div>
        </div>
      </div>
    </Container>
  )
}

export default Hero
