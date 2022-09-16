import {lazy} from "react";

export const MainPageAsync = lazy(() => new Promise(resolve => {
    // @ts-ignore
    // I will remove the promises when I deploy the project to the server. Just a simulated boot
    setTimeout(() => resolve(import('./MainPage')), 1500)
}))
