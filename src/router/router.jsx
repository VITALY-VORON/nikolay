import { createBrowserRouter } from "react-router-dom";
import Layout from "../pages/layout";
import Prew from "../pages/Prew";
import Catalog from "../pages/catalog";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            { path: "/", element: <Prew /> },
            { path: "/catalog", element: <Catalog />}
        ]
    }
])