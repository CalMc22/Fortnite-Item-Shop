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
      {fnshop ?
        <div>
          <h1>
            <img src={fnshop.data.vbuckIcon} height={25} />
            Fortnite Item Shop as of {fnshop.data.date}
            <img src={fnshop.data.vbuckIcon} height={25} />
          </h1>

          <div>
            <img src={fnshop.data.featured.entries[0].items[0].images.icon} height={200} />
            <img src={fnshop.data.featured.entries[1].items[0].images.icon} height={200} />
            <img src={fnshop.data.featured.entries[2].items[0].images.icon} height={200} />
          </div>
        </div>
        :
        null

      }
    </>
  )
}

export default App
