import React, { useState } from 'react'
import styled from 'styled-components'

export const GenerateButton = styled.button`
  outline: none;
  background-color: #fd5151;
  color: #fff;
  font-weight: bolder;
  border: none;
  cursor: pointer;
  padding: 1rem 2.5rem;
  font-size: 1rem;
  border-radius: 5px;
  &:hover{
    background-color: #ff3939;
  }
`

export const Button = (props) => {

  function generateNumbers(numbers) {
    const generatedArr = []
    for (let i = 0; i < numbers; i++) {
      let number = parseInt(Math.random() * (60) + 1)
      generatedArr.indexOf(number) === -1 ?
        generatedArr.push(number) : i--
    }
    console.log(generatedArr.sort((n1, n2) => n1 - n2))
    return generatedArr.sort((n1, n2) => n1 - n2)
  }
  const [amount, setAmount] = useState(props.amount || 6)
  const [megaNumber, setMegaNumber] = useState(Array(amount).fill(0))

  function renderNumbers(arr, index) {
    return (
      <div key={index} className="number">{arr}</div>
    )
  }

  return (
    <>
      <GenerateButton onClick={_ => setMegaNumber(generateNumbers(amount))} returnNumbers={megaNumber}>
        Gerar Números
      </GenerateButton>
    </>
  )
}