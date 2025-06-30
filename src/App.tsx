import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './sections/Home';
import Badges from './sections/Badges';
import InfoBox from './sections/InfoBox';
import Projects from './sections/Projects';
import SideBar from './sections/SideBar';
import ProjectsPage from './sections/ProjectsPage';
import './App.css';
import './index.css';
import TrailerPage from './sections/TrailerPage';

const MainPage: React.FC = () => {
    return (
        <div
            style={{
                backgroundImage: "url('/lightblue.jpg')",
                backgroundPosition: 'center center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundAttachment: 'fixed',
            }}
        >
            <div className="vertical-line ">
                <section className="content">
                    <div>
                        <section id="home" className="m-6 pr-0">
                            <Home />
                        </section>

                        <div className="xxl:flex xxl:flex-row-reverse pr-3">
                            <section id="sidebar" className="pl-3">
                                <SideBar />
                            </section>
                            <div className="pb-3 pt-6 pl-3">
                                <section id="badges" className="pb-6">
                                    <Badges />
                                </section>

                                <section id="infobox" className="pb-6">
                                    <InfoBox />
                                </section>

                                <section id="projects" className="">
                                    <Projects />
                                </section>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

const App: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/projects" element={<ProjectsPage />} />
                <Route path="/trailer/:projectName" element={<TrailerPage />} />
            </Routes>
        </Router>
    );
};

export default App;
