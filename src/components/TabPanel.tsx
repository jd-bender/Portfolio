import { IParent } from "../interfaces";

interface ITabPanel extends IParent {
    index: number;
    activeTabIndex: number;
}

const TabPanel = ({ children, index, activeTabIndex }: ITabPanel) => (
    <div
        role="tabpanel"
        hidden={activeTabIndex !== index}
        className="mx-96 mt-20"
    >
        {activeTabIndex === index && children}
    </div>
);

export default TabPanel;
