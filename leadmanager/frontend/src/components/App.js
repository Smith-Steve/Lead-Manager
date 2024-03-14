import React, { Component, Fragment, render } from 'react';
import Dashboard from './leads/Dashboard';
import Header from './layout/Header'
import {Provider} from 'react-redux'
import store from '../store'

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Fragment>
                    <Header/>
                    <div className='container'>
                        <Dashboard/>
                    </div>
                </Fragment>
            </Provider>
        )
    }
}

const container = document.getElementById('app')
render(<App/>, container)
