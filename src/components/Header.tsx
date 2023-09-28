import { useState } from 'react'
import { Link } from 'react-scroll'

type HeaderLink = { id: number; name: string }
type HeaderLinks = HeaderLink[]

const headerLinks: HeaderLinks = [
  { id: 0, name: 'Home' },
  { id: 1, name: 'About' },
  { id: 2, name: 'Portfolio' },
  { id: 3, name: 'Contact' },
]

function Header(): JSX.Element {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)

  return (
    <header className="bg-transparent py-6 md:py-8">
      <div className="max-w-[1440px] mx-auto px-4">
        <div className="flex flex-row items-center justify-between">
          <div>
            <p className="font-heading text-3xl md:text-4xl xl:text-5xl font-bold text-white first-letter:text-red-600">
              Alex.
            </p>
          </div>
          <div
            className={`w-full lg:w-auto absolute lg:static bg-black lg:bg-transparent p-4 pb-0 lg:pb-4 top-20 transition-all delay-300 ease-in-out ${
              isMenuOpen ? 'left-0' : '-left-full'
            }`}
          >
            {headerLinks?.length > 0 ? (
              <ul className="flex flex-col lg:flex-row items-start lg:items-center justify-start space-y-3 lg:space-y-0 space-x-0 lg:space-x-10 font-body text-base md:text-lg xl:text-xl text-white">
                {headerLinks.map((link) => (
                  <li
                    className="w-full pb-1 lg:pb-0 border-b border-gray-600 lg:border-b-0"
                    key={link.id}
                  >
                    <Link
                      onClick={() => setIsMenuOpen(!isMenuOpen)}
                      className="cursor-pointer"
                      to={link.name.toLowerCase()}
                      smooth={true}
                      duration={500}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-sm text-white">
                Please define links for header.
              </p>
            )}
          </div>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`flex lg:hidden burger ${isMenuOpen ? 'show' : ''}`}
            type="button"
          >
            <div className="strip burger-strip">
              <div></div>
              <div></div>
              <div></div>
            </div>
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header
