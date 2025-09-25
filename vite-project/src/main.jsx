import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import React from 'react'


import App from './App.jsx'

function MyApp(){
  return(
    <div>
      <h1>Custom App !</h1>
    </div>
  )
}
/*
const ReactElement = {
    type: "a",
    props: {
        href: "https://www.google.com",
        target: "_blank"
    },
    children: " Click Me to visit google"
}
*/

const anotherElement = (
  <a href='http://google.com' target= "_blank">Click Me to visit google</a>
)

const anotherUser = "chai aur react"

const reactElement = React.createElement(
     'a',
     {
      href: 'https://google.com', target: '_blank'
     },
     "Click Me to visit google ",
     anotherUser
)

createRoot(document.getElementById('root')).render(

    reactElement

)
