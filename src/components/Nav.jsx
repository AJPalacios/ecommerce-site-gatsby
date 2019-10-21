import React from "react"
import { Link } from "gatsby"

const navItems = [
	{
		caption: "Home",
		href: "/",
	},
	{
		caption: "Products",
		href: "/products",
	},
]

export default props => {
	return (
		<header className="bg-blue-900 text-blue-100 shadow-md">
			<nav>
				<ul className="flex">
					{navItems.map((item, idx) => {
						return (
							<li key={idx}>
								<Link className="hover:bg-blue-600 px-6 inline-block py-4" to={item.href}>{item.caption}</Link>
							</li>
						)
					})}
				</ul>
			</nav>
		</header>
	)
}
