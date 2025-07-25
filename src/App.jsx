import './App.css'
import { ThemeProvider } from 'styled-components';
import { theme } from './utils/themes';
import {BrowserRouter as Router,Routes,Route} from "react-router";
import NavbarLayout from "./layouts/NavbarLayout";
import Home from"./pages/Home";
import About from "./pages/About";
import Categories from "./pages/Categories";
import Contact from './pages/Contact';
import SubCategory from './pages/SubCategory';
import MainCategory from './pages/MainCategory';
function App() {

  return <ThemeProvider theme={theme}>
    <Router>
      <Routes>
        {/* Define your routes here*/}
        <Route element={<NavbarLayout/>}>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/categories" element={<Categories/>}/>
        <Route path="/categories/:mainCategory" element={<MainCategory/>}/>
        <Route path="/categories/:subCategory" element={<SubCategory/>}/>
        </Route>
      </Routes>
    </Router>

  </ThemeProvider>
  
}

export default App;
