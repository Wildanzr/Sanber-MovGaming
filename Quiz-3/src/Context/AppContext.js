import {useState, createContext} from 'react'
import { useHistory } from "react-router-dom"
import axios from 'axios'

export const AppContext = createContext()

export const AppProvider = props => {
    const [appData, setAppData] = useState([])
    const [dataIndex, setDataIndex] = useState(-1)
    const [fetch, setFetch] = useState(true)
    const [input, setInput] = useState({
        name: "",
        description: "",
        category: "",
        release_year: 2007,
        size: 0,
        price: 0,
        rating: 1,
        image_url: "",
        is_android_app: true,
        is_ios_app: true
    })
    let history = useHistory()

    const tambahData = (e) => {
        e.preventDefault()
        console.log("YEe")
        const tambahan = {
            name: e.target.name.value,
            description: e.target.description.value,
            category: e.target.category.value,
            release_year: e.target.release_year.value,
            size: e.target.size.value,
            price: e.target.price.value,
            rating: e.target.rating.value,
            image_url: e.target.image_url.value,
            is_android_app: true,
            is_ios_app: true
        }
        console.log(tambahan)

        if (dataIndex === -1) {
          axios.post(`http://backendexample.sanbercloud.com/api/mobile-apps`, tambahan).then((res) => {
            setFetch(true)
          })
        } else {
          axios.put(`ttp://backendexample.sanbercloud.com/api/mobile-apps/${dataIndex}`, tambahan).then((res) => {
            setFetch(true)
          })
        }
        history.push("/mobile-list")
        clearForm()
        setDataIndex(-1)

      }

      const editData = async(e) => {
        let data = await appData[e.target.value]
        setId(data)
        let temp = {
            name: data.name,
            description: data.description,
            category: data.category,
            release_year: data.release_year,
            size: data.size,
            price: data.price,
            rating: data.rating,
            image_url: data.image_url,
            is_android_app: true,
            is_ios_app: true,
        }
        setInput(temp)
        history.push("/tugas14/tambah")
      }

      const setId = (data) => {
          console.log(data)
          setDataIndex(data.id)
      }

      const hapusData =(e) => {
        // let dataId = appData[parseInt(e.target.value)]
        // console.log(e.target)
        // axios.delete(`http://backendexample.sanbercloud.com/api/student-scores/${dataId}`)
        // .then((res) => {
        //   setFetch(true)
        // })
      }

      const clearForm = () => {
        let form = {
            name: "",
            description: "",
            category: "",
            release_year: 2007,
            size: 0,
            price: 0,
            rating: 1,
            image_url: "",
            is_android_app: true,
            is_ios_app: true
        }
        setInput(form)
      }

    const handleChange = (event) => {
        let typeOfValue = event.target.value
        let name = event.target.name

        setInput({...input, [name] : typeOfValue})
    }

    return (
        <AppContext.Provider value={{
            appData, setAppData, fetch, setFetch, handleChange, input, 
            setInput, tambahData, history, editData, hapusData
        }}>
            {props.children}
        </AppContext.Provider>
    )
}