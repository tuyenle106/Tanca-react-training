import React from 'react'
import Button from './Button';

const text = "Tanca";
const color = "#76b5c5";
const CardName = () => {
  return (
    <>
      <div>Lê Thanh Tuyển</div>
      <Button text = { text } color = {color}></Button>
    </>
  );
}

export default CardName