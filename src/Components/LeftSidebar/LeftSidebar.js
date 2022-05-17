import React, { useState } from 'react'
import {
    FcHome,
    FcReading,
    FcTodoList,
    FcVideoCall,
    FcAbout,
    FcIdea,
    FcShop,
    FcLike,
    FcBriefcase,
    FcDisclaimer,
    FcBusinessContact,
    FcViewDetails,
} from "react-icons/fc";
import { AiFillAudio } from "react-icons/ai";
import { FaTags, FaDev } from "react-icons/fa";
import { IoLogoTwitter, IoLogoFacebook, IoLogoGithub, IoLogoInstagram, IoLogoTwitch } from "react-icons/io";
import { RiInstagramFill, RiTwitchLine } from "react-icons/ri";
import { CgShapeHexagon } from "react-icons/cg";
import { GrFormClose } from "react-icons/gr";

const tags = [
    "react",
    "graphql",
    "nodejs",
    "sass",
    "javascript",
    "html",
    "css",
    "webdev",
    "opensource",
    "beginners",
    "python",
    "git",
    "vscode",
    "npm",
    "sql",
    "ubuntu",
    "aws",
];


const LeftSidebar = (props) => {
    const [More, setMore] = useState(false)
    const toggle = () => {
        setMore(!More)
    }
    return <>
        <aside className="LeftBar">
            <nav className="LeftBar-Menu">
                <ul>
                    <li><a href="/Home"></a>
                        <i>
                            <FcHome />
                        </i>
                        Home
                    </li>
                    <li><a href="/Reading"></a>
                        <i>
                            <FcReading />
                        </i>
                        Reading List
                    </li>
                    <li><a href="/List"></a>
                        <i>
                            <FcTodoList />
                        </i>
                        List
                    </li>
                    <li><a href="/Podcast"></a>
                        <i>
                            <AiFillAudio />
                        </i>
                        Podcasts
                    </li>
                    <li><a href="/Videos"></a>
                        <i>
                            <FcVideoCall />
                        </i>
                        Videos
                    </li>
                    <li><a href="/Tags"></a>
                        <i>
                            <FaTags />
                        </i>
                        Tags
                    </li>
                    <li className={More ? "More Hidden" : 'More'}>
                        <i></i>
                        <a href="#" onClick={toggle}>More...</a>
                    </li>
                    <div className={More ? 'List' : "List Hidden"}>
                        <li>
                            <a href="/Code"></a>
                            <i>
                                <FcAbout />
                            </i>
                            Code of Conduct
                        </li>
                        <li>
                            <a href="/FAQ"></a>
                            <i>
                                <FcViewDetails />
                            </i>
                            FAQ
                        </li>
                        <li><a href="/Dev">

                            <i>
                                <FcShop />
                            </i>
                            DEV Shop
                        </a>
                        </li>
                        <li><a href="/Sponsors">

                            <i>
                                <FcLike />
                            </i>
                            Sponsors
                        </a>
                        </li>
                        <li><a href="/About">
                            <i>
                                <FaDev />
                            </i>
                            About
                        </a>
                        </li>
                        <li><a href="/Privacy">
                            <i>
                                <FcBriefcase />
                            </i>
                            Privacy Policy
                        </a>
                        </li>
                        <li><a href="/Terms">
                            <i>
                                <FcDisclaimer />
                            </i>
                            Terms of Use
                        </a>
                        </li>
                        <li><a href="/Contact">
                            <i>
                                <FcBusinessContact />
                            </i>
                            Contact
                        </a>
                        </li>

                    </div>
                </ul>
                <div className={More ? 'LeftBar-Social' : 'LeftBar-Social Hidden '}>
                    <a href="/Twitter">
                        <i>
                            <IoLogoTwitter />
                        </i>
                    </a>
                    <a href="/Facebook">
                        <i>
                            <IoLogoFacebook />
                        </i>
                    </a>
                    <a href="/Github">
                        <i>
                            <IoLogoGithub />
                        </i>
                    </a>
                    <a href="/Instagram">
                        <i>
                            <RiInstagramFill />
                        </i>
                    </a>
                    <a href="/Twitch">
                        <i>
                            <RiTwitchLine />
                        </i>
                    </a>

                </div>
                <nav className='LeftBar-Taglist'>
                    <header>
                        <h3>My Tags</h3>
                        <i>
                            <CgShapeHexagon />
                        </i>
                    </header>
                    <ul>
                        {
                            tags.map((tag, id) => {
                                return (
                                    <li key={id}>
                                        <a href="#">#{tag}</a>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </nav>
            </nav>
        </aside>
        {
            props.burguerMenu &&
            <div className='Hamburger'>
                <div className='Hamburger-Content'>
                    <header>
                        <h2>DEV Community</h2>
                        <button onClick={() => props.closeMenu()}>
                            <GrFormClose />
                        </button>
                    </header>
                    <div className='Hamburger-Content-Items'>
                        <nav className="LeftBar-Menu">
                            <ul>
                                <li><a href="/Home"></a>
                                    <i>
                                        <FcHome />
                                    </i>
                                    Home
                                </li>
                                <li><a href="/Reading"></a>
                                    <i>
                                        <FcReading />
                                    </i>
                                    Reading List
                                </li>
                                <li><a href="/List"></a>
                                    <i>
                                        <FcTodoList />
                                    </i>
                                    List
                                </li>
                                <li><a href="/Podcast"></a>
                                    <i>
                                        <AiFillAudio />
                                    </i>
                                    Podcasts
                                </li>
                                <li><a href="/Videos"></a>
                                    <i>
                                        <FcVideoCall />
                                    </i>
                                    Videos
                                </li>
                                <li><a href="/Tags"></a>
                                    <i>
                                        <FaTags />
                                    </i>
                                    Tags
                                </li>
                                <li className={More ? "More Hidden" : 'More'}>
                                    <i></i>
                                    <a href="#" onClick={toggle}>More...</a>
                                </li>
                                <div className={More ? 'List' : "List Hidden"}>
                                    <li>
                                        <a href="/Code"></a>
                                        <i>
                                            <FcAbout />
                                        </i>
                                        Code of Conduct
                                    </li>
                                    <li>
                                        <a href="/FAQ"></a>
                                        <i>
                                            <FcViewDetails />
                                        </i>
                                        FAQ
                                    </li>
                                    <li><a href="/Dev">

                                        <i>
                                            <FcShop />
                                        </i>
                                        DEV Shop
                                    </a>
                                    </li>
                                    <li><a href="/Sponsors">

                                        <i>
                                            <FcLike />
                                        </i>
                                        Sponsors
                                    </a>
                                    </li>
                                    <li><a href="/About">
                                        <i>
                                            <FaDev />
                                        </i>
                                        About
                                    </a>
                                    </li>
                                    <li><a href="/Privacy">
                                        <i>
                                            <FcBriefcase />
                                        </i>
                                        Privacy Policy
                                    </a>
                                    </li>
                                    <li><a href="/Terms">
                                        <i>
                                            <FcDisclaimer />
                                        </i>
                                        Terms of Use
                                    </a>
                                    </li>
                                    <li><a href="/Contact">
                                        <i>
                                            <FcBusinessContact />
                                        </i>
                                        Contact
                                    </a>
                                    </li>

                                </div>
                            </ul>
                            <div className={More ? 'LeftBar-Social' : 'LeftBar-Social Hidden '}>
                                <a href="/Twitter">
                                    <i>
                                        <IoLogoTwitter />
                                    </i>
                                </a>
                                <a href="/Facebook">
                                    <i>
                                        <IoLogoFacebook />
                                    </i>
                                </a>
                                <a href="/Github">
                                    <i>
                                        <IoLogoGithub />
                                    </i>
                                </a>
                                <a href="/Instagram">
                                    <i>
                                        <RiInstagramFill />
                                    </i>
                                </a>
                                <a href="/Twitch">
                                    <i>
                                        <RiTwitchLine />
                                    </i>
                                </a>

                            </div>
                            <nav className='LeftBar-Taglist'>
                                <header>
                                    <h3>My Tags</h3>
                                    <i>
                                        <CgShapeHexagon />
                                    </i>
                                </header>
                                <ul>
                                    {
                                        tags.map((tag, id) => {
                                            return (
                                                <li key={id}>
                                                    <a href="#">#{tag}</a>
                                                </li>
                                            )
                                        })
                                    }
                                </ul>
                            </nav>
                        </nav>
                        <div className={More ? 'LeftBar-Social' : 'LeftBar-Social Hidden '}>
                            <a href="/Twitter">
                                <i>
                                    <IoLogoTwitter />
                                </i>
                            </a>
                            <a href="/Facebook">
                                <i>
                                    <IoLogoFacebook />
                                </i>
                            </a>
                            <a href="/Github">
                                <i>
                                    <IoLogoGithub />
                                </i>
                            </a>
                            <a href="/Instagram">
                                <i>
                                    <RiInstagramFill />
                                </i>
                            </a>
                            <a href="/Twitch">
                                <i>
                                    <RiTwitchLine />
                                </i>
                            </a>

                        </div>
                    </div>
                </div>
                <div className='Hamburger Overlay'>

                </div>
            </div>
        }
    </>
}

export default LeftSidebar