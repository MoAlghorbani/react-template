import { type RouteObject } from "react-router";
import { HomePage } from "./features/home/route";
import { ReactRouterPage } from "./features/react-router/route";

export const routes: RouteObject[] = [
    {
        path: "/",
        // element: <HomePage/>,
        Component: HomePage,
    },
    {
        path: "/react-router",
        Component: ReactRouterPage,
        loader: loader
    },
]

async function loader({ params }) {
    return { message: "Hello, world!" };
}