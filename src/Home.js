import React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

import TabPanel from './TabPanel';

import './styles/Home.css';

export default () => {
    const [selectedTabIndex, setSelectedTabIndex] = React.useState(0);

    const handleSelectedTabIndexChange = (event, newValue) => {
        setSelectedTabIndex(newValue);
    };

    return (
        <>
            <div className="red">Jake Bender Portfolio</div>
            <Tabs value={selectedTabIndex} onChange={handleSelectedTabIndexChange}>
                <Tab label="Projects" />
                <Tab label="Resume" />
                <Tab label="About Me" />
            </Tabs>

            <TabPanel selectedTabIndex={selectedTabIndex} index={0}>
                Projects
            </TabPanel>
            <TabPanel selectedTabIndex={selectedTabIndex} index={1}>
                Resume
            </TabPanel>
            <TabPanel selectedTabIndex={selectedTabIndex} index={2}>
                About Me
            </TabPanel>
        </>
    );
};