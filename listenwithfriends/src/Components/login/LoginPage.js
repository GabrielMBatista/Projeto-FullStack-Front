import React from 'react'
import { BaseBox, Buttons } from '../Styled/Styled'

function LoginPage() {
    return (
        <BaseBox>
            <label>E-mail</label>
            <input
            placeholder='Email'
            type='email'
            />
            <label>Password</label>
            <input
            placeholder='Password'
            type='password'
            />
            <Buttons>login</Buttons>

        </BaseBox>
    )
}

export default LoginPage
