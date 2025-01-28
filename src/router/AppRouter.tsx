import {routesConfig} from './routesConfig';
import {Route, Routes} from "react-router-dom";
import {Suspense} from "react";
import Loader from "../components/UI/Loader";
import About from "../pages/About";

export function AppRouter() {
    return (
        <Suspense fallback={<Loader/>}>
            <Routes>
                <Route

                    index
                    element={<About/>}
                />
                {routesConfig.map((route) => (
                    <Route key={route.path} path={route.path} element={route.element}>
                        {route.children?.map((child) => (
                            <Route {...child} key={child.element.key} />
                        ))}
                    </Route>
                ))}
            </Routes>
        </Suspense>
    );
}