import react, {useState, useEffect} from "react"

const Tugas12 = () => {

  var daftarBuah = [
    {
      nama: "Nanas",
      hargaTotal: 100000,
      beratTotal: 4000
    }, {
      nama: "Manggis",
      hargaTotal: 350000,
      beratTotal: 10000
    }, {
      nama: "Nangka",
      hargaTotal: 90000,
      beratTotal: 2000
    }, {
      nama: "Durian",
      hargaTotal: 400000,
      beratTotal: 5000
    }, {
      nama: "Strawberry",
      hargaTotal: 120000,
      beratTotal: 6000
    }
  ]

  const [dataBuah, setDataBuah] = useState(daftarBuah)

  const [input, setInput] = useState({
    nama: "",
    hargaTotal: 0,
    beratTotal: 0
})

  const [dataIndex, setDataIndex] = useState(-1)

  const isiData = (e) => {
    let nama = e.target.nama.value
    let hargaTotal = e.target.hargaTotal.value
    let beratTotal = e.target.beratTotal.value
    
    if(dataIndex === -1) {
      let dataBaru = [...dataBuah, {nama, hargaTotal, beratTotal}]

      setDataBuah(dataBaru)
    } else {
      let dataBaru = dataBuah
      dataBaru[dataIndex] = {nama:nama, hargaTotal:hargaTotal, beratTotal:beratTotal}
    }
    clearForm()
    setDataIndex(-1)
    e.preventDefault()
  }

  const editData = (e) => {
    let index = parseInt(e.target.value)
    let isi = dataBuah[index]

    setInput({nama: isi.nama, hargaTotal: isi.hargaTotal, beratTotal: isi.beratTotal})
    setDataIndex(index)
    
  }

  const hapusData = (e) => {
    let index = parseInt(e.target.value)
    let dihapus = dataBuah
    dihapus.splice(index, 1)
    setDataBuah([...dihapus])
  }

  const handleChange = (event) => {
        let typeOfValue = event.target.value
        let name = event.target.name

        setInput({...input, [name] : typeOfValue})
    }

  const clearForm = () => {
    let form = {
      nama: "",
      hargaTotal:0,
      beratTotal:0
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
            <th>Matakuliah</th>
            <th>Nilai</th>
            <th>Indeks Nilai</th>
            <th>Aksi</th>
          </tr>
        </thead>

        <tbody>
          {dataBuah.length > 1
            ? (dataBuah.map((data, index) => {
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{data.nama}</td>
                  <td>{data.hargaTotal}</td>
                  <td>{data.beratTotal / 1000} Kg</td>
                  <td>{data.hargaTotal / (data.beratTotal / 1000)}</td>
                  <td>
                    <button className="button" value={index} onClick={editData}>Edit</button>
                    <button className="button del" value={index} onClick={hapusData}>Hapus</button>
                  </td>
                </tr>
              )
            }))
            : <p className="titleCenter">Data Kosong</p>
}
        </tbody>
      </table>
      <br/>
      <br/>
      <h1 className="titleCenter">Form Daftar Harga Buah</h1>
      <div className="formData">
        <form onSubmit={isiData}>
          <label htmlFor="nama">Nama</label>
          <input type="text" id="nama" name="nama" placeholder="Nama Buah" onChange={handleChange} value={input.nama} required/>

          <label htmlFor="hargaTotal">Harga Total</label>
          <input type="number" id="hargaTotal" name="hargaTotal" placeholder="Harga Buah" onChange={handleChange} value={input.hargaTotal} required/>

          <label htmlFor="beratTotal">Berat Total (dalam gram)</label>
          <input type="number" id="beratTotal" name="beratTotal" placeholder="Berat Buah" onChange={handleChange} value={input.beratTotal} required/>

          <input type="submit" value="Submit"/>
        </form>
      </div>
    </div>
  )
}

export default Tugas12