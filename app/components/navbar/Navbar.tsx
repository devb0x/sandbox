import Link from "next/link"

import styles from './navbar.module.css'

const Navbar = () => {
	return (
		<nav className={`${styles['nav']}`}>
			<div className={`${styles['logo']}`}>
				Logo
			</div>
			<ul className={`${styles['nav-list']}`}>
				<li>
					<Link href={'/'} className={`${styles['nav-list__link']}`}>
						Homepage
					</Link>
				</li>
				<li>
					<Link href={'/dashboard'}>
						Dashboard
					</Link>
				</li>
				<li>
					<Link href={'/api/auth/signin'}>
						SignIn
					</Link>
				</li>
				<li>
					<Link href={'/api/auth/signout'}>
						SignOut
					</Link>
				</li>
			</ul>
		</nav>
	)
}

export default Navbar