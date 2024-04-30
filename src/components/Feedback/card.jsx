import styles from "./css_feed.module.css"

function Card({qut,auth,tit,i}){
    return(
        
        <div className={styles.main}>
           
            <p>{qut}</p>
            <p>{auth}</p>
            <p>{tit}</p>
            <img src={"i"} alt="" />
            
           
        </div>
        
        
    )
}
export default Card;