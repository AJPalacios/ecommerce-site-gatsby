import React, { Fragment } from "react"
import Nav from "./Nav"
import SEO from "./SEO.jsx";

export default props => {
	return (
		<Fragment>
			<SEO />
			<Nav />
			<main>{props.children}</main>
			{console.log(process.env.HOLA)}
		</Fragment>
	)
}
