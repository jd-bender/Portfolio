"use client";
import { useState, SyntheticEvent } from "react";
import { Tabs, Tab } from "@mui/material";

import TabPanel from "./TabPanel";
import AboutMe from "./AboutMe";
import Projects from "./Projects";
import Contact from "./Contact";

import useQueryParams from "../hooks/useQueryParams";

const Navigation = () => {
    const [params, setParam] = useQueryParams();
    const [activeTab, setActiveTab] = useState(params.get("tab") || "about-me");

    const handleActiveTabChange = (
        _event: SyntheticEvent,
        newActiveTabName: string,
    ) => {
        setActiveTab(newActiveTabName);
        setParam("tab", newActiveTabName);
    };

    return (
        <>
            <Tabs value={activeTab} onChange={handleActiveTabChange} centered>
                <Tab label="About Me" value="about-me" />
                <Tab label="Projects" value="projects" />
                <Tab label="Contact" value="contact" />
            </Tabs>

            <TabPanel name="about-me" activeTabName={activeTab}>
                <AboutMe />
            </TabPanel>
            <TabPanel name="projects" activeTabName={activeTab}>
                <Projects />
            </TabPanel>
            <TabPanel name="contact" activeTabName={activeTab}>
                <Contact />
            </TabPanel>
        </>
    );
};

export default Navigation;
