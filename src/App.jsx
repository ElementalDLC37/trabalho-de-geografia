import Apresentation from "./pages/Apresentation";
import Content from "./pages/Content";

import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";

import './global.scss'

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Apresentation />
    },
    {
      path: "/content",
      element: <Content />
    },
  ])

  return (
    <Content />
  )
}

export default App
