
import styled from 'styled-components'
import { TextColor,BackColor } from '../../Hooks/Constantes'

export const Body = styled.section`
display:grid;
grid-template-rows:15% 70% 15%;
grid-template-columns: 50% 50%;
margin:auto;
width:100vw;
height:100vh;
background-color:${BackColor};
color:${TextColor};
`
export const BaseBox = styled.section`
width:200px;
height:140px;
text-align:center;
border: 2px solid ;
border-radius: 10px;
background-color:whitesmoke;
position:absolute;
`
export const NavBarBox = styled.section`
display:flex;
grid-row:1;
grid-column:1/3;
`
export const NavBox = styled.section`
display:flex;
width:100%;
align-items: center;
justify-content:flex-end;
`

export const ControlBox = styled.section`
display:flex;
margin:auto;
align-items: center;
position: sticky;
grid-row:3;
grid-column:1/3;
`
export const HomeBox = styled.section`
display:grid;
grid-template-columns: 50% 50%;
grid-row:2;
grid-column:1/3;
`
export const SongListBox = styled.section`
display:flex;
flex-direction:column;
grid-column:1;
align-items: center;
overflow:auto;
`
export const SearchSongBox = styled.section`
display:flex;
flex-direction:column;
grid-column:2;
align-items: center;
`

export const SearchInput = styled.input`
width:95%;
margin:3%;
height:3vh;
border-radius: 5px;
outline:none;
text-align:center;
`

export const Buttons = styled.button`
border-color: #004abe;
border-radius: 4px;
box-shadow: 1px 3px 3px 2px rgba(0, 0, 0, 0.24), 0 0 10px rgba(0, 0, 0, 0.12);
cursor: pointer;
background: #004abe;
font-weight: 600;
padding: 3px ;
margin:5%;
&:hover {
    background: whitesmoke;
    color:black;
    transition: all .4s ease-in-out;
}
color: white;
text-align: center;
font-size: 15px;
min-width: 8vw;
`
