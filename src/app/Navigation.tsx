"use client";
import { useState, SyntheticEvent } from "react";
import { Tabs, Tab } from "@mui/material";

const Navigation = () => {
    const [activeTab, setActiveTab] = useState(0);

    const handleActiveTabChange = (_event: SyntheticEvent, newTab: number) => {
        setActiveTab(newTab);
    };

    return (
        <>
            <Tabs value={activeTab} onChange={handleActiveTabChange}>
                <Tab label="About Me" />
                <Tab label="Projects" />
            </Tabs>
        </>
    );
};

export default Navigation;
