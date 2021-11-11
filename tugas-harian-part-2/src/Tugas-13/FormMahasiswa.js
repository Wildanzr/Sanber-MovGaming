import {useState, useEffect, useContext} from 'react'
import {MahasiswaContext} from "./MahasiswaContext"
import axios from 'axios'

const FormMahasiswa = () => {

    const {input,crud} = useContext(MahasiswaContext)
    const {tambahData, handleChange} = crud

    return (
        <>
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
        </>
    )
}

export default FormMahasiswa