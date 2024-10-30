import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import HomePage from "../Pages/HomePage/HomePage";
import DesignArtifacts from "../Pages/DesignArtifacts/DesignArtifacts";
import Interview1 from "../Pages/DesignArtifacts/Interviews/Interview1";
import Interview2 from "../Pages/DesignArtifacts/Interviews/Interview2";
import Interview3 from "../Pages/DesignArtifacts/Interviews/Interview3";
import Interview4 from "../Pages/DesignArtifacts/Interviews/Interview4";
import Interview5 from "../Pages/DesignArtifacts/Interviews/Interview5";
import Interview6 from "../Pages/DesignArtifacts/Interviews/Interview6";
import Persona1 from "../Pages/DesignArtifacts/Personas/Persona1";
import Persona2 from "../Pages/DesignArtifacts/Personas/Persona2";
import Persona3 from "../Pages/DesignArtifacts/Personas/Persona3";
import Persona4 from "../Pages/DesignArtifacts/Personas/Persona4";
import Persona5 from "../Pages/DesignArtifacts/Personas/Persona5";
import Persona6 from "../Pages/DesignArtifacts/Personas/Persona6";
import Scenario1 from "../Pages/DesignArtifacts/Scenarios/Scenario1";
import Scenario2 from "../Pages/DesignArtifacts/Scenarios/Scenario2";
import Scenario3 from "../Pages/DesignArtifacts/Scenarios/Scenario3";
import Scenario4 from "../Pages/DesignArtifacts/Scenarios/Scenario4";
import Scenario5 from "../Pages/DesignArtifacts/Scenarios/Scenario5";
import Scenario6 from "../Pages/DesignArtifacts/Scenarios/Scenario6";
import Scenario7 from "../Pages/DesignArtifacts/Scenarios/Scenario7";
import Scenario8 from "../Pages/DesignArtifacts/Scenarios/Scenario8";
import Scenario9 from "../Pages/DesignArtifacts/Scenarios/Scenario9";
import Scenario10 from "../Pages/DesignArtifacts/Scenarios/Scenario10";
import Scenario11 from "../Pages/DesignArtifacts/Scenarios/Scenario11";
import Scenario13 from "../Pages/DesignArtifacts/Scenarios/Scenario13";
import Scenario14 from "../Pages/DesignArtifacts/Scenarios/Scenario14";
import Scenario12 from "../Pages/DesignArtifacts/Scenarios/Scenario12";
import Scenario15 from "../Pages/DesignArtifacts/Scenarios/Scenario15";
import Scenario16 from "../Pages/DesignArtifacts/Scenarios/Scenario16";
import Scenario17 from "../Pages/DesignArtifacts/Scenarios/Scenario17";
import Scenario18 from "../Pages/DesignArtifacts/Scenarios/Scenario18";
import UserStories from "../Pages/DesignArtifacts/UserStories/UserStories";
import Features from "../Pages/DesignArtifacts/Features/Features";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children: [
        {path: "", element: <HomePage />},
        {path: "design", element: <DesignArtifacts />},
        {path: "interview1", element: <Interview1 />},
        {path: "interview2", element: <Interview2 />},
        {path: "interview3", element: <Interview3 />},
        {path: "interview4", element: <Interview4 />},
        {path: "interview5", element: <Interview5 />},
        {path: "interview6", element: <Interview6 />},
        {path: "persona1", element: <Persona1 />},
        {path: "persona2", element: <Persona2 />},
        {path: "persona3", element: <Persona3 />},
        {path: "persona4", element: <Persona4 />},
        {path: "persona5", element: <Persona5 />},
        {path: "persona6", element: <Persona6 />},
        {path: "scenario1", element: <Scenario1 />},
        {path: "scenario2", element: <Scenario2 />},
        {path: "scenario3", element: <Scenario3 />},
        {path: "scenario4", element: <Scenario4 />},
        {path: "scenario5", element: <Scenario5 />},
        {path: "scenario6", element: <Scenario6 />},
        {path: "scenario7", element: <Scenario7 />},
        {path: "scenario8", element: <Scenario8 />},
        {path: "scenario9", element: <Scenario9 />},
        {path: "scenario10", element: <Scenario10 />},
        {path: "scenario11", element: <Scenario11 />},
        {path: "scenario12", element: <Scenario12 />},
        {path: "scenario13", element: <Scenario13 />},
        {path: "scenario14", element: <Scenario14 />},
        {path: "scenario15", element: <Scenario15 />},
        {path: "scenario16", element: <Scenario16 />},
        {path: "scenario17", element: <Scenario17 />},
        {path: "scenario18", element: <Scenario18 />},
        {path: "userstories", element: <UserStories />},
        {path: "featureslist", element: <Features />}
      ],
    },
  ]);