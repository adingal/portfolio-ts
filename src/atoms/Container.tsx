import React from 'react'

type ContainerProps = {
  sectionID: string
}

function Container({
  children,
  sectionID,
}: React.PropsWithChildren<ContainerProps>): JSX.Element {
  return (
    <section id={sectionID} className="bg-transparent py-10 md:py-16 xl:py-20">
      {children}
    </section>
  )
}

export default Container
