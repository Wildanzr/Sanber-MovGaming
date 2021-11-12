import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Navbar from "../Nav/Navbar"
import Tugas9 from "../Tugas-9/Tugas9"
import Tugas10 from "../Tugas-10/Tugas10"
import Tugas11 from "../Tugas-11/Tugas11"
import Tugas12 from "../Tugas-12/Tugas12"
import Tugas13 from "../Tugas-13/Mahasiswa"
import Tugas14 from "../Tugas-14/Mahasiswa2"
import Tugas14Form from "../Tugas-14/Mahasiswa3"
import {MahasiswaProvider} from "../Tugas-13/MahasiswaContext"
// import '../App.css'

const Routes = () => {

    return(
        <Router>
            <Navbar/>
            <Switch>
                <Route path="/" exact>
                    <Tugas9/>
                </Route>
                <Route path="/tugas10" exact>
                    <Tugas10/>
                </Route>
                <Route path="/tugas11" exact>
                    <Tugas11/>
                </Route>
                <MahasiswaProvider>
                    <Route path="/tugas12" exact>
                        <Tugas12/>
                    </Route>
                    <Route path="/tugas13" exact>
                        <Tugas13/>
                    </Route>
                    <Route path="/tugas14" exact>
                        <Tugas14/>
                    </Route>
                    <Route path="/tugas14/tambah" exact>
                        <Tugas14Form/>
                    </Route>
                </MahasiswaProvider>
            </Switch>
        </Router>
    )

}

export default Routes