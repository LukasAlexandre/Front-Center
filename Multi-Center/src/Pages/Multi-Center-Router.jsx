import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Welcome from "./Welcome/Welcome.jsx";
import DashboardGestor from "./DashboardGestor/DashboardGestor.jsx";

function AppRoutes() {
	return (
		<Routes>
			<Route path="/welcome" element={<Welcome />} />
			<Route path="/dashboard" element={<DashboardGestor />} />
			<Route path="/" element={<Navigate to="/welcome" replace />} />
			<Route path="*" element={<div>Página não encontrada</div>} />
		</Routes>
	);
}

export default AppRoutes;