import React from 'react'

function Footer() {
  return (
    <footer className="bg-red-600">
      <div className="max-w-[1440px] mx-auto px-4 py-2">
        <p className="text-sm md:text-base text-right text-white">
          adingal &copy; {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  )
}

export default Footer
