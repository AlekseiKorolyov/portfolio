import './App.css'
import {Header} from "./layout/header/Header.tsx";
import {About} from "./layout/sections/about/About.tsx";
import {Stack} from "./layout/sections/stack/Stack.tsx";
import {Projects} from "./layout/sections/projects/Projects.tsx";

function App() {
    return (
        <div className="App">
            <Header/>
            <About/>
            <Stack/>
            <Projects/>
        </div>
    )
}

export default App
