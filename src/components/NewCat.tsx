import React from "react";
import { Form, Input, Button } from 'antd';
import {api} from './common/http-common';
import axios from 'axios';
import {Buffer} from 'buffer';
import Catimage from './Catimage';

const { TextArea } = Input;

const NewCat: React.FC = () =>{
    const username = "alice";
    const password = "abc123";
    // Create token by username:password
    const access_token = Buffer.from(`${username}:${password}`, 'utf8').toString('base64');

    localStorage.setItem('atoken', access_token);

    const handleFormSubmit = (values: any) => {
      const t = values.catname;
      const c = values.catremark;
      const s = values.sheltercode;
      const u = values.uploadURL;
      console.log(values, t, c,s);
      const postArticle = {
        catname: t,
        catremark: c,
        staffid: 1, //  Please add staffID into table!!!, check by token?
        sheltercode: HK01 //note to consider more
        
      }
      // Post request
    axios.post(`${api.uri}/api/v1/articles`, postArticle, {
      headers: {
        'Authorization': `Basic ${localStorage.getItem('atoken')}`
      }
    }).then((res)=> {
      console.log(res.data);
    });
    
    }
    
  const contentRules =[
    {
      required: true,
      message:"Please input somethings"
    }
  ]
  
  
  return (
    <Form name="Newcat" labelCol= {{ span:6 }} onFinish={(values) => handleFormSubmit(values)}>
      <br></br>
      <Form.Item name="catname" label="Cat Name" rules={contentRules}>
        <Input />
      </Form.Item>
      <br></br>
      

      <Form.Item name="sheltercode" label="Location (Shelter Code)" rules={contentRules}>
        <Input />
      </Form.Item>
      <br></br>
      
      <Form.Item name="catremark" label="Cat Remark" rules={contentRules}>
        <TextArea rows={3} />
        
      </Form.Item>



      <Form.Item name="catimage" label="Cat image">
        <div align="left">
          <Catimage />
        </div>
        
      </Form.Item>
      
      <Form.Item>
        <Button type="primary" htmlType="submit">Submit</Button>         
      </Form.Item>
      <br></br>
      
    </Form>
  );
}


export default NewCat;