import { DarkThemeToggle,CustomFlowbiteTheme, Flowbite, Button  } from "flowbite-react";
import Navbar from "./components/Navbar";
import Flags from "./components/Flags";
function App() {
  const customTheme: CustomFlowbiteTheme = {
    button: {
      color: {
        primary: "bg-red-600 hover:bg-red-600",
      },
    },
  };
  return (<>
  <Navbar/>
    <Flags/>
    <main className="flex min-h-screen items-center justify-center gap-2 dark:bg-gray-800">
      
    </main>
    </>
  );
}

export default App;
