import {createContext, useState} from "react"
import { useHistory } from "react-router-dom"
import axios from "axios"

export const MahasiswaContext = createContext()

export const MahasiswaProvider = props => {

    let history = useHistory()
    const [dataMahasiswa, setDataMahasiswa] = useState([])

    const [input, setInput] = useState({
      nama: "",
      mataKuliah: "",
      nilai: 0
    })

    const [fetch, setFetch] = useState(true)
    const [dataIndex, setDataIndex] = useState(-1)

    const tambahData = (e) => {
        let namaMhs = e.target.nama.value
        let mk = e.target.mataKuliah.value
        let nilai = e.target.nilai.value
    
        if (dataIndex === -1) {
          axios.post(`http://backendexample.sanbercloud.com/api/student-scores`, {
            name: namaMhs,
            course: mk,
            score: nilai
          }).then((res) => {
            setFetch(true)
            history.push("/tugas14")
          })
        } else {
          axios.put(`http://backendexample.sanbercloud.com/api/student-scores/${dataIndex}`, {
            name: namaMhs,
            course: mk,
            score: nilai
          }).then((res) => {
            setFetch(true)
            history.push("/tugas14")
          })
        }
        clearForm()
        setDataIndex(-1)
        e.preventDefault()
      }

    const perbaruiData = async(e) => {
        let data = await dataMahasiswa[e.target.value]
        setId(data)
        let temp = {
          nama: data.name,
          mataKuliah: data.course,
          nilai: data.score
        }
        setInput(temp)
      }
    const perbaruiData2 = async(e) => {
        let data = await dataMahasiswa[e.target.value]
        setId(data)
        let temp = {
          nama: data.name,
          mataKuliah: data.course,
          nilai: data.score
        }
        setInput(temp)
        history.push("/tugas14/tambah")
      }

      const setId = (data) => {
          console.log(data)
          setDataIndex(data.id)
      }

      const iNilai = (n) => {
        if(n >= 80)
          return "A"
        else if(n >= 70 && n < 80)
          return "B"
        else if(n >= 60 && n < 70)
          return "C"
        else if(n >= 50 && n < 60)
          return "D"
        else 
          return "E"
      }
    
      const hapusData =(e) => {
        let dataId = dataMahasiswa[parseInt(e.target.value)].id
    
        axios.delete(`http://backendexample.sanbercloud.com/api/student-scores/${dataId}`)
        .then((res) => {
          setFetch(true)
        })
      }
    
      const clearForm = () => {
        let form = {
          nama: "",
          mataKuliah: "",
          nilai:0
        }
        setInput(form)
      }

      const handleChange = (event) => {
        let typeOfValue = event.target.value
        let name = event.target.name

        setInput({...input, [name] : typeOfValue})
    }

    let crud = {
        tambahData,
        perbaruiData,
        perbaruiData2,
        hapusData,
        iNilai,
        clearForm,
        handleChange
    } 

    return (
        <MahasiswaContext.Provider value={{
            dataMahasiswa, setDataMahasiswa,
            input, setInput,
            fetch, setFetch,
            dataIndex, setDataIndex,
            crud
            }}>
            {props.children}
        </MahasiswaContext.Provider>
    )
}