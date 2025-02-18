import { Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Projects from "./pages/Projects";
import Home from "./pages/Home";

export default function AppRouter() {
    return (
        <div className={`flex flex-col min-h-screen bg-black`}>
            <Header />
            <main className="flex-grow w-full">
                <Routes>
                    <Route path="/" element={<Navigate to="/home" />}/>
                    <Route path="*" element={<Navigate to="/home" />}/>
                    <Route
                        path="/home"
                        element={
                                <Home/>
                        }
                    />
                    <Route path="/projects" element={<Projects/>} />
                </Routes>
            </main>
            <Footer/>
        </div>
    )
}