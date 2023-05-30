import React, { useState } from 'react';
import { Upload, Button, message } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import {api} from './common/http-common';
import axios from 'axios';

const Catimage: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  //const uploadURL = `${api.uri}/${file.name}.${file.type}`;
  //callback(uploadURL);  
  
  const handleFileChange = (info: any) => {
    if (info.file.status === 'done') {
      message.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }

    if (info.fileList.length > 0) {
      setFile(info.fileList[0].originFileObj);
    } else {
      setFile(null);
    }
  };

  const handleUpload = async (callback) => {
    if (!file) {
      message.error('Please select a file to upload');
      return;
    }

    const formData = new FormData();
    formData.append('avatar',file);

    try {
      const response = await axios.post(`${api.uri}/api/v1/upload`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        },
      });
      console.log(response.data);

    } catch (error) {
      console.log(error);
      //message.error('File upload failed');
     //callback(null, error.message);
    }
  };

  return (
    <div>
      <Upload
        fileList={file ? [{ uid: '1', name: file.name, status: 'done', originFileObj: file }] : []}
        onChange={handleFileChange}
        showUploadList={{ showRemoveIcon: true}}
      >
        <Button icon={<UploadOutlined />}>Select File</Button>
      </Upload>
      <Button type="primary" onClick={handleUpload}>
        Upload
      </Button>
    </div>
  );
};

export default Catimage;

//in uploadlist     
//fileList={file ? [{ uid: '1', name: file.name, status: //'done', originFileObj: file }] : []}