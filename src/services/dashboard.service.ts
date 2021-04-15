import api from "../api";

const fetchDashboard = async () => {
  const res = await api.get('/dashboard');
  
  return res.data;
};

const DashboardService = {
  fetchDashboard,
};

export default DashboardService;
