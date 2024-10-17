import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import './Layout.css'; // Add custom styles for the sidebar layout

const Layout = () => {
    // State to manage whether the sidebar is collapsed or expanded
    const [isCollapsed, setIsCollapsed] = useState(false);

    // Function to toggle the sidebar
    const toggleSidebar = () => {
        setIsCollapsed(!isCollapsed);
    };

    return (
        <div className="layout-container">
            {/* Collapsible Sidebar */}
            <div className={`sidebar ${isCollapsed ? 'collapsed' : ''}`}>
                {/* Collapse Button */}
                <button className="toggle-btn" onClick={toggleSidebar}>
                    {isCollapsed ? '>' : '<'}
                </button>

                {/* Menu will be hidden when collapsed */}
                {!isCollapsed && (
                    <ul className="menu-list">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/courses">Courses</Link></li>
                        <li><Link to="/degree-plan">Degree Plan</Link></li>
                        <li><Link to="/schedule">Schedule</Link></li>
                        <li><Link to="/grades">Grades</Link></li>
                        <li><Link to="/settings">Settings</Link></li>
                        <li><Link to="/help">Help</Link></li>
                    </ul>
                )}
            </div>

            {/* Main content */}
            <div className="content">
                <header className="layout-header">
                    <h1>
                        <span className="highlight-uf">UF</span> Course Planner
                    </h1>
                </header>

                {/* This is where the routed page content will be rendered */}
                <main className="layout-content">
                    <Outlet />
                </main>

                <footer className="layout-footer">
                    <p>&copy; 2024 UF Course Planner</p>
                </footer>
            </div>
        </div>
    );
};

export default Layout;
