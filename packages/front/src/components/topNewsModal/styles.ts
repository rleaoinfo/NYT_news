import styled from "styled-components"

interface OutDivsProps {
    isOpen?: boolean
}

const OutDivStyles = styled.div<OutDivsProps>`
    display: ${(props => props.isOpen ? 'flex' : 'none')};
    background-color: rgba(0,0,0,0.8);
    justify-content: center;
    align-items: center;
    position:fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
`

export const ModalStyles = styled.div`
    width: 600px;
    max-width: 100%;
    background-color: white;
    position: relative;
    border-radius: 3px;
    overflow:hidden;
`

export const ImgStyles = styled.img`
    width: 100%;
    height: 300px;
    object-fit: cover;
    border-top-left-radius: 3px;
    border-top-right-radius: 3px;
`

export const ButtonStyles = styled.button`
    position:absolute;
    right: 10px;
    top: 10px;
    border: none;
    background-color: #3fd79a;
    color: white;
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    cursor: pointer;
    transition: all ease .3s;
    &:hover {
        background-color: #4a4fea;
    }
`

export const ContentStyles = styled.div`
padding: 20px;
`
export const TitleStyles = styled.a`
    font-family: 'Montserrat', sans-serif;
    font-size: 24px;
    margin-bottom: 10px;
    font-weight: 600;
    color: #3fd79a;;
    text-decoration: none;
    display: block;
`
export const AbstractStyles = styled.p`
    font-size: 16px;
    margin-bottom: 10px;
    line-height: 20px;
`

export const DateStyles = styled.p`
    font-family: 'Montserrat', sans-serif;
    font-weight: 600;
    font-size: 12px;
    color: #b1b1b1;
    letter-spacing: 0.8px;
`


export default OutDivStyles