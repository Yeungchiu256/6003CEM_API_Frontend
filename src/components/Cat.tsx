import React from 'react';
import { Link } from 'react-router-dom';
import {Card, Col, Row, Spin} from 'antd';
//import articles from './data/articles.json';
import {api} from './common/http-common';
import axios from 'axios';
import {LoadingOutlined} from '@ant-design/icons';


const Cat = () => {
  const [loading, setLoading] = React.useState(true);
  const [cat, setCat] = React.useState(null);
  React.useEffect(
    ()=>{
    axios.get(`${api.uri}/api/v1/cat`)
      .then (
        (res)=>{
          setCat(res.data);
        } //console.log(res.data);
      )
      .then(
        ()=>{
          setLoading(false);
        }
      )
    }, []
  );

  if(loading){
    const antIcon = <LoadingOutlined style={{ fontSize: 48}} spin />
    return (<Spin indicator={antIcon}/>);
    
  } else {
    if(!cat){
      return(<div>There is no cat available now.</div>)

    } else {
        return (

        <Row>
          {
            cat && cat.map(({catID, catname, shelterID, inShelter, imageurl})=> (
              <Col span={8} key={catID}>
                <Card title={catname} style={{width: 300}}>
                  <p>{shelterID}</p>
                  <p><img src={imageurl} alt={catname} width="270" height="300"/></p>
                  <p></p>
                  <Link to={`/a/${catID}`}>Details</Link>
                </Card>
              </Col>
              
            ))
          }
        </Row>
      )      
    }
  } 
}
export default Cat;