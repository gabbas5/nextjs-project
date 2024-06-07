import styles from "@/app/styles/navbar.module.css"
import Link from "next/link";
import Image from "next/image";
const Header=()=>{
    return <>
    <header className={styles.main_header}>
        <div className={styles.navbar_brand}>
        <Link href={"/"}>
        <Image src="/logo.png" alt= "" height={40} width={150}/> </Link>
        </div>
    </header>
    </>
}
export default Header;