import herostyles from "@/app/styles/herosection.module.css";
import styles from "@/app/styles/common.module.css";
import Image from "next/image";
import Link from "next/link";
import { Mulish } from "next/font/google";
const mulish=Mulish({
  weight:"400",
  subsets:["latin"],
  display:"swap"
})

const Herosection=({title,imageUrl})=>{
    return<>
    <main className={herostyles.main_section}>
        <div className={styles.containter}>
            <div className={styles.grid_two_section}>
                <div className={herostyles.hero_content} >
                    <h1> {title}</h1>
                    <p> From award winning dramas to blockbustor action movies,we&apos;ve got you covered.Browse our section of the latest
                        and the grestest movies and find your new favourite today. 
                    </p>
                    <Link href="/movie">
                    <button className={mulish.className}>Explore Movies</button></Link>
                </div>
                <div className={herostyles.hero_image}>
                    <Image src={imageUrl} height={60} width={500} alt="watchinf netflix" />

                </div>
            </div>

        </div>
        <div className={herostyles["custom-shape-divider-bottom-1717493930"]}>
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path
         d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
         className={styles["shape-fill"]}></path>
    </svg>
</div>

    </main>
    </>
}
export default Herosection;