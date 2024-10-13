import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import './Layout.css'; // Optional for custom styling

const Layout = () => {
    return (
        <div className="layout-container">
            <header className="layout-header">
                <h1>UF Course Planner</h1>

                {/* Navigation Menu */}
                <nav className="menu">
                    <ul>
                        <li><Link to="/">Home</Link></li> {/* Home link */}
                        <li><Link to="/courses">Courses</Link></li>
                        <li><Link to="/degree-plan">Degree Plan</Link></li>
                        <li><Link to="/schedule">Schedule</Link></li>
                        <li><Link to="/grades">Grades</Link></li>
                        <li><Link to="/settings">Settings</Link></li>
                        <li><Link to="/help">Help</Link></li>
                    </ul>
                </nav>
            </header>

            {/* This is where the routed page content will be rendered */}
            <main className="layout-content">
                <Outlet />
            </main>

            <footer className="layout-footer">
                <p>&copy; 2024 UF Course Planner</p>
            </footer>
        </div>
    );
};

export default Layout;