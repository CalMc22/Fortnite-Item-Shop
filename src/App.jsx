import { useState } from 'react'
import { useEffect } from 'react'
import './App.css'

function App() {

  let [fnshop, setFnshop] = useState(null)

  useEffect(() => {
    async function getData() {
      try {
        let promise = await fetch('https://fortnite-api.com/v2/shop/br')
        let data = await promise.json()
        setFnshop(data)
      } catch {
        console.log(error)
      }

    }

    getData()
  }, [])

  console.log(fnshop)

  let shopFeaturedItemArray = fnshop ? fnshop.data.featured.entries : null

  console.log(shopFeaturedItemArray)



  return (
    <div className='container'>
      {fnshop ?
        <div>
          <h1 className='title'>
            <img src={fnshop.data.vbuckIcon} height={25} />
            Fortnite Item Shop as of {fnshop.data.date}
            <img src={fnshop.data.vbuckIcon} height={25} />
          </h1>
          <h2 className='shopTab'>FEATURED</h2>
          <div className='shop'>
            {shopFeaturedItemArray.map((entries, index) => (
              <img className='shopEntry' key={index} src={entries.items[0].images.featured || entries.items[0].images.icon} />
              ))}
          </div>
          {/* <h3 className='shopTab'>BUNDLES</h3> */}
              {/* <div className='shop'>
                {shopFeaturedItemArray.map((entries, index) => (
                  <img className='shopEntry' key={index} src={entries.bundle.image} />
                ))}
              </div> */}
        </div>
        :
        null

      }
    </div>
  )
}

export default App
