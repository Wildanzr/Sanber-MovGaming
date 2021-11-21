import {Card, Form, Input, Button, Divider} from 'antd'
import {Typography} from 'antd'
import {UserOutlined, LockOutlined, MailOutlined } from '@ant-design/icons'
import { DataContext } from '../../Contexts/DataContext'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useHistory } from 'react-router-dom'

import './Admin.css'

const {Title, Text} = Typography

const Register = () => {

  const { allMethod } = useContext(DataContext)
  const { login } = allMethod
  let history = useHistory()

  const onFinish = (values) => {
    if(values.password === values.password_confirm) {
      let data = {
        name: values.nama,
        email: values.email,
        password: values.password
      }
      axios.post(`https://backendexample.sanbersy.com/api/register`, data).then((res) => {
        console.log(res)
        history.push('/login')
      })
    }else {
      console.log("Nooo")
    }
    console.log(values)
  };

  const onFinishFailed = (errorInfo) => {
    
  }

  return (
    <Card className='myContainer'>
      <Title className='myCenter' level={2}>Register</Title>
      <Form
        name="basic"
        onFinish={onFinish}
        autoComplete="off">

        <Form.Item
          name="nama"
          rules={[{
            required: true,
            message: 'Please input name corectly!'
          }
        ]}>
          <Input
            prefix={< UserOutlined className = "site-form-item-icon" />}
            placeholder="Name"/>
        </Form.Item>

        <Form.Item
          name="email"
          rules={[{
            required: true,
            type: 'email',
            message: 'Please input your active email!'
          }
        ]}>
          <Input
            prefix={< MailOutlined  className = "site-form-item-icon" />}
            placeholder="Email"/>
        </Form.Item>

        <Form.Item
          name="password"
          rules={[{
            required: true,
            message: 'Input your prefered password!'
          }
        ]}>
          <Input.Password
            prefix={< LockOutlined className = "site-form-item-icon" />}
            placeholder="Password"/>
        </Form.Item>
        
        <Form.Item
          name="password_confirm"
          rules={[{
            required: true,
            message: 'Input your prefered password!'
          }
        ]}>
          <Input.Password
            prefix={< LockOutlined className = "site-form-item-icon" />}
            placeholder="Confirm Password"/>
        </Form.Item>

        <Form.Item >
          <Button type="primary" htmlType="submit" className='myFormButton'>
            Submit
          </Button>
        </Form.Item>
      </Form>

      <Divider>
        <Text type='secondary'>Already have an Account?</Text>
      </Divider>
      <Button type='primary' className='myRegister myFormButton'>
        <Link to='/login'>Login</Link>
      </Button>

    </Card>
  )
}

export default Register