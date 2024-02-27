import Error from '../../components/Error'

function Error404() {
	/* Setting the title of the page. */
	document.title = '404 - Kasa'

	return (
		<Error
			title="404"
			subtitle="Oups! La page que vous demandez n'existe pas. "			
		/>
	)
}

export default Error404