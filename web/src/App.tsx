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
import {
	Book,
	BrandGithub,
	BrandGitlab,
	BrandInstagram,
	BrandLinkedin,
	BrandTelegram,
	BrandTwitter,
	BrandWhatsapp,
	BrandYoutube,
	FileDownload,
	Home,
	Mail,
	Phone,
} from 'tabler-icons-react'

import { routes, navigate } from '@redwoodjs/router'

const actions: SpotlightAction[] = [
	{
		title: 'Home',
		description: 'Go to the home page',
		onTrigger: () => navigate(routes.home()),
		icon: <Home size={18} />,
		keywords: ['home', 'homepage'],
		id: 'home',
		group: 'pages',
	},
	{
		title: 'Blog',
		description: 'Go to blog page',
		onTrigger: () => navigate(routes.home()),
		icon: <Book size={18} />,
		keywords: ['blog', 'weblog'],
		id: 'blog',
		group: 'pages',
	},

	{
		title: 'Twitter',
		description: 'Go to my Twitter',
		onTrigger: () => window.open('https://twitter.com/mamad_dev', '_blank'),
		icon: <BrandTwitter size={18} />,
		keywords: ['twitter', 'social'],
		id: 'twitter',
		group: 'socials',
	},
	{
		title: 'Instagram',
		description: 'Go to my Instagram',
		onTrigger: () =>
			window.open('https://instagram.com/mamad.dev', '_blank'),
		icon: <BrandInstagram size={18} />,
		keywords: ['instagram', 'social'],
		id: 'instagram',
		group: 'socials',
	},
	{
		title: 'Telegram',
		description: 'Go to my Telegram',
		onTrigger: () =>
			window.open('https://telegram.me/reloadlife', '_blank'),
		icon: <BrandTelegram size={18} />,
		keywords: ['telegram', 'social'],
		id: 'telegram',
		group: 'socials',
	},
	{
		title: 'Youtube',
		description: 'Go to my Youtube Channel',
		onTrigger: () =>
			window.open(
				'https://www.youtube.com/channel/UCu5-LZOc2Z4fxHbrOZkX6zw?sub_confirm=1',
				'_blank'
			),
		icon: <BrandYoutube size={18} />,
		keywords: ['youtube', 'social'],
		id: 'youtube',
		group: 'socials',
	},
	{
		title: 'LinkedIn',
		description: 'Go to my LinkedIn',
		onTrigger: () =>
			window.open('https://www.linkedin.com/in/reloadlife/', '_blank'),
		icon: <BrandLinkedin size={18} />,
		keywords: ['linkedin', 'resume', 'social'],
		id: 'linkedin',
		group: 'socials',
	},

	{
		title: 'Github',
		description: 'Go to my Github',
		onTrigger: () => window.open('https://github.com/reloadlife', '_blank'),
		icon: <BrandGithub size={18} />,
		keywords: ['repo', 'git', 'github'],
		id: 'github',
		group: 'git',
	},
	{
		title: 'GitLab',
		description: 'Go to my GitLab',
		onTrigger: () => window.open('https://gitlab.com/reloadlife', '_blank'),
		icon: <BrandGitlab size={18} />,
		keywords: ['repo', 'git', 'gitlab'],
		id: 'gitlab',
		group: 'git',
	},

	{
		title: 'Email',
		description: 'Send me an email @ me@mamad.dev',
		onTrigger: () => window.open('mailto:me@mamad.dev', '_blank'),
		icon: <Mail size={18} />,
		keywords: ['mail', 'contact', 'email', 'touch', 'touch-me'],
		id: 'email',
		group: 'contact',
	},
	{
		title: 'Whatsapp',
		description: 'Message me on Whatsapp (but why ?)',
		onTrigger: () => window.open('https://wa.me/+989359310395', '_blank'),
		icon: <BrandWhatsapp size={18} />,
		keywords: [
			'call',
			'message',
			'contact',
			'whatsapp',
			'touch',
			'touch-me',
		],
		id: 'whatsapp',
		group: 'contact',
	},
	{
		title: 'Call',
		description: 'Call me @ +98 935 931 0395',
		onTrigger: () => window.open('tel:+98 935 931 0395', '_blank'),
		icon: <Phone size={18} />,
		keywords: ['call', 'contact', 'phone', 'touch', 'touch-me'],
		id: 'phone',
		group: 'contact',
	},

	{
		title: '/download: resume',
		description: 'download my resume',
		onTrigger: () => window.open('/resume.pdf', '_blank'),
		icon: <FileDownload size={18} />,
		keywords: ['download', 'resume'],
		id: 'resume-download',
		group: 'cmd',
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
									highlightQuery
									transitionDuration={150}
									transition="slide-down"
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
