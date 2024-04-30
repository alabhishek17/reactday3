import hero from "./css_hero.module.css"
// import Image from "./src/Imge/img.jpg";
function Hero() {
    return (
        <div>
            <section className={hero.main}>
                <div className={hero.submain}>
                    <h1>Let us find your</h1>
                    <h2 style={{ color: "#E11D45" }}>Forever Food.</h2>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                    <p>Nesciunt illo tenetur fuga ducimus numquam ea!</p>
                    <div className={hero.Btn}>
                        <button style={{backgroundColor:"#E11D45", color:"#fff"}}>Search Now</button>
                        <button style={{backgroundColor:"#fff",color:"#E11D45"}}>Know More</button>
                    </div>
                </div>

            </section>

            
        </div>
    )
}

export default Hero;