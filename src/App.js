import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import Courses from './Pages/Courses';
import DegreePlan from './Pages/DegreePlan';
import Schedule from './Pages/Schedule';
import Grades from './Pages/Grades';
import Settings from './Pages/Settings';
import Help from './Pages/Help';
import Layout from './Layout';



function App() {
    return (
        <Router>
            <Routes>
                {/* Layout route that wraps all the pages */}
                <Route path="/" element={<Layout />}>
                    <Route index element={<HomePage />} />
                    <Route path="courses" element={<Courses />} />
                    <Route path="degree-plan" element={<DegreePlan />} />
                    <Route path="schedule" element={<Schedule />} />
                    <Route path="grades" element={<Grades />} />
                    <Route path="settings" element={<Settings />} />
                    <Route path="help" element={<Help />} />
                </Route>
            </Routes>
        </Router>
    );
}

export default App;