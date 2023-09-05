import styles from "./navbar.module.css";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Image from "next/image";
import { magic } from "../../lib/magic-client";


const Navbar = () => {
  const [username, setUsername] = useState("");
    const router = useRouter();
    useEffect(() => {
      async function getUsername() {
        try {
          const { email, issuer } = await magic.user.getMetadata();
          const didToken=await magic.user.getIdToken();
          console.log({didToken});
          if (email) {
            setUsername(email);
          }
        } catch (error) {
          console.log("Error retrieving email:", error);
        }
      }
      getUsername();
    }, []);

    const handleOnClickHome = (e) => {
      e.preventDefault();
      router.push("/");
    };
  
    const handleOnClickMyList = (e) => {
      e.preventDefault();
      router.push("/browse/my-list");
    };

    const handleSignout = async (e) => {
      e.preventDefault();
  
      try {
        await magic.user.logout();
        console.log(await magic.user.isLoggedIn());
        router.push("/login");
      } catch (error) {
        console.error("Error logging out", error);
        router.push("/login");
      }
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
              <a onClick={handleSignout}>
                  <span className={styles.linkName}>Sign out</span>
                </a>
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