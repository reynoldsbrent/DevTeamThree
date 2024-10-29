import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import HomePage from "../Pages/HomePage/HomePage";
import DesignArtifacts from "../Pages/DesignArtifacts/DesignArtifacts";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children: [
        {path: "", element: <HomePage />},
        {path: "design", element: <DesignArtifacts />}
      ],
    },
  ]);