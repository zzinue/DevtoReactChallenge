import React, { useState } from 'react'
import { FaDev } from 'react-icons/fa'
import { BiBell } from 'react-icons/bi'

const Navigation = () => {
    const [showMenu, setshowMenu] = useState(false)
    const toggle = () => {
        setshowMenu(!showMenu)
    }
    return (
        <header className='Header'>
            <div className='Header-Container'>
                <a href="https://dev.to" className='Header-Container-Logo'>
                    <FaDev size='3.125rem  ' />
                </a>

                <div className='Header-Container-SearchBox'>
                    <form action="">
                        <input type="text" placeholder='Search...' aria-label='searc' />
                    </form>
                </div>
                <div className='Header-Container-RightSide'>
                    <button>Create a Post</button>
                    <i>
                        <BiBell />
                    </i>
                    <span onClick={toggle}>
                        <img src="https://picsum.photos/200" alt="Profile Picture" />
                    </span>
                </div>
            </div>

            <div className={showMenu ? 'dropdown-menu' : 'dropdown-menu-close'}>
                <ul>
                    <li onClick={toggle}>
                        <a href="/Profile">
                            <div className="u-name">zzinue </div>
                            <small className="u-name-id">@zzinue</small>
                        </a>
                    </li>
                    <li onClick={toggle} ><a href="/Dashboard">Dashboard</a></li>
                    <li onClick={toggle} ><a href="/Post">Writing a Post  </a></li>
                    <li onClick={toggle} ><a href="/List">Reading a List</a></li>
                    <li onClick={toggle} ><a href="/Settings">Settings</a></li>
                    <li onClick={toggle} ><a href="/Signout">Signout</a></li>
                </ul>
            </div>

        </header >
    )
}

export default Navigation