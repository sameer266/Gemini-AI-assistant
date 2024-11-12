import { MyProvider } from "./apiData/ContextData.js";
import Main from "./components/main/Main.jsx";
import Slidebar from "./components/slidebar/Slidebar.jsx";


function App() {




  
  return (
   <>
<MyProvider>   
<Slidebar/>
<Main/>
</MyProvider>


   </>
  );
}

export default App;
