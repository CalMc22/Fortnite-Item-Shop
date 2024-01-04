import { useState } from 'react'
import { useEffect } from 'react'
import './App.css'

function App() {

  let [fnshop, setFnshop] = useState(null)

  async function getData() {
    try {
      let promise = await fetch('https://fortnite-api.com/v2/shop/br')
      let data = await promise.json()
      setFnshop(data)
    } catch {
      console.log(error)
    }

  }

  useEffect(() => {
    getData()
  }, [])

  console.log(fnshop)





  return (
    <>
      { fnshop ?
      <div>
        {fnshop.data.featured.entries[0].bundle.image}
      </div>
    :
    null
}
    </>
  )
}

export default App
