import { useState } from 'react'
import { useEffect } from 'react'
import './App.css'


function App() {


    let [fnshop, setfnshop] = useState(null)

    useEffect(() => {
        async function getData() {
            try {
                let promise = await fetch('https://fortnite-api.com/v2/shop')
                let data = await promise.json()
                setfnshop(data)
            } catch {
                console.log(error)
            }
        }
        getData()
    }, [])


    // checks if fnshop exists, if so, set variable to entries array. If not, return null
    let shopFeaturedItemArray = fnshop ? fnshop.data.entries : null


    // console logs for testing targeting the api

    console.log(fnshop)

    if (fnshop) {
        console.log('Featured below')
        console.log(shopFeaturedItemArray)

        console.log('fnshop below')
        console.log(fnshop)

        console.log('vbuck Icon below')
        console.log(fnshop.data.vbuckIcon)

        console.log('fnshop.data.entries below')
        console.log(fnshop.data.entries[1 + 300])


        // console.log('Bundles below')
        // shopFeaturedItemArray.map((entries, index) => (
        //   console.log(entries.bundle)
        // ))
        // console.log(shopFeaturedItemArray[0].bundle.image)
    } else {
        console.log('If statement failed')
    }


    
// <h3 className='shopTab'>LEGO STYLES</h3>
//                         <div className='shop'>
//                             {/* maps over the shopFeaturedItemArray variable, checks in lego exists, if so, renders each shop entry small lego icon */}
//                             {shopFeaturedItemArray.map((entries, index) => (
//                                 <img className='shopEntry' key={index + 1000}
//                                     src={entries.items[0].images.lego
//                                         ? entries.items[0].images.lego.small
//                                         : entries.items[0].images.lego} />
//                             ))}
//                         </div>


    return (
        <>
            <div className='container'>
                {/* check if fnshop exists, if so, render the following */}
                {fnshop ?
                    <div>
                        <h1 className='title'>
                            <img className='vbuckIcon' src={fnshop.data.vbuckIcon} />
                            {/* targets the current shop date */}
                            Fortnite Item Shop as of {fnshop.data.date}
                            <img className='vbuckIcon' src={fnshop.data.vbuckIcon} />
                        </h1>
                        <h2 className='shopTab'>FEATURED COSMETICS</h2>
                        <div className='shop'>
                            {/* maps over the shopFeaturedItemArray variable and renders each shop entry icon */}
                            {shopFeaturedItemArray.map((entries, index) => (
                                <div className='shopEntry' key={index} src={entries[index]} />
                            ))}
                        </div>
                    </div>
                    // if fnshop DOES NOT exist, render loading div
                    : <div className='loading'>Loading...</div>
                }
            </div>
        </>
    );
}

export default App;
