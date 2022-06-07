import { MetaTags } from '@redwoodjs/web'
import MainLayout from 'src/layouts/MainLayout/MainLayout'

const HomePage = () => {
	return (
		<MainLayout>
			<MetaTags title="Home" description="Home page" />
			<h1>Elloo</h1>
		</MainLayout>
	)
}

export default HomePage
