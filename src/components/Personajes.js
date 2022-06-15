import React from 'react'

export const Personajes = ({texto}) => {
  return (
    <div>{texto} {process.env.REACT_APP_WEBSITE_NAME}</div>
  )
}
