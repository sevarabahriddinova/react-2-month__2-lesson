import React, { useContext } from 'react';
import { Button, Checkbox, Form, Input, InputNumber } from 'antd';
import ProjectStore from '../../context/store';

const Register = () => {
const [state, dispatch ] = useContext(ProjectStore)

 const onFinish = (values) => {
    dispatch({type: "Register" , values})
  }; 
  // eng muhimi onFinish , bu bizga fomr submit bulganida formning valuasi yani qiymatlarini object kurinishida olib beradi.



  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };


return (

  <div className='min-h-screen w-full flex items-center justify-center mx-auto'>
    <div className='w-full max-w-[600px] border p-10 flex justify-center bg-slate-300 rounded-lg'>
    <Form
    layout='vertical'
    name="basic"
    wrapperCol={{
      span: 16,
    }}
    style={{
      width: "100%"
    }}
    initialValues={{
      remember: true,
    }}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    autoComplete="off"
  >
    <Form.Item
      label="Email"
      name="email"
      rules={[
        {
          required: true,
          message: 'Please input your email!',
        },
      ]}
    >
      <Input className='w-[500px] p-3' type='email' placeholder='Enter your email!' />
    </Form.Item>

    <Form.Item
      label="Password"
      name="password"
      rules={[
        {
          required: true,
          message: 'Please input your password!',
        },
      ]}
    > 
      <Input.Password placeholder='Enter your password!' className='w-[500px] p-3' />
    </Form.Item>
    <Form.Item
      label="Age"
      name="age"
      style={{width: "100%"}}
      rules={[
        {
          required: true,
          message: 'Please input your age!',
        },
      ]}
    >
      <InputNumber min={0} placeholder='Enter your age!' className='p-2 w-[500px]'  />
    </Form.Item>
    <Form.Item
      
    >
     <div className='w-[500px] flex justify-center'>
     <Button type="primary" htmlType="submit" className='text-center w-[200px] p-6'>
        Submit
      </Button>
     </div>
    </Form.Item>
  </Form>
  </div>
  </div>
)
    }
export default Register;