import NavBar from './Navbar';
import'./style.css';
import Contact from '../Contacts/Contacts';
const Home = ()=>{
    return(
        <div className='container'>
            <header>
            <h1>Página inicial</h1>
            <NavBar/>
            </header>
            <section className='mainContainer'>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam tempora architecto quos vero, sed tenetur. Officiis consectetur et quidem vel velit mollitia quas, adipisci magni itaque iste maiores, blanditiis nesciunt?</p>
            </section>
            <footer>
                <Contact/>
            </footer>
        </div>
    )
}
export default Home;