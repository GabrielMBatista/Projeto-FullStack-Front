import React from 'react'
import { Buttons, NavBox ,NavBarBox} from '../Styled/Styled'

function NavBar() {
    return (
        <NavBarBox>
            <img src='https://i.imgur.com/VacuIOL.jpg' alt='Logo' style={{ width: '20%', AlignSelf: 'left' }}></img>
            <NavBox>
                <Buttons>Login</Buttons>
                <Buttons>Register</Buttons>
            </NavBox>
        </NavBarBox>
    )
}

export default NavBar
