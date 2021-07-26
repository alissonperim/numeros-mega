import React, { useState } from 'react'
import styled from "styled-components";
import { Button } from "../Button";

export const RenderDiv = styled.div`
  max-width: 100vw;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient( 178.2deg,  rgba(118,8,23,1) 10.9%, rgba(158,12,33,1) 62.6% );
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
  color: #fff;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  h2{
    font-size: 3rem;
    letter-spacing: 3px;
    margin-bottom: 30px;
  }
  .numbers-container{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    margin: 16px 0;
    min-height: 100px;
    .number{
      display: flex;
      justify-content: center;
      align-items: center;
      width: 60px;
      height: 60px;
      border-radius: 50%;
      font-size: 1.3rem;
      background-color: #ffa700;
      margin-right: 10px;
      box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
      &:last-of-type{
        margin: 0;
      }
    }
  }
`
export const NumbersContainer = (props) => {
  const [numbers, setNumbers] = useState([])

  function setNumbersFunc(num, index) {
    return (
      <div className="number" key={index}>{num}</div>
    )
  }

  return (
    <RenderDiv>
      <h2>NÚMEROS PARA MEGA</h2>
      <div className="numbers-container">
        {numbers.map(setNumbersFunc)}
      </div>
      <Button amount={6} onGenerateNumbers={setNumbers} />
    </RenderDiv>
  )
}