import { BrowserRouter, Routes, Route } from "react-router-dom";
import DashboardPage from './pages/Dashboard';
import { SignInPage } from "./pages/Sign-In";
import { Sidebar } from "./components/layout/Sidebar";
import { HistoryPage } from "./pages/Historique";
import ActuatorsPage from "./pages/Actionneurs";
import StatisticsPage from "./pages/Statistiques";
import HomePage from "./pages/HomePage";
import EmployeeManagement from "./pages/Employe/GestionEmploye";
import AjouterEmploye from "./pages/Employe/AjoutEmploye";

function AppLayout() {
    return (
        <div className="flex min-h-screen bg-gray-50">
            <Sidebar />
            <main className="flex-1 overflow-y-auto">
                <div className="p-4 md:p-6">
                    <Routes>
                        <Route path="/dashboard" element={<DashboardPage />} />
                        <Route path="/sign-in" element={<SignInPage />} />
                        <Route path="/history" element={<HistoryPage />} />
                        <Route path="/actionneur" element={<ActuatorsPage />} />
                        <Route path="/stat" element={<StatisticsPage />} />
                        <Route path="/gestionemploye" element={<EmployeeManagement/>} />
                        <Route path="/ajouteremploye" element={< AjouterEmploye/>} />
                    </Routes>
                </div>
            </main>
        </div>
    );
}

// App principale
export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/*" element={<AppLayout />} />
            </Routes>
        </BrowserRouter>
    );
}
