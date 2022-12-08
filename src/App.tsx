import { createMemoryRouter, RouterProvider } from "react-router-dom";
import { HomePage } from "./pages/home/HomePage";
import classes from "./App.module.scss";
import { NavBar } from "./components/widgets/navbar/NavBar";

const router = createMemoryRouter([
    {
        path: "/",
        element: <HomePage />,
        index: true
    },
    {
        path: "about"
    }
]);

export const App = () => {
    return (
        <div className={classes.app}>
            <NavBar />
            <RouterProvider router={router} />
        </div>
    );
}