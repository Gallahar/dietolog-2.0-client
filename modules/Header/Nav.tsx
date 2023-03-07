import { useLanguage } from '@/hooks/useLanguage'
import { ua } from 'languages/ua'
import { ru } from 'languages/ru'
import { en } from 'languages/en'
import { INavbarItem, ISwitchButton } from './data'
import { useContext, useState } from 'react'
import s from './Header.module.scss'
import { LanguageContext } from 'providers/LanguageProvider/LanguageProvider'

const Nav = () => {
	const [path, setPath] = useState('#main')
	const { setLanguage } = useContext(LanguageContext)
	const { main, about, consults_and_rates, turnkey_solutions, contacts } =
		useLanguage().header
	const { mark } = useLanguage()
	const language: ISwitchButton[] = [
		{ title: 'ua', button: ua },
		{ title: 'ru', button: ru },
		{ title: 'en', button: en },
	]
	const data: INavbarItem[] = [
		{ title: main, href: '#main' },
		{ title: about, href: '#about' },
		{ title: consults_and_rates, href: '#consults_and_rates' },
		{ title: turnkey_solutions, href: '#turnkey_solutions' },
		{ title: contacts, href: '#contacts' },
	]

	return (
		<nav>
			{data.map(({ title, href }: INavbarItem) => (
				<a
					className={s.default}
					key={href}
					onClick={() => setPath(href)}
					href={href}
				>
					{title}
				</a>
			))}
			<div className={s.buttons}>
				{language.map(({ title, button }) => (
					<button
						key={title}
						className={title === mark ? s.filled : ''}
						onClick={() => setLanguage(button)}
					>
						{title}
					</button>
				))}
			</div>
		</nav>
	)
}
export default Nav
