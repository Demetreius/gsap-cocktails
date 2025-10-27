import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import { ScrollTrigger, SplitText } from 'gsap/all'
import gsap from 'gsap'
import Cocktails from './components/Cocktails';


gsap.registerPlugin(ScrollTrigger, SplitText);

function App() {

    return (
        <main>
            <Navbar />
            <Hero/>
            <Cocktails />
            <About />
        </main>
    )
}

export default App
