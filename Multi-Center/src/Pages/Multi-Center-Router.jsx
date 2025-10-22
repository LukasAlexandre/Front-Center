import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import WelcomePage from "./Welcome/WelcomePage.jsx";
import DashboardGestor from "./DashboardGestor/DashboardGestor.jsx";
import TelaLogin from "./Login/TelaLogin.jsx";

function AppRoutes() {
	return (
		<Routes>
			<Route path="/welcome" element={<WelcomePage />} />
			<Route path="/dashboard" element={<DashboardGestor />} />
			<Route path="/" element={<Navigate to="/welcome" replace />} />
			<Route path="/login" element={<TelaLogin />} />
			<Route path="*" element={<div>Página não encontrada</div>} />
		</Routes>
	);
}

export default AppRoutes;