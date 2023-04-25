import React from 'react';
import { Link } from 'react-router-dom';
import {Card, Col, Row, Spin} from 'antd';
//import articles from './data/articles.json';
import {api} from './common/http-common';
import axios from 'axios';
import {LoadingOutlined} from '@ant-design/icons';


const Article = () => {
  const [loading, setLoading] = React.useState(true);
  const [articles, setArticles] = React.useState(null);
  React.useEffect(()=>{
    axios.get(`${api.uri}/api/v1/articles`)
      .then ((res)=>{
        //console.log(res.data);
        setArticles(res.data);
      })
      .then(()=>{
        setLoading(false);
    })
  }, []);

  if(loading){
    const antIcon = <LoadingOutlined style={{ fontSize: 48}} spin />
    return (<Spin indicator={antIcon}/>);
    
  } else {
    if(!articles){
      return(<div>There is no article available now.</div>)

    } else {
        return (
        <Row>
          {
            articles && articles.map(({id, title, alltext})=> (
              <Col span={8} key={id}>
                <Card title={title} style={{width: 300}}>
                  <p>{alltext}</p>
                  <p></p>
                  <Link to={`/a/${id}`}>Details</Link>
                </Card>
              </Col>
            ))
          }
        </Row>
      )      
    }
  } 
}
export default Article;