import { useLanguage } from '@/hooks/useLanguage'
import { ua } from 'languages/ua'
import { ru } from 'languages/ru'
import { en } from 'languages/en'
import { INavbarItem, ISwitchButton } from './data'
import { useContext } from 'react'
import s from './Header.module.scss'
import { LanguageContext } from 'providers/LanguageProvider/LanguageProvider'
import { SectionContext } from 'providers/SectionProvider/SectionProvider'

const Nav = () => {
	const { setLanguage } = useContext(LanguageContext)
	const { currentSection } = useContext(SectionContext)
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
					className={`${s.default} ${
						currentSection === href.slice(1) ? s.filled : ''
					} `}
					key={href}
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
