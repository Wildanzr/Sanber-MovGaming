import {useEffect, useContext} from "react"
import axios from "axios"
import {MahasiswaContext} from "../Tugas-13/MahasiswaContext"
import { useHistory } from "react-router-dom"
import { Table, Space } from 'antd'
import { Button } from "antd/lib/radio"
import 'antd/dist/antd.css'
import {
  EditOutlined, DeleteOutlined
} from '@ant-design/icons'

const AntdListMahasiswa = () => {

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
    history.push("/tugas15/tambah");
  }

  const data = dataMahasiswa.map((res, index) => {
    return res = {...res, indeks: iNilai(res.score), index: index}
  }) 
  console.log(data)
  const columns = [
    {
      title: 'Nama',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Mata Kuliah',
      dataIndex: 'course',
      key: 'course',
    },
    {
      title: 'Nilai',
      dataIndex: 'score',
      key: 'score',
    },
    {
      title: 'Indeks Nilai',
      dataIndex: 'indeks',
      key: 'indeks',
    },
    {
      title: 'Aksi',
      dataIndex: "action",
      key: 'action',
      render: (res, record) => (
        <Space size="middle">
          <Button value={record.index} onClick={perbaruiData2}><EditOutlined/></Button>
          <Button danger type="primary" value={record.index} onClick={hapusData}><DeleteOutlined/></Button>
        </Space>
      ),
    },
  ];

  return (
    <div style={{width: "100%",margin: "0 auto"}}>
      <h1 className="titleCenter">Daftar Nilai Mahasiswa</h1>
      <Button type="primary" danger className="newCenter" onClick={gotToForm}>Tambah Data Mahasiswa</Button>
      <Table className="newForm newCenter" columns={columns} dataSource={data} />
    </div>
  )
}

export default AntdListMahasiswa