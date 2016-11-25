import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import RootRouter from './js/routes'
import store from './js/stores/Store'
import { chr, ord, mapArrayToObject, mapObject } from './js/utils/Base'
require('./css/index.styl')
require('bootstrap/dist/css/bootstrap.min.css')

if (typeof (document) !== 'undefined' && window) {
    window.chr = chr
    window.ord = ord
    window.mapArrayToObject = mapArrayToObject
    window.mapObject = mapObject
    window.onload = () => {
        return render(
            <Provider store={store}>
                <RootRouter/>
            </Provider>,
            document.getElementById('app')
        )
    }
}
