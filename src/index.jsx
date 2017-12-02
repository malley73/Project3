import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import { store } from './Auth/_helpers';
import { App } from './App';

// setup fake backend
import { configureFakeBackend } from './Auth/_helpers';
configureFakeBackend();

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('app')
);