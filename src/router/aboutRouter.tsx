import About from "../pages/About";


export const AboutRouter = {
    path: '/about',
    element: <About />,
    children: [
        { index: true, element: <About /> },
    ],
};