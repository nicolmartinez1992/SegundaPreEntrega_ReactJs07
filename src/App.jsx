import NavBar from "./components/nav-bar";
import ItemListContainer from "./components/item-list-container";
import ItemDetailContainer from "./components/item-detail-container"
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
        <NavBar />
        <Routes>
        <Route path="/" element={<ItemListContainer/>}></Route>
        <Route path="/category/:categoryId" element={<ItemListContainer/>}></Route>
        <Route path="/item/:itemId" element={<ItemDetailContainer/>}></Route>
        </Routes>
        </BrowserRouter>
    );
}

export default App;

