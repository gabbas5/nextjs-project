import styles from "@/app/styles/common.module.css"
import Link from "next/link";
import Image from "next/image";
const MovieCard = (curElement) => {
   const { id, type } = curElement.summary;
   const { synopsis, title, backgroundImage } = curElement.jawSummary;
   return <>
      <div className={styles.card}>
         <div className={styles.card_image}>
            <Image src={backgroundImage.url} alt={title} width={260} height={200} />
         </div>
         <div className={styles.card_data}>
            <h2>{title.substring(0, 18)}</h2>
            <p>
               {`${synopsis.substring(0, 66)}...`}
            </p>
            <Link href={`/movie/${id}`}>
               <button>Read more</button>
            </Link>
         </div>
      </div>

   </>
}
export default MovieCard;