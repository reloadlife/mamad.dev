// This page will be rendered when an error makes it all the way to the top of the
// application without being handled by a Javascript catch statement or React error
// boundary.
//
// You can modify this page as you wish, but it is important to keep things simple to
// avoid the possibility that it will cause its own error. If it does, Redwood will
// still render a generic error page, but your users will prefer something a bit more
// thoughtful. =)
import MainLayout from 'src/layouts/MainLayout/MainLayout'
import { Title, Text, Container, useMantineTheme } from '@mantine/core'

// Ensures that production builds do not include the error page
let RedwoodDevFatalErrorPage = undefined
if (process.env.NODE_ENV === 'development') {
	RedwoodDevFatalErrorPage =
		require('@redwoodjs/web/dist/components/DevFatalErrorPage').DevFatalErrorPage
}

const FatalErrorPage = () => {
	const theme = useMantineTheme()

	return (
		<MainLayout>
			<Container
				sx={{
					paddingTop: 80,
					paddingBottom: 80,
				}}
			>
				<div
					style={{
						textAlign: 'center',
						fontWeight: 900,
						fontSize: 220,
						lineHeight: 1,
						marginBottom: theme.spacing.xl * 1.5,
						color:
							theme.colorScheme === 'dark'
								? theme.colors.dark[4]
								: theme.colors.gray[2],

						[theme.fn.smallerThan('sm')]: {
							fontSize: 120,
						},
					}}
				>
					500
				</div>
				<Title
					sx={{
						fontFamily: `Greycliff CF, ${theme.fontFamily}`,
						textAlign: 'center',
						fontWeight: 900,
						fontSize: 38,

						[theme.fn.smallerThan('sm')]: {
							fontSize: 32,
						},
					}}
				>
					Something Went Wrong !
				</Title>
				<Text
					color="dimmed"
					size="lg"
					align="center"
					sx={{
						maxWidth: 500,
						margin: 'auto',
						marginTop: theme.spacing.xl,
						marginBottom: theme.spacing.xl * 1.5,
					}}
				>
					Unfortunately, something happened to our server and we were
					unable to generate the page you&#39;ve requested. Try again
					in a few minutes, or contact us if the problem persists. :)
				</Text>
			</Container>
		</MainLayout>
	)
}

export default RedwoodDevFatalErrorPage || FatalErrorPage
