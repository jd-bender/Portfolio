import { IParent } from "../interfaces";

interface ITabPanel extends IParent {
    name: string;
    activeTabName: string;
}

const TabPanel = ({ children, name, activeTabName }: ITabPanel) => (
    <div
        role="tabpanel"
        hidden={activeTabName !== name}
        className="mx-96 mt-20"
    >
        {activeTabName === name && children}
    </div>
);

export default TabPanel;
