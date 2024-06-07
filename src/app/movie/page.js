import Link from "next/link";
import MovieCard from "../components/MovieCard";
import styles from "@/app/styles/common.module.css"

const Movie=async()=>{
  await new Promise(resolve=>setTimeout(resolve,2000));
   
    const url =process.env.RAPID_KEY;
        const options = {
      method: 'GET',
      headers: {
        'x-rapidapi-key': '6e77915042mshd995391acd98c13p117dc7jsn6860f60708d8',
        'x-rapidapi-host': 'netflix54.p.rapidapi.com'
      }
    }    
    
        const response = await fetch(url, options);
        const data = await response.json();
        const mainData=data.titles;
             
           
    return<>
    <section className={styles.moveiSection}>
        <div  className={styles.container}>
        <h1>Series &Movies</h1>
        <div className={styles.card_section}>

    {
        mainData.map((curElement)=>{
              
         return <MovieCard  key={curElement.summary.id } {...curElement}/>
        })  
     }
     </div>
    </div>
    </section>
    
    </>
}
export default Movie; 