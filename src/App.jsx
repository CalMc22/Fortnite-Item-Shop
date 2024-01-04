import { useState } from 'react'
import { useEffect } from 'react'
import './App.css'

function App(){ {
  
  let [value, setValue] = useState({})

  async function getData() {
  let promise = await fetch ('https://fortnite-api.com/v1/map')
  let data = await promise.json()
  setValue(data)
  console.log(value)
}
useEffect (() => {
  getData()
  } , [])

}





  return (
    <>
          <div>
            hi
          </div>
    </>
  )
  }

export default App
