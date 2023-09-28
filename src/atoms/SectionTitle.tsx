import React from 'react'

type SectionTitleProps = {
  title: string
}

function SectionTitle(props: SectionTitleProps) {
  return (
    <h2
      className={`text-2xl md:text-3xl xl:text-6xl font-heading font-bold mb-3 md:mb-4 lg:mb-6 text-white text-center md:text-left`}
    >
      {props.title}
    </h2>
  )
}

export default SectionTitle
