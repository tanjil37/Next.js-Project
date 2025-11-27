import React from 'react'

export default function MyContainer({className, children}) {
  return (
   <div className={`${className} container mx-auto`}>{children}</div>
  )
}
