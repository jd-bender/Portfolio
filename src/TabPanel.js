import React from 'react';

export default (props) => {
    const {children, selectedTabIndex, index} = props;
    
    return (
        <div hidden={selectedTabIndex !== index}>
            {selectedTabIndex === index && (
                children
            )}
        </div>
    );
};