import {useContext, useEffect} from 'react'
import { AppContext } from '../Context/AppContext'
import Card from '../components/Card'
import axios from 'axios'

const Feed = () => {

    const {appData, setAppData, fetch, setFetch} = useContext(AppContext)

    useEffect(() =>{
        
        const getData = async() => {
            await axios.get(`http://backendexample.sanbercloud.com/api/mobile-apps`).then((res) => {
                setAppData(res.data)
                console.log(res.data)
            })
        }
        if(fetch) {
            getData()
            setFetch(false)
        }
    })
    return (
        <>
        {appData ? appData.map((arr, idx) => {
            return(
                <Card 
                name={arr.name} 
                year={arr.release_year} 
                price={arr.price} 
                rating={arr.rating}
                gambar={arr.image_url}
                size={arr.size}
                desc={arr.description}
                />
            )
        }) : <h1>Data Kosong</h1> }
        </>
    )
}

export default Feed