import { DataProvider } from './Contexts/DataContext'
import './App.css'
import 'antd/dist/antd.css'
import Routes from './Routes/Routes'
import ListMovie from './Layouts/Section/ListMovie'

function App() {
  return (
    <>
    <DataProvider>
      <Routes/>
      {/* <ListMovie/> */}
    </DataProvider>
    </>
  )
}

export default App