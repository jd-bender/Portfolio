"use client";
import { useState, SyntheticEvent } from "react";
import { Tabs, Tab } from "@mui/material";

import TabPanel from "./TabPanel";

import useQueryParams from "../hooks/useQueryParams";

const Navigation = () => {
    const [params, setParam] = useQueryParams();

    let tab = 0;

    if (params.get("tab")) {
        tab = Number(params.get("tab"));
    } else {
        setParam("tab", tab);
    }

    const [activeTab, setActiveTab] = useState(tab);

    const handleActiveTabChange = (
        _event: SyntheticEvent,
        newActiveTabIndex: number,
    ) => {
        setActiveTab(newActiveTabIndex);
        setParam("tab", newActiveTabIndex);
    };

    return (
        <>
            <Tabs value={activeTab} onChange={handleActiveTabChange} centered>
                <Tab label="About Me" />
                <Tab label="Projects" />
            </Tabs>

            <TabPanel index={0} activeTabIndex={activeTab}>
                <p>about me page</p>
            </TabPanel>
            <TabPanel index={1} activeTabIndex={activeTab}>
                <p>projects page</p>
            </TabPanel>
        </>
    );
};

export default Navigation;
