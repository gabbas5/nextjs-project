import styles from "@/app/styles/common.module.css"
import Image from "next/image";
const Page= async({params})=>{
    console.log(params);
    const id=params.id;

    const url=`https://netflix54.p.rapidapi.com/search/?query=stranger&offset=0&limit_titles=50&limit_suggestions=20&lang=en`
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
         // console.log(mainData);
           const newData=mainData.filter((curElement)=>{
            return( curElement.summary.id==id);
           })
         console.log(newData)
         
    return <>
    <div className={styles.container}>
        <h2 className={styles.movie_title}> Netflex \ <spa>{newData[0].jawSummary.type}</spa></h2>
        <div className={styles.card_section}>
            <div >
             <Image src={newData[0].jawSummary.backgroundImage.url} width={600} height={300} alt={newData[0].jawSummary.title}/>
            </div>
           <div>
            <h1>{newData[0].jawSummary.title}</h1>
            <p> {newData[0].jawSummary.synopsis}</p>
           </div>
        </div>
    </div>
    
    </>
}
export default Page;