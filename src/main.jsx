import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "./pages/Home.jsx";
import RootError from "./error/RootError.jsx";
import SidebarProvider, { SidebarContext } from "./contexts/SidebarContext.jsx";
import ProductProvider from "./contexts/ProductContext.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Home,
    ErrorBoundary: RootError,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <SidebarProvider>
      <ProductProvider>
        <RouterProvider router={router}></RouterProvider>
      </ProductProvider>
    </SidebarProvider>
  </StrictMode>
);
