import styled from "styled-components"

const DropSelect = styled.select`
  width: 10%;
  height: 35px;
  background: white;
  color: gray;
  padding-left: 5px;
  font-size: 14px;
  border: none;
  margin-left: 10px;
  

  option {
    color: black;
    background: white;
    display: flex;
    white-space: pre;
    min-height: 20px;
    padding: 0px 2px 1px;
  }
`
export const ContainerStyle = styled.div`
    background-color: white;   
    width: 100%;
    margin-bottom: 20px;
`

export const TitleStyle = styled.h1`
    display: flex;
`

export const InnerContainerStyle = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 15px 25px;
    box-sizing: border-box;
    width: 1280px;
    max-width: 100%;
    margin: 0 auto;
`


export default DropSelect


