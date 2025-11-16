// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
import {getColorPalette} from './utils.tsx/colorPaletteUtils'
import frog from './frog.jpeg'
import './App.css'

let palette = getColorPalette("frog")

function App() {
  // const [colorPalette, getColorPalette()] = useState(0)

  return (
    <>
      <div>
        <h6>{palette}</h6>
        <img id="frog" src={frog} alt="frog"></img>
        <h1>Hello World</h1>
      </div>
    </>
  )
}

export default App
