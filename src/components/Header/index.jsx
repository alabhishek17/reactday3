import Index from "../Navabar/navbar.jsx";
import Hero from "../Hero/hero.jsx";
import Split from "../Split/split.jsx";
import Feedback from "../Feedback/quote.jsx"
import Footer from "../Footer/footer.jsx"

function Header(){
    return (<div>
     <Index/>
     <Hero/>
     <Split/>
     <Feedback/>
     <Footer/>
    </div>)
}
export default Header;