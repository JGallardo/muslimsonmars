import * as React from "react"
import { Link } from "gatsby"

export const HeaderMain = ({ children }) => {
	
	return (
		<h1 className="main-heading">
			<Link to="/">{children}</Link>
		</h1>
	)
}
