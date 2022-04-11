import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import App from './components/App';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import { AppState } from './store';

// If interested in using the redux devtools
// https://github.com/zalmoxisus/redux-devtools-extension.
// import { composeWithDevTools } from 'redux-devtools-extension';

// const composeEnhancers = composeWithDevTools({});
// const store = createStore(reducer, initialState, composeEnhancers(applyMiddleware(thunk)));

let initialState: AppState | undefined = undefined;

const store = configureStore(initialState);

class ConnectedApp extends React.Component
{
    render()
    {
        return (
            <Provider store={store}>
                <App />
            </Provider>)
    }
};

const container = document.getElementById('root');

if(container){
	var root = ReactDOM.createRoot(container);
	root.render(<ConnectedApp />);
}