import {
	AppShell,
	Footer,
	useMantineTheme,
	Group,
	ActionIcon,
	Text,
} from '@mantine/core'
import MainHeader from 'src/components/MainHeader/MainHeader'
import {
	BrandTwitter,
	BrandYoutube,
	BrandInstagram,
	BrandLinkedin,
	BrandTelegram,
	BrandGithub,
	BrandGitlab,
	BrandTwitch,
	BrandSpotify,
	Home,
	Phone,
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
							? theme.colors.dark[4]
							: '#FEFEFE',
				},
			}}
			footer={
				<Footer
					height={200}
					p="md"
					sx={{
						minHeight: 70,
						maxHeight: 'max-content',
						background:
							theme.colorScheme === 'dark'
								? theme.colors.dark[8]
								: theme.colors.gray[0],
					}}
				>
					<Group
						spacing={8}
						sx={{
							paddingRight: 3,
							paddingLeft: 3,
							[theme.fn.smallerThan('sm')]: {
								width: 'auto',
								marginLeft: 'auto',
							},
						}}
						position="center"
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
						<ActionIcon<'a'>
							component="a"
							href="https://github.com/reloadlife"
							target="_blank"
							size="lg"
							radius="xl"
							variant="light"
							color="gray"
						>
							<BrandGithub size={18} />
						</ActionIcon>
						<ActionIcon<'a'>
							component="a"
							href="https://gitlab.com/reloadlife"
							target="_blank"
							size="lg"
							radius="xl"
							variant="light"
							color="orange"
						>
							<BrandGitlab size={18} />
						</ActionIcon>
						<ActionIcon<'a'>
							component="a"
							href="https://telegram.me/reloadlife"
							target="_blank"
							size="lg"
							radius="xl"
							variant="light"
							color="blue"
						>
							<BrandTelegram size={18} />
						</ActionIcon>
						<ActionIcon<'a'>
							component="a"
							href="https://twitch.tv/Mamikachu"
							target="_blank"
							size="lg"
							radius="xl"
							variant="light"
							color="violet"
						>
							<BrandTwitch size={18} />
						</ActionIcon>
						<ActionIcon<'a'>
							component="a"
							href="https://open.spotify.com/user/reloadlife"
							target="_blank"
							size="lg"
							radius="xl"
							variant="light"
							color="green"
						>
							<BrandSpotify size={18} />
						</ActionIcon>
					</Group>
					<Text
						sx={{
							textAlign: 'center',
							fontSize: 'x-small',
							paddingTop: 8,
						}}
					>
						Yes, I developed all this without drinking any Coffee!
					</Text>
					<Text
						sx={{
							textAlign: 'center',
							fontSize: 'x-small',
							paddingTop: 8,
						}}
					>
						Anything that is published here is published under the
						Unlicense License so i dont care if you copy or do what
						ever but i&#39;d be happy to see my name mentioned here
						and there :)
					</Text>
					<Text
						sx={{
							textAlign: 'center',
							fontSize: 'x-small',
							paddingTop: 8,
						}}
					>
						Also i have to mention that all{' '}
						<a href="https://mamad.dev">mamad.dev</a> contents are
						free and open-source and available on{' '}
						<a
							href="https://github.com/reloadlife/mamad.dev"
							rel="noindex, nofollow"
						>
							github
						</a>
						, it was developed using{' '}
						<a
							href="https://redwoodjs.com/"
							rel="noindex, nofollow"
						>
							redwoodjs
						</a>{' '}
						and a little bit of{' '}
						<a href="https://mantine.dev/" rel="noindex, nofollow">
							mantine.dev
						</a>
						also some{' '}
						<a href="https://mui.com/" rel="noindex, nofollow">
							mui.com
						</a>
					</Text>
					<Text
						sx={{
							textAlign: 'center',
							fontSize: 'x-small',
							paddingTop: 8,
						}}
					>
						If you read all that, I love you &lt;3
					</Text>
				</Footer>
			}
			header={
				<MainHeader
					links={[
						{
							link: '/',
							label: (
								<Home
									size={20}
									strokeWidth={1}
									color={'black'}
								/>
							),
						},
						{
							link: '/contact',
							label: (
								<Phone
									size={20}
									strokeWidth={1}
									color={'black'}
								/>
							),
						},
						{
							link: '/about',
							label: 'About',
						},
						{
							link: '/resume',
							label: 'Résumé',
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
