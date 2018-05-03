import React from 'react'
import registerServiceWorker from './registerServiceWorker';
import './css/main.css';
import './css/media-queries.css';
import { render } from 'react-dom'
import App from './components/App'

render(
    <App />,
    document.getElementById('root')
)

registerServiceWorker();
