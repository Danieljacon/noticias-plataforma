import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";

const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/news/:slug" element={<Home />} />
        </Routes>
    )
}

export default Router;