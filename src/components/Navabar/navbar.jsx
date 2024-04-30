import "./style.css"
import styles from "./css_style.module.css"
import Img from "../../assets/Myimg/my_img"

// import Footer from "../Footer"

function Index(){
    const navItem=["Home","Quote","Food","Resturnt"];

    return (
      <div className={styles.main} style={{
      backgroundColor:"#111827",
      color:"#fff",
      padding:"10px 20px"
      }}>
        <nav className="navbarIteam">
       <section className={styles.sectionContaine}>
        <img src={Img} alt="logo" />
        <h3>Geeks_food</h3>
       </section>
       <section>
        <ul className={styles.sectioUi}>
          {
            navItem.map((item,index)=>(
              <li key={index} className={styles.navLi}>{item}</li>
            ))
          }
        </ul>
       </section>
       <section className={styles.sectionContaine}>
        <button className={styles.Btn}>Get started</button>
       </section>
       </nav>
      </div> 
    )
}

export default Index;