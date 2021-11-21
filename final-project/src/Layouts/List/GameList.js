import { Table, Row, Col, Typography, Space, Button, Image, Tag, Modal, Divider } from 'antd'
import { useContext, useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { DataContext } from '../../Contexts/DataContext'
import { DeleteOutlined, EditOutlined, InfoCircleOutlined } from '@ant-design/icons'
import axios from 'axios'
import './List.css'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const { Title, Text } = Typography

const GameList = () => {

    const { games, setGames, fetchGame, setFetchGame, state, setState, allMethod } = useContext(DataContext)
    const { deleteGame } = allMethod
    const swal = withReactContent(Swal)
    const [detail, setDetail] = useState([{
        created_at: '',
        genre: '',
        id: '',
        image_url: '', 
        index: '',
        multiplayer: '',
        name: '',
        platform: '',
        release: '',
        singlePlayer: '',
        type: [],
        updated_at: '',
    }])
    let history = useHistory()

    useEffect(() => {
        
        const getData = async() => {
            try {
                await axios.get(`https://backendexample.sanbersy.com/api/data-game`).then((res) => {
                    setGames([...res.data])
                })
            }catch (err) {
                console.log(err)
            }
        }

        if(fetchGame) {
            getData()
            setFetchGame(false)
        }
    },[fetchGame, setFetchGame])

    const data = games.map((arr, idx) => {
        arr.index = idx+1
        arr.type = []
        if(arr.singlePlayer === 1) arr.type.push('Single Player')
        if(arr.multiplayer === 1) arr.type.push('Multi Player')
        return arr
    })

    const columns = [
        {
          title: 'No',
          dataIndex: 'index',
          key: 'index',
          sorter: (a, b) => a.index - b.index,
          sortDirections: ['descend'],
        },
        {
          title: 'Name',
          dataIndex: 'name',
          key: 'name',
          defaultSortOrder: 'descend',
          sorter: (a, b) => a.name.localeCompare(b.name),
        },
        {
          title: 'Image',
          dataIndex: 'image_url',
          key: 'image_url',
          render: (txt, record) => {
              return(
                  <Image src={record.image_url} alt={record.name}
                  style={{width: 100, height: 100, objectFit: 'cover'}}
                  />
              )
          }
        },
        {
          title: 'Release',
          dataIndex: 'release',
          key: 'release',
          defaultSortOrder: 'descend',
          sorter: (a, b) => a.release - b.release,
        },
        {
          title: 'Type',
          dataIndex: 'type',
          key: 'type',
          render: tags => (
            <>
              {tags.map(tag => {
                let color = tag === 'Multi Player' ? 'geekblue' : 'green';
                return (
                  <Tag color={color} key={tag} style={{marginBottom: "10px"}}>
                    {tag}
                  </Tag>
                );
              })}
            </>
          )

        },
        {
            title: 'Action',
            dataIndex: 'id',
            key: 'id',
            render: (txt, record) => {
                return(
                    <Space size="middle">
                        <Button type="primary" onClick={() => {
                            buttonEdit(record.id)
                        }}>
                            <EditOutlined/>
                        </Button>
                        <Button type='primary' danger onClick={() => {
                            buttonDelete(record.id)
                        }}>
                            <DeleteOutlined/>
                        </Button>
                        <Button type='primary' onClick={() => {
                            buttonInfo(record.id)
                        }}>
                            <InfoCircleOutlined />
                        </Button>
                    </Space>
                )
            }
          },
      ];
      
      function onChange(pagination, filters, sorter, extra) {
        console.log('params', pagination, filters, sorter, extra);
      }

      const buttonEdit = (e) => {
        console.log(e)
        history.push(`/admin/games/edit/${e}`)
      }

      const buttonDelete = (e) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
                deleteGame(e)
                Swal.fire(
                    'Deleted!',
                    'Game has been deleted.',
                    'success'
                )
                }
          })
      }
      
      const buttonInfo = (e) => {
        console.log(e)
        let item = games.filter(arr => {
            if(arr.id === parseInt(e)) return arr
        })
        setDetail(item)
        console.log(detail)
        setState(true)
      }

    return(
        <>
        <Row gutter={16}>
            <Col span={24}>
                <Title level={2} className='myCenterTitle'>Game List</Title>
            </Col>
        </Row>

        <Row gutter={16}>
            <Col span={24}>
                <Table columns={columns} dataSource={data} onChange={onChange} />
            </Col>
        </Row>

        <Modal
            title={<Title>{detail[0].name}</Title>}
            centered
            animation={false}
            visible={state}
            width={'90%'}
            onOk={() => setState(!state)}
            onCancel={() => setState(!state)}
            >
            <Row gutter={16}>
                <Col span={8}>
                    <Image src={detail[0].image_url} alt={detail.name}
                    style={{width: 300, height: 300, objectFit: 'cover'}}
                    />
                </Col>

                <Col span={16}>

                <Divider>
                    <Text type='secondary'>Details</Text>
                </Divider>
                <Row>
                    <Col span={4}>
                        <Text strong>Year :</Text>
                    </Col>
                    <Col span={20}>
                        <Tag color='green'>{detail[0].release}</Tag>
                    </Col>
                </Row>
                <br/>
                <Row>
                    <Col span={4}>
                        <Text strong>Genre :</Text>
                    </Col>
                    <Col span={20}>
                        <Tag color='orange'>{detail[0].genre}</Tag>
                    </Col>
                </Row>
                <br/>
                <Row>
                    <Col span={4}>
                        <Text strong>Platform :</Text>
                    </Col>
                    <Col span={20}>
                    <Tag color="cyan">{detail[0].platform}</Tag>
                    </Col>
                </Row>
                <br/>
                <Row>
                    <Col span={4}>
                        <Text strong>SinglePlayer :</Text>
                    </Col>
                    <Col span={20}>
                        <Tag color='geekblue'>{detail[0].singlePlayer === 1 ? 'Yes' : 'No'}</Tag>
                    </Col>
                </Row>
                <br/>
                <Row>
                    <Col span={4}>
                        <Text strong>MultiPlayer</Text>
                    </Col>
                    <Col span={20}>
                        <Tag color='geekblue'>{detail[0].multiplayer === 1 ? 'Yes' : 'No'}</Tag>
                    </Col>
                </Row>
            </Col>
            </Row>
        </Modal>
        </>
    )
}

export default GameList