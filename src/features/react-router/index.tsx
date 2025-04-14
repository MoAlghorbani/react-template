import React from 'react'
import {
    Link,
    useLoaderData,
} from "react-router";
export const ReactRouterPage = () => {
    let data = useLoaderData();
    console.log("🚀 ~ ReactRouterPage ~ data:", data)

    return (
        <>
            <div>{data.message}</div>
            <Link to="/">Home</Link>
        </>
    )
}
