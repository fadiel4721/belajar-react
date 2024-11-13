import { Route, Routes } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import HomePage from "../pages/HomePage";
import Pokemon from "../pages/Pokemon";
import Detail from "../pages/PokemonDetail";
import LoginPage from "../pages/LoginPage"; // Import LoginPage

export default function AppRoutes() {
  return (
    <Routes>
      {/* Route untuk login page */}
      <Route path="/login" element={<LoginPage />} />

      {/* Main layout dengan sub routing */}
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="pokemon" element={<Pokemon />} />
        <Route path="pokemon/:id" element={<Detail />} />
      </Route>
    </Routes>
  );
}
