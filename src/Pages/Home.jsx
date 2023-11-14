import Works from "../Components/Realisations/Works";
import ContactForm from "../Components/Contact/Contact";

function Home(){
    return(
        <>
        <section className="main-container">
        <div className="first-container">
        <Works/>
        </div>
        <div className="second-container">
        <ContactForm/>
        </div>
        </section>
        </>
    )
}

export default Home