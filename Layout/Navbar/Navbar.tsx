import React from 'react'

import styles from './Navbar.module.css'
import Link from 'next/link'


const NavLinks = [
    {
        LinkText: "Popular",
        LinkTo: "/Home",
    }

]

const Navbar = () => {
    return (
        <nav className={styles.NavbarMain}>
            <Link href={"/"}>
                <img src="/assets/mainLogo.jpg" alt="Logo" />
            </Link>

            <div className={styles.NavLinks}>
                {
                    NavLinks.map((I) => (
                        <Link 
                            href={I.LinkTo}
                            key={I.LinkText}
                            className={styles.NavLink}
                        >
                            {I.LinkText}
                        </Link>
                    ))
                }
            </div>




        </nav>
    )
}

export default Navbar
