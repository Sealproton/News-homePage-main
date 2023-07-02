import "./App.css";
import { Box } from "./components/Nav-box";
import { Navbar } from "./components/NavBar";
import { Content } from "./components/content";
import { useGlobalContext } from "./components/context";

function App() {
  const { openMenu, setOpenMenu } = useGlobalContext();
  return (
    <div>
      <div className="flex  relative flex-col w-full md:p-20">
        {openMenu && <Box />}
        <Navbar />
        <Content />
      </div>
    </div>
  );
}

export default App;
