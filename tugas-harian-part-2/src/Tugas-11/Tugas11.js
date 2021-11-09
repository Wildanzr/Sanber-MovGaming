import react, {useState, useEffect} from "react"

const Tugas11 = () => {

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
  const [temp, setTemp] = useState({
    nama: "",
    hargaTotal:1,
    beratTotal:1
  })

  const isiData = (e) => {
      let nama = e.target.nama.value
      let hargaTotal = e.target.hargaTotal.value
      let beratTotal = e.target.beratTotal.value
      let dataBaru = [...dataBuah, {nama, hargaTotal, beratTotal}]

      setDataBuah(dataBaru)

    e.preventDefault()
  }

  const editData = (e) => {
    let index = parseInt(e.target.value)
    let isi = dataBuah[index]
    
    let edit = {nama: isi.nama, hargaTotal: isi.hargaTotal, beratTotal: isi.beratTotal}
    setTemp(edit)
    console.log(edit)
    
    e.preventDefault()
  }

  const hapusData = (e) => {
    let index = parseInt(e.target.value)
    let dihapus = dataBuah
    dihapus.splice(index, 1)
    console.log("Dihapus", dihapus)
    setDataBuah(dihapus)

    e.preventDefault()
  }

  return (
    <div style={{width: "100%",margin: "0 auto"}}>
      <h1 style={{textAlign: "center",margin: "0 auto"}}>Daftar Harga Buah</h1>
      <table className="customers">
        <thead>
          <tr>
            <th>No</th>
            <th>Nama</th>
            <th>Harga Total</th>
            <th>Berat Total</th>
            <th>Harga per kg</th>
            <th>Aksi</th>
          </tr>
        </thead>

        <tbody>
          {dataBuah
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
            : <h1>Data Kosong</h1>
}
        </tbody>
      </table>
      <br/>
      <br/>
      <h1 style={{textAlign: "center",margin: "0 auto"}}>Form Daftar Harga Buah</h1>
      <div className="formData">
        <form onSubmit={isiData}>
          <label htmlFor="nama">Nama</label>
          <input type="text" id="nama" name="nama" placeholder="Nama Buah" defaultValue={temp.nama} required/>

          <label htmlFor="hargaTotal">Harga Total</label>
          <input type="number" id="hargaTotal" name="hargaTotal" placeholder="Harga Buah" defaultValue={temp.hargaTotal} required/>

          <label htmlFor="beratTotal">Berat Total (dalam gram)</label>
          <input type="number" id="beratTotal" name="beratTotal" placeholder="Berat Buah" defaultValue={temp.beratTotal} required/>

          <input type="submit" value="Submit"/>
        </form>
      </div>
    </div>
  )
}

export default Tugas11