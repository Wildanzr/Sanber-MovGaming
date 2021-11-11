import ListMahasiswa from "./ListMahasiswa"
import FormMahasiswa from "./FormMahasiswa"
import {MahasiswaProvider} from "./MahasiswaContext"

const Mahasiswa = () => {

    return(
        <>
            <MahasiswaProvider>
                <ListMahasiswa/>
                <FormMahasiswa/>
            </MahasiswaProvider>
        </>
    )
}

export default Mahasiswa