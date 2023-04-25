import React from 'react';

//export default function Hello(){}

const Hello = (props) => {
  //const greeting = 'Hello Component!';
  const greeting = `Hello ${props.title} ${props.subTitle}`
  return <h1>{greeting}</h1>;
}
export default Hello;

