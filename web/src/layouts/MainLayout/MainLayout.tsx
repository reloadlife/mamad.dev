import {
	AppShell,
	Footer,
	useMantineTheme,
	Group,
	ActionIcon,
} from '@mantine/core'
import MainHeader from 'src/components/MainHeader/MainHeader'
import {
	BrandTwitter,
	BrandYoutube,
	BrandInstagram,
	BrandLinkedin,
} from 'tabler-icons-react'

type MainLayoutProps = {
	children?: React.ReactNode
}

const MainLayout = ({ children }: MainLayoutProps) => {
	const theme = useMantineTheme()

	return (
		<AppShell
			styles={{
				main: {
					background:
						theme.colorScheme === 'dark'
							? theme.colors.dark[8]
							: theme.colors.gray[0],
					margin: 0
				},
			}}
			footer={
				<Footer height={50} p="md">
					<Group
						spacing={4}
						sx={{
							[theme.fn.smallerThan('sm')]: {
								width: 'auto',
								marginLeft: 'auto',
							},
						}}
						position="right"
						noWrap
					>
						<ActionIcon<'a'>
							component="a"
							href="https://twitter.com/mamad_dev"
							target="_blank"
							size="lg"
							radius="xl"
							variant="light"
							color="blue"
						>
							<BrandTwitter size={18} />
						</ActionIcon>
						<ActionIcon<'a'>
							component="a"
							href="https://www.youtube.com/channel/UCu5-LZOc2Z4fxHbrOZkX6zw?sub_confirm=1"
							target="_blank"
							size="lg"
							radius="xl"
							variant="light"
							color="red"
						>
							<BrandYoutube size={18} />
						</ActionIcon>
						<ActionIcon<'a'>
							component="a"
							href="https://instagram.com/mamad.dev"
							target="_blank"
							size="lg"
							radius="xl"
							variant="light"
							color="orange"
						>
							<BrandInstagram size={18} />
						</ActionIcon>
						<ActionIcon<'a'>
							component="a"
							href="https://www.linkedin.com/in/reloadlife/"
							target="_blank"
							size="lg"
							radius="xl"
							variant="light"
							color="blue"
						>
							<BrandLinkedin size={18} />
						</ActionIcon>
					</Group>
				</Footer>
			}
			header={
				<MainHeader
					links={[
						{
							link: '/about',
							label: 'About Me',
						},
						{
							link: '/contact',
							label: 'Contact Me',
						},
					]}
				/>
			}
		>
			{children}
		</AppShell>
	)
}

export default MainLayout
