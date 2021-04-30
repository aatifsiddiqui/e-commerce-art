import styled from 'styled-components'
export const ButtonContainer = styled.button`
    text-transform: capitalize;
    font-size:1.2rem;
    background:transparent;
    border:0.1rem solid rgba(0,0,0,0.5);
    color:rgba(0,0,0,0.9);
    border-radius:0.5 rem;
    padding:0.2rem0.5rem;
    cursor:pointer;
    margin: 0.2rem 0.5rem 0.2rem 0;
    transition:all 0.07s ease-in-out;
    &:hover{
        background: rgba(0,0,0,0.9);
        color:rgba(255,255,255,0.9);


    }
   
`;