import './index.css';
import App from './App';
import Loader from "./components/UI/Loader";
import {Suspense} from "react";
import {createRoot} from "react-dom/client";


const htmlRoot = document.getElementById('root')
const root = createRoot(htmlRoot!);
root.render(
    <Suspense fallback={<Loader />}>
        <App />
    </Suspense>
);

