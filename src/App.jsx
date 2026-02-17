import About from "./components/About"
import Form from "./components/Form"
import Navbar from "./components/Navbar"

const App = () => {
    return (
        <div>
            <Navbar />
            <main>
                <About />
                <Form />
            </main>
        </div>
    )
}

export default App