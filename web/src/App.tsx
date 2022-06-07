import { AuthProvider } from '@redwoodjs/auth'

import { FatalErrorBoundary, RedwoodProvider } from '@redwoodjs/web'
import { RedwoodApolloProvider } from '@redwoodjs/web/apollo'
import { NotificationsProvider } from '@mantine/notifications'
import { ModalsProvider } from '@mantine/modals'
import { SpotlightAction, SpotlightProvider } from '@mantine/spotlight'

import FatalErrorPage from 'src/pages/FatalErrorPage'
import Routes from 'src/Routes'

import './scaffold.css'
import './index.css'
import './i18n'

import { MantineProvider } from '@mantine/core'
import { Home } from 'tabler-icons-react'

import { routes, navigate } from '@redwoodjs/router'

const actions: SpotlightAction[] = [
	{
		title: 'Home',
		description: 'Get to home page',
		onTrigger: () => navigate(routes.home()),
		icon: <Home size={18} />,
	},
]

const App = () => (
	<FatalErrorBoundary page={FatalErrorPage}>
		<RedwoodProvider titleTemplate="%PageTitle | %AppTitle">
			<AuthProvider type="dbAuth">
				<RedwoodApolloProvider>
					<MantineProvider>
						<NotificationsProvider>
							<ModalsProvider>
								<SpotlightProvider
									actions={actions}
									shortcut={['mod + K', '/']}
								>
									<Routes />
								</SpotlightProvider>
							</ModalsProvider>
						</NotificationsProvider>
					</MantineProvider>
				</RedwoodApolloProvider>
			</AuthProvider>
		</RedwoodProvider>
	</FatalErrorBoundary>
)

export default App
