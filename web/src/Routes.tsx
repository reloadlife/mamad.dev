// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Set, Router, Route } from '@redwoodjs/router'
import PostsLayout from 'src/layouts/PostsLayout'

const Routes = () => {
	return (
		<Router>
			<Route path="/" page={HomePage} name="home" />
			<Route path="/login" page={LoginPage} name="login" />
			<Route path="/signup" page={SignupPage} name="signup" />
			<Route path="/forgot-password" page={ForgotPasswordPage} name="forgotPassword" />
			<Route path="/reset-password" page={ResetPasswordPage} name="resetPassword" />
			<Set wrap={PostsLayout}>
				<Route path="/posts/new" page={PostNewPostPage} name="newPost" />
				<Route path="/posts/{id:Int}/edit" page={PostEditPostPage} name="editPost" />
				<Route path="/posts/{id:Int}" page={PostPostPage} name="post" />
				<Route path="/posts" page={PostPostsPage} name="posts" />
			</Set>
			<Route notfound page={NotFoundPage} />
		</Router>
	)
}

export default Routes
