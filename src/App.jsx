import ThreeCanvas from "./ThreeCanvas";
import "./App.css";

function App() {
    return (
        <div className="App">
            <ThreeCanvas />
            <div className="overlay">
                <div className="bar">
                    <a href="#">Prosperity Pathways</a>
                    <div className="menu">
                        <span>About</span>
                        <span>Programs</span>
                        <span>Donate</span>
                        <span>Contact</span>
                    </div>
                </div>
                <div className="bar">
                    <div>
                        <p className="tilted">beyondtheScreen</p>
                        <p style={{ marginLeft: "40px" }}>Saad Amir</p>
                    </div>
                    <p>Socials</p>
                </div>
            </div>
        </div>
    );
}

export default App;
/*

<div class="overlay">
                <a href="#">
                    <b>Prosperity Pathways</b>
                </a>
                <a class="right" href="https://codesandbox.io/s/baked-ao-f5sgi">
                    /csb
                </a>

                <h2>Saad Amir | beyondtheScreen</h2>
            </div>

            */
