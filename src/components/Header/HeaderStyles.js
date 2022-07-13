import styled from "styled-components";

export const StyledHeader = styled.header`
    @import url('https://fonts.googleapis.com/css2?family=Fredoka:wght@700&display=swap');
    background-color: '#130e3b';
    width: 100%;
    max-width: 100%;
    margin: 0 auto;
    height: 300px;
    color: '#edf2ef';
`
export const NavBar = styled.nav`
    display: flex;
`
export const MenuButton = styled.div`
    width: 25px;
    display: flex;
    flex-direction: column;
    padding: 20px;
    margin-top: 3px;
    div{
        margin-top: 5px;
        border: 1px solid white;
    }
`
export const Title = styled.h1`
    font-family: 'Fredoka', sans-serif; 
    font-weight: 700;
    letter-spacing: 1px;
    
    ${'' /* span{
        color: #52d978;
    } */}
`
// export const Button = styled.button`

// `