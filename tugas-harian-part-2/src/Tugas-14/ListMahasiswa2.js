import {useEffect, useContext} from "react"
import axios from "axios"
import {MahasiswaContext} from "../Tugas-13/MahasiswaContext"
import { useHistory } from "react-router-dom"

const Tugas12 = () => {

  let history = useHistory();
  const {dataMahasiswa, setDataMahasiswa,fetch, setFetch,crud} = useContext(MahasiswaContext)

  const {perbaruiData2, hapusData, iNilai} =  crud

  useEffect(() => {

    const getData = async() => {
      try{
        await axios.get(`http://backendexample.sanbercloud.com/api/student-scores`)
        .then((res) => {
          setDataMahasiswa([...res.data])
        })
      } catch (err) {
        console.log(err)
      }
    }

    if(fetch) {
      getData()
      setFetch(false)
    }
    
  }, [fetch, setFetch], [dataMahasiswa, setDataMahasiswa])

  function gotToForm() {
    history.push("/tugas14/tambah");
  }

  return (
    <div style={{width: "100%",margin: "0 auto"}}>
      <h1 className="titleCenter">Daftar Nilai Mahasiswa</h1>
      <button className="btn14" onClick={gotToForm}>Tambah Data Mahasiswa</button>
      <table className="customers f14">
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
                        <button className="button" value={index} onClick={perbaruiData2}>Edit</button>
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
      
    </div>
  )
}

export default Tugas12