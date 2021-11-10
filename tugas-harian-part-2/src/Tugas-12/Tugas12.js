import {useState, useEffect} from "react"
import axios from "axios"

const Tugas12 = () => {

  const [dataMahasiswa, setDataMahasiswa] = useState([])

  const [input, setInput] = useState({
    nama: "",
    mataKuliah: "",
    nilai: 0
  })
  const [fetch, setFetch] = useState(true)
  const [dataIndex, setDataIndex] = useState(-1)

  useEffect(() => {

    const getData = async() => {
      let result = await axios.get(`http://backendexample.sanbercloud.com/api/student-scores`)
      
      setDataMahasiswa([...result.data])
    }

    if(fetch) {
      getData()
      setFetch(false)
    }
    
  }, [fetch, setFetch], [dataMahasiswa, setDataMahasiswa])

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
  const handleChange = (event) => {
        let typeOfValue = event.target.value
        let name = event.target.name

        setInput({...input, [name] : typeOfValue})
    }

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
      })
    } else {
      axios.put(`http://backendexample.sanbercloud.com/api/student-scores/${dataIndex}`, {
        name: namaMhs,
        course: mk,
        score: nilai
      }).then((res) => {
        setFetch(true)
      })
    }
    clearForm()
    setDataIndex(-1)
    e.preventDefault()
  }

  const perbaruiData = (e) => {
    let data = dataMahasiswa[e.target.value]
    let temp = {
      nama: data.name,
      mataKuliah: data.course,
      nilai: data.score
    }
    setInput(temp)
    setDataIndex(data.id)
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
  return (
    <div style={{width: "100%",margin: "0 auto"}}>
      <h1 className="titleCenter">Daftar Nilai Mahasiswa</h1>
      <table className="customers">
        <thead>
          <tr>
            <th>No</th>
            <th>Nama</th>
            <th>Mata Kuliah</th>
            <th>Nilai</th>
            <th>Indeks Nilai</th>
            <th>Aksi</th>
          </tr>
        </thead>
        <tbody>
          {
            dataMahasiswa.length > 0 ? (
              dataMahasiswa.map((data, index) => {
                return(
                  <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{data.name}</td>
                      <td>{data.course}</td>
                      <td>{data.score}</td>
                      <td className="tdCenter">{iNilai(data.score)}</td>
                      <td className="tdCenter">
                        <button className="button" value={index} onClick={perbaruiData}>Edit</button>
                        <button className="button del" value={index} onClick={hapusData}>Hapus</button>
                    </td>
                  </tr>

                )
              })
            ) : <tr key="-1">
                  <td colSpan={6} className="titleCenter">Loading data...</td>
                </tr>
          }
        </tbody>
      </table>
      <br/>
      <br/>
      <h1 className="titleCenter">Form Nilai Mahasiswa</h1>
      <div className="formData" onSubmit={tambahData}>
        <form>
          <label htmlFor="nama">Nama</label>
          <input type="text" id="nama" name="nama" placeholder="Nama Mahasiswa" onChange={handleChange} value={input.nama} required/>

          <label htmlFor="mataKuliah">Mata Kuliah</label>
          <input type="text" id="mataKuliah" name="mataKuliah" placeholder="Mata Kuliah" onChange={handleChange} value={input.mataKuliah} required/>

          <label htmlFor="nilai">Nilai</label>
          <input type="number" id="nilai" name="nilai" onChange={handleChange} value={input.nilai} min={0} max={100} step={1} required/>

          <input type="submit" value="Submit"/>
        </form>
      </div>
    </div>
  )
}

export default Tugas12