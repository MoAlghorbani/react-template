import { type RouteObject } from "react-router";
import { HomePage } from "./features/home/route";
import { ReactRouterPage } from "./features/react-router/route";

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