import React, { FC, PropsWithChildren } from 'react'

type Props = {}

const AccordionHeader:FC<PropsWithChildren> = ({ children }) => {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
      {children}
    </div>
  )
}

export default AccordionHeader