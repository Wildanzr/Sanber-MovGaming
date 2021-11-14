import {useContext} from 'react'
import {AppContext} from "../Context/AppContext"

const FormApps = () => {

    const {input, handleChange, tambahData} = useContext(AppContext)
    return (
        <>
        <h1 className="titleCenter">Form Game/Aplikasi</h1>
        <div className="formData" onSubmit={tambahData}>
            <form>
            <label htmlFor="name">Nama</label>
            <input className="iniform" type="text" id="name" name="name" placeholder="Nama game/aplikasi" onChange={handleChange} value={input.name} required/>

            <label htmlFor="description">Description</label>
            <textarea className="iniform" type="text" id="description" name="description" placeholder="Deskripsi game/aplikasi" onChange={handleChange} value={input.description} required/>

            <label htmlFor="category">Kategori</label>
            <input className="iniform" type="text" id="category" name="category" placeholder="Kategori game/aplikasi" onChange={handleChange} value={input.category} required/>

            <label htmlFor="release_year">Release Year</label>
            <input className="iniform" type="number" id="release_year" name="release_year"  onChange={handleChange}  min={2007} max={2021} step={1} value={input.release_year} required/>

            <label htmlFor="size">Size</label>
            <input className="iniform" type="number" id="size" name="size"  onChange={handleChange} step={1} value={input.size} required/>
            
            <label htmlFor="price">Price</label>
            <input className="iniform" type="number" id="price" name="price"  onChange={handleChange} step={1} value={input.price} required/>

            <label htmlFor="rating">Rating</label>
            <input className="iniform" type="number" id="rating" name="rating"  onChange={handleChange}  min={1} max={5} step={1} value={input.rating} required/>

            <label htmlFor="image_url">Picture</label>
            <input className="iniform" type="text" id="image_url" name="image_url" placeholder="Link gambar game/aplikasi" onChange={handleChange} value={input.image_url} required/>

            <input className="iniformbutton" type="submit" value="Submit"/>
            </form>
        </div>

        </>
    )
}

export default FormApps