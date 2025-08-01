import React from 'react'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: "ToolexUAE - Cart",
    description: "Your shopping cart for professional equipment and tools",
}

const layout = ({children}: {children: React.ReactNode}) => {
  return (
    <>
      {children}
    </>
  )
}

export default layout
