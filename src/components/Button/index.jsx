import React from 'react'
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
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
  &:hover{
    background-color: #ff3939;
  }
  &:active{
    transform: scale(0.99);
  }
`

export const Button = (props) => {
  const {
    onGenerateNumbers,
    amount = 6
  } = props

  function generateNumbers(numbers) {
    const generatedArr = []
    for (let i = 0; i < numbers; i++) {
      let number = parseInt(Math.random() * (60) + 1)
      generatedArr.indexOf(number) === -1 ?
        generatedArr.push(number) : i--
    }
    return generatedArr.sort((n1, n2) => n1 - n2)
  }

  const handleGenerateNumbers = () => {
    const numbers = generateNumbers(amount)
    onGenerateNumbers(numbers)
  }

  return (
    <>
      <GenerateButton onClick={handleGenerateNumbers}>
        Gerar Números
      </GenerateButton>
    </>
  )
}