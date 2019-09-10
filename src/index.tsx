import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './components/App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer, { initialState } from './store/reducer';

// If interested in using the redux devtools
// https://github.com/zalmoxisus/redux-devtools-extension.
// import { composeWithDevTools } from 'redux-devtools-extension';

// const composeEnhancers = composeWithDevTools({});
// const store = createStore(reducer, initialState, composeEnhancers(applyMiddleware(thunk)));

const store = createStore(reducer, initialState);

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

ReactDOM.render(<ConnectedApp />, document.getElementById('root'));