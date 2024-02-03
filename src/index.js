import { BrowserRouter } from 'react-router-dom'
import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'
import { I18nextProvider } from 'react-i18next'
import { Provider } from 'react-redux'

import store from './redux/store'
import i18n from './locales/i18next'
import App from './App'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
	<React.StrictMode>
		<BrowserRouter>
			<Provider store={store}>
				<I18nextProvider i18n={i18n}>
					<App />
				</I18nextProvider>
			</Provider>
		</BrowserRouter>
	</React.StrictMode>
)
