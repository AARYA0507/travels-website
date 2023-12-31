import React,{useState} from 'react'
import './navbar.css'
import{ MdOutlineTravelExplore} from 'react-icons/md'
import{ AiFillCloseCircle} from 'react-icons/ai'
import{ TbGridDots} from 'react-icons/tb'


const Navbar = ()=>{
    const[active, setActive] = useState('navbar')
    // function to toggle bar
    const showNav = ()=>{
        setActive('navBar activeNavbar')
    }
    // function to remove toggle bar
    const removeNavbar = ()=>{
        setActive('navBar ')
    }
    return(
        <section className='navbarSection'>
            <header className='header flex'>
                <div className='logodiv'>
                    <a href='#' className='logo flex'>
                        <h1>< MdOutlineTravelExplore className="icon"/>Travel.</h1>

                    </a>

                </div>
                <div className={active}>
                    <ul className="navLists flex">
                        <li className="navItem">
                        <a href='#' className='navLink'>Home </a>
                            

                        </li>
                        <li className="navItem">
                        <a href='#' className='navLink'>Packages</a>
                            

                        </li>
                        <li className="navItem">
                        <a href='#' className='navLink'>Shop </a>
                            

                        </li>
                        <li className="navItem">
                        <a href='#' className='navLink'>About</a>
                            

                        </li>
                        <li className="navItem">
                        <a href='#' className='navLink'>Pages</a>
                            

                        </li>
                        <li className="navItem">
                        <a href='#' className='navLink'>News </a>
                            

                        </li>
                        <li className="navItem">
                        <a href='#' className='navLink'>Contact </a>
                            

                        </li>
                         
                        <button className="btn">
                            Book Now
                        </button> 
                        

                    </ul>
                    <div className="closeNavbar">
                            <AiFillCloseCircle className="icon"/>
                        </div>

                </div>
                <div onClick={showNav}
                 className="togglebar">
                    <TbGridDots className="icon"/>

                </div>


            </header>
        </section>
    )
}
export default Navbar