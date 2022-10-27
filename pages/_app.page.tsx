import { AppProps } from 'next/app'
// import '../styles/globals.css'
import '../styles/global.scss'

import { Provider } from 'react-redux'

// import store from 'app/stores'
import stores from 'app/stores'

function App({ Component, pageProps }: AppProps) {
	return (
		<Provider store={ stores }>
			<Component {...pageProps} />
		</Provider>
	)
}

export default App
