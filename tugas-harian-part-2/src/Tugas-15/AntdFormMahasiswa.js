import {useContext} from 'react'
import {MahasiswaContext} from "../Tugas-13/MahasiswaContext"

const AntdFormMahasiswa = () => {

    const {input,crud} = useContext(MahasiswaContext)
    const {tambahData2, handleChange} = crud

    return (
        <>
        <h1 className="titleCenter">Form Nilai Mahasiswa</h1>
        <div className="formData" onSubmit={tambahData2}>
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
        </>
    )
}

export default AntdFormMahasiswa