import { Header } from "./components/Header/Header"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import ItemDetailContainer from "./components/itemDetailContainer/ItemDetailContainer"
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css"

function App() {


    return (
    <BrowserRouter>

    
        <Header/>


        <Routes>

            <Route path="/" element={ <ItemListContainer/>}></Route>

            <Route path="/products/:categoriaId" element={<ItemListContainer/>}></Route>

            <Route path="/detail/:itemId" element={<ItemDetailContainer/>}></Route>

            <Route path="*" element={ <Navigate to="/"/> }/>

        </Routes>

    </BrowserRouter>

    )

}

export default App
