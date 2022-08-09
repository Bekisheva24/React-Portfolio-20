import { Routes, Route} from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Contacts  from "./Pages/Contacts/Contacs";
import Services from "./Pages/Services/Services";
import Notfound from "./Pages/Notfound/Notfound";

import './app.scss';


function App() {
  return (
    <div className="app">
      {/* {/* <header> */}
	  	<Home /> 
		  <Routes>
			{/* <Route path="" element={<Home />}></Route> */}
			<Route path="about" element={<About />}></Route>
			<Route path="services" element={<Services />}></Route>
			<Route path="contacts" element={<Contacts />}></Route>
			<Route path="*" element={<Notfound />}></Route>
		</Routes>
      {/* </header>  */}

	  {/* <main>
		<Routes>
			<Route path="*" element={<Home />}></Route>
			<Route path="about" element={<About />}></Route>
			<Route path="services" element={<Services />}></Route>
			<Route path="contacts" element={<Contacts />}></Route>
			<Route path="*" element={<Notfound />}></Route>
		</Routes>
	  </main> */}
    </div>
  );
}

export default App;
