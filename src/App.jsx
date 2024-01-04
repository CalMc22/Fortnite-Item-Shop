import { useState } from 'react'
import { useEffect } from 'react'
import './App.css'

function App() {
  {

    let [fnmap, setFnmap] = useState({})

    async function getData() {
      try {
        let promise = await fetch('https://fortnite-api.com/v1/map')
        let data = await promise.json()
        setFnmap(data)
        console.log(fnmap)
      } catch {
        console.log(error)
      }

    }
    useEffect(() => {
      getData()
    }, [])

  }





  return (
    <>
      <div>
        {/* {fnmap.data.images.pois} */}
      </div>
    </>
  )
}

export default App
