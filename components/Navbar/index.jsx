import styles from "./navbar.module.css";
import { useRouter } from "next/router";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";


const Navbar = (props) => {
    const {username} = props;
    const router = useRouter();

    const handleOnClickHome = (e) => {
      e.preventDefault();
      router.push("/");
    };
  
    const handleOnClickMyList = (e) => {
      e.preventDefault();
      router.push("/browse/my-list");
    };

    const[dropdown, setDropdown]= useState(false);

    const handleSignOut=(e)=>{
        e.preventDefault();
        setDropdown(!dropdown);
    }
    return ( 
    
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <a className={styles.logoLink}>
        <div className={styles.logoWrapper}>
            <Image
              src="/static/netflix.svg"
              alt="Netflix logo"
              width={200}
              height={60}
            />
          </div>
        </a>
        <ul className={styles.navItems}>
        <li className={styles.navItem} onClick={handleOnClickHome}>
            Home
          </li>
          <li className={styles.navItem2} onClick={handleOnClickMyList}>
            My List
          </li>
        </ul>
        <nav className={styles.navContainer}>
            <div>
            <button className={styles.usernameBtn} onClick={handleSignOut}>
              <p className={styles.username}>{username}</p>
              <Image
                src="/static/expand.svg"
                alt="Expand more"
                width={24}
                height={24}
              />
            </button>

           {dropdown &&( <div className={styles.navDropdown}>
              <div>
              <Link href="/login">
                  <span className={styles.linkName}>Sign out</span>
                </Link>
                <div className={styles.lineWrapper}></div>
              </div>
            </div>)}
          </div>
          </nav>
      </div>
    </div>
     );
}
 
export default Navbar;