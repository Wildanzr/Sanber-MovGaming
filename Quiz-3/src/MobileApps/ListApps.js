import {useContext, useEffect} from 'react'
import {useHistory} from 'react-router-dom'
import { AppContext } from '../Context/AppContext'

import axios from 'axios'
import 'antd/dist/antd.css'
import {Table, Tag, Space} from 'antd'
import { Button } from "antd"
import { DeleteOutlined, EditOutlined } from '@ant-design/icons'

const ListApps = () => {

    const {appData, setAppData, fetch, setFetch, hapusData, editData} = useContext(AppContext)
    let history = useHistory()

    useEffect(() =>{
        
        const getData = async() => {
            await axios.get(`http://backendexample.sanbercloud.com/api/mobile-apps`).then((res) => {
                setAppData(res.data)
                console.log(res.data)
            })
        }
        if(fetch) {
            getData()
            setFetch(false)
        }
    })

    const data = appData.map((arr, idx) => {
        arr.index = idx
        arr.platform  = []
        if(arr.is_android_app == 1) arr.platform.push('Android')
        if(arr.is_ios_app == 1) arr.platform.push('iOS')
        return arr
    })

    const gotToForm = () => {
      history.push("/mobile-form")
    }

    const columns = [
        {
          title: 'Nama',
          dataIndex: 'name',
          key: 'name',
          render: text => <a>{text}</a>,
        },
        {
          title: 'Category',
          dataIndex: 'category',
          key: 'category',
        },
        {
          title: 'Description',
          dataIndex: 'description',
          key: 'description',
        },
        {
          title: 'Release Year',
          dataIndex: 'release_year',
          key: 'release_year',
        },
        {
          title: 'Size',
          dataIndex: 'size',
          key: 'size',
        },
        {
          title: 'Price',
          dataIndex: 'price',
          key: 'price',
        },
        {
          title: 'Rating',
          dataIndex: 'rating',
          key: 'rating',
        },
        {
            title: 'Platform',
            key: 'platform',
            dataIndex: 'platform',
            render: tags => (
              <>
                {tags.map(tag => {
                  let color = tag.length > 5 ? 'geekblue' : 'green';
                  return (
                    <Tag color={color} key={tag} style={{marginBottom: "10px"}}>
                      {tag.toUpperCase()}
                    </Tag>
                  );
                })}
              </>
            ),
          },
        {
          title: 'Aksi',
          datIndex: 'action',
          key: 'action',
          render: (text, record) => (
              <Space size="middle">
                  <Button value={record.id} onClick={editData} type="primary" >
                    <EditOutlined/>
                  </Button>
                  <Button value={record.id} onClick={hapusData} type='primary' danger>
                    <DeleteOutlined/>
                  </Button>
            </Space>
          ),
        },
      ];

  return (
    <div>
      <Button type="primary" style={{margin: "20px", marginLeft: "90%"}} onClick={gotToForm}>
        Tambah Data
      </Button>
        <Table columns={columns} dataSource={data}/>  
    </div>
    )
}

export default ListApps