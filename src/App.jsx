import { react } from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import ThreeCanvas from "./ThreeCanvas";
import Screen from "./Screen";
import About from "./Pages/About";
import Programs from "./Pages/Programs";
import "./App.css";

function App() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: (
                <div className="App">
                    <Outlet />
                    <ThreeCanvas />
                    <Screen />
                </div>
            ),
            children: [
                {
                    path: "/about",
                    element: <About />,
                },
                {
                    path: "/programs",
                    element: <Programs />,
                },
            ],
        },
    ]);

    return <RouterProvider router={router} />;
}

export default App;
