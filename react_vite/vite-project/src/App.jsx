import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import RecordView from './RecordView'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <video  controls>
    <source src="https://vite-project-iuznlpjwr-prashantrathour.vercel.app/084b8c01-1108-46cd-8616-e9dcc2bdc5d6" type="video/mp4"/>
    </video>
      {/* <RecordView/> */}
    </>
  )
}

export default App
