import { useState } from 'react'
import { useEffect } from 'react'
import './App.css'

function App() {

  let [fnshop, setFnshop] = useState(null)

  useEffect(() => {
    async function getData() {
      try {
        let promise = await fetch('https://fortnite-api.com/v2/shop/br/combined')
        let data = await promise.json()
        setFnshop(data)
      } catch {
        console.log(error)
      }

    }

    getData()
  }, [])

  console.log(fnshop)

  // checks if fnshop exists, if so, set variable to entries array. If not, return null
  let shopFeaturedItemArray = fnshop ? fnshop.data.featured.entries : null


  // console logs for testing targeting the api
  if (fnshop) {
    console.log('Featured below')
    console.log(shopFeaturedItemArray)

    console.log('Bundles below')
    shopFeaturedItemArray.map((entries, index) => (
      console.log(entries[index])
    ))
    // console.log(shopFeaturedItemArray[0].bundle.image)
  } else {
    console.log('If statement failed')
  }



  return (
    <div className='container'>
      {/* check if fnshop exists, if so, render the following */}
      {fnshop ?
        <div>
          <h1 className='title'>
            <img className='vbuckIcon' src={fnshop.data.vbuckIcon} />
            {/* targets the current shop date */}
            Fortnite Item Shop as of {fnshop.data.date}
            <img className='vbuckIcon'src={fnshop.data.vbuckIcon} />
          </h1>
          <h2 className='shopTab'>FEATURED COSMETICS</h2>
          <div className='shop'>
            {/* maps over the shopFeaturedItemArray variable and renders each shop entry icon */}
            {shopFeaturedItemArray.map((entries, index) => (
              <img className='shopEntry' key={index} src={entries.items[0].images.icon} />
            ))}
          </div>
          <h3 className='shopTab'>BUNDLES</h3>
          <div className='shop'>
            {/* {shopFeaturedItemArray.map((entries, index) => (
                  <img className='shopEntry' key={index + 1000} src={entries[0].bundle.image || null} />
                ))} */}
          </div>
        </div>
        // if fnshop DOES NOT exist, render loading div
        :
        <div className='loading'>Loading...</div>

      }
    </div>
  )
}

export default App
