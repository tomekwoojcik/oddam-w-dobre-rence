import React from 'react'
import ButtonsLoginLogout from '../../atoms/buttonsLoginLogout/buttonsLoginLogout'

const NavLoginLogout = () => {
    return (
        <ul>
            <ButtonsLoginLogout source={'logIn'} buttonName={'Zaloguj'}/>
        </ul>
    )
}

export default NavLoginLogout