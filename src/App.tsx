import './App.css'
import {Header} from "./layout/header/Header.tsx";
import {About} from "./layout/sections/about/About.tsx";
import {Stack} from "./layout/sections/stack/Stack.tsx";
import {Projects} from "./layout/sections/projects/Projects.tsx";
import {Contact} from "./layout/sections/contact/Contact.tsx";
import {Footer} from "./layout/footer/Footer.tsx";

function App() {
    return (
        <div className="App">
            <Header/>
            <About />
            <Stack />
            <Projects />
            <Contact/>
            <Footer/>
        </div>
    )
}

export default App
