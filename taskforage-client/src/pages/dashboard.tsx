import { Link } from "react-router";

const Dashboard = () => {
    return (
        <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-2xl font-bold">
         Dashboard
        </h1>
        <Link to="/login" className="text-blue-600 underline">
        Logout (temporary)
        </Link>
        </div>
    )
}

export default Dashboard;