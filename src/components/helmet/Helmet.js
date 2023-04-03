import React from 'react'

export const Helmet = ({ title, children }) => {
  document.title = "Glamour's gold-" + title
  return (
    <div className="w-100">{children}</div>
  )
}
