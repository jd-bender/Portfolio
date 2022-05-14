import React from 'react';
import {createRoot} from 'react-dom/client';

import Home from './Home';

const render = (template) => {
    const app = document.getElementById('app');
    const root = createRoot(app);
    root.render(template);
};

render(<Home />);