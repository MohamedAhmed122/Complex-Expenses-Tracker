import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import  {Provider}  from './app/Context/Context';
import { SpeechProvider } from '@speechly/react-client'

const appId ='025a8282-9c11-49b7-8b98-306c2e06ea56'

ReactDOM.render(
    <SpeechProvider language='en-US' appId={appId}>
        <Provider>
            <App />
        </Provider>
    </SpeechProvider>,
    document.getElementById('root')
);

