import React from 'react';
import Home from './sections/Home';
import './App.css';
import Badges from './sections/Badges';
import InfoBox from './sections/InfoBox';
import Projects from './sections/Projects';
import SideBar from './sections/SideBar';
import './index.css';

const App: React.FC = () => {
    return (
        <div>
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

export default App;
