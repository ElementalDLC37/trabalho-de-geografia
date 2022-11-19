import Apresentation from "./pages/Apresentation";
import PresentingPage from "./pages/PresentingPage";

import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";

import './global.scss'


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Apresentation />
    },
    {
      path: "/presenting-page",
      element: <PresentingPage />
    },
  ])

  return (
    <PresentingPage />
  )
}

export default App
