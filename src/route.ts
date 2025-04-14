import { type RouteObject } from "react-router";
import { HomePage } from "./features/home";
import { ReactRouterPage } from "./features/react-router";

export const routes: RouteObject[] = [
    {
        path: "/",
        Component: HomePage,
    },
    {
        path: "/react-router",
        Component: ReactRouterPage,
        loader: loader
    },
]

async function loader({ }) {
    return { message: "Hello, world!" };
}