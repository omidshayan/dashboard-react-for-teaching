import { useRoutes } from "react-router-dom";
import "./App.css";
import routes from "./routes/routes";
import HeaderTop from "./components/headerTop/HeaderTop";
import Sidebar from "./components/sidebar/Sidebar";

function App() {
  let router = useRoutes(routes);
  return (
    <>
      <HeaderTop />
      <div className="mainContainer">
        <Sidebar />
        {router}
      </div>
    </>
  );
}

export default App;
