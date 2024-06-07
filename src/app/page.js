import Image from "next/image";
import styles from "./page.module.css";
import Herosection from "./components/Herosection";

export default function Home(){
  return <>
   <Herosection title={ "LET\'s WATCH MOVIE TOGETHER"} imageUrl= {"/home.svg" } />

  </>
}
