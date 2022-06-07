import ReactDOM from 'react-dom'

import App from './App'

const rootElement = document.getElementById('app')

if (rootElement.children?.length > 0) {
	ReactDOM.hydrate(<App />, rootElement)
} else {
	ReactDOM.render(<App />, rootElement)
}
