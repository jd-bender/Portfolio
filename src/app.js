import React from 'react';
import {createRoot} from 'react-dom/client';
import {Provider} from 'react-redux';

import store from './store';
import Home from './Home';

const render = (template) => {
    const app = document.getElementById('app');
    const root = createRoot(app);
    root.render(template);
};

const renderApp = () => {
        const appTemplate = (
            <Provider store={store}>
                <Home />
            </Provider>
        );
        
        render(appTemplate);
};

renderApp();