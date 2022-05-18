import React, { useState } from 'react'
import { FaDev } from 'react-icons/fa'
import { BiBell } from 'react-icons/bi'
import { FiSearch } from 'react-icons/fi'
import { Link, Route, Routes } from 'react-router-dom'
import CreateAccount from '../CreateAccount/CreateAccount'
import { useNavigate } from "react-router-dom";

const Navigation = (props) => {
    const [showMenu, setshowMenu] = useState(false)
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const ToggleLogin = () => {
        setIsLoggedIn(!isLoggedIn)
    }
    const toggle = () => {
        setshowMenu(!showMenu)
    }

    return (
        <>

            <header className='Header'>
                <div className='Header-Container'>
                    <div className='Header-Container-HamburgerMenu' onClick={() => props.openMenu()}></div>
                    <a href="https://dev.to" className='Header-Container-Logo'>
                        <FaDev size='3.125rem  ' />
                    </a>

                    <div className='Header-Container-SearchBox'>
                        <form action="">
                            <input type="text" placeholder='Search...' aria-label='search' />
                        </form>
                    </div>
                    <div className='Header-Container-RightSide'>
                        {
                            isLoggedIn ? (
                                <>

                                    <button>LogOut</button>


                                </>

                            ) : (
                                <>
                                    <button>Login</button>
                                    <button>Create Account </button>

                                </>
                            )
                        }
                        <i className="Hidden-Search">
                            <FiSearch />
                        </i>
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
        </>
    )

}

export default Navigation