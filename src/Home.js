import React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

import TabPanel from './TabPanel';

import Projects from './Projects';
import Resume from './Resume';
import AboutMe from './AboutMe';

import './styles/Home.css';

export default () => {
    const [selectedTabIndex, setSelectedTabIndex] = React.useState(0);

    const handleSelectedTabIndexChange = (event, newValue) => {
        setSelectedTabIndex(newValue);
    };

    return (
        <>
            <div className="header">Jake Bender Portfolio</div>
            <Tabs value={selectedTabIndex} onChange={handleSelectedTabIndexChange} variant="fullWidth">
                <Tab label="Projects" />
                <Tab label="Resume" />
                <Tab label="About Me" />
            </Tabs>

            <TabPanel selectedTabIndex={selectedTabIndex} index={0}>
                <Projects />
            </TabPanel>
            <TabPanel selectedTabIndex={selectedTabIndex} index={1}>
                <Resume />
            </TabPanel>
            <TabPanel selectedTabIndex={selectedTabIndex} index={2}>
                <AboutMe />
            </TabPanel>
        </>
    );
};