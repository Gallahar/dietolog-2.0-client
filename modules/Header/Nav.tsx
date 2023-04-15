import { useLanguageContext } from '@/hooks/useLanguageContext'
import { ua } from 'languages/ua'
import { ru } from 'languages/ru'
import { en } from 'languages/en'
import { INavbarItem, ISwitchButton } from './Header_types'
import { useContext } from 'react'
import s from './Header.module.scss'
import { LanguageContext } from 'providers/LanguageProvider/LanguageProvider'
import { SectionContext } from 'providers/SectionProvider/SectionProvider'
import { useRouter } from 'next/router'
import Link from 'next/link'

const Nav = () => {
	const { pathname } = useRouter()
	const { setLanguage } = useContext(LanguageContext)
	const { currentSection } = useContext(SectionContext)
	const { main, about, consults_and_rates, turnkey_solutions, contacts } =
		useLanguageContext().header
	const { mark } = useLanguageContext()
	const language: ISwitchButton[] = [
		{ title: 'ua', language: ua },
		{ title: 'ru', language: ru },
		{ title: 'en', language: en },
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
			{data.map(({ title, href }: INavbarItem) =>
				pathname === '/' ? (
					<a
						className={`${s.default} ${
							currentSection === href.slice(1) ? s.filled : ''
						} `}
						key={href}
						href={href}
					>
						{title}
					</a>
				) : (
					<Link
						key={href}
						className={`${s.default} ${
							currentSection === href.slice(1) ? s.filled : ''
						} `}
						href={`/${href}`}
					>
						{title}
					</Link>
				)
			)}
			<div className={s.buttons}>
				{language.map(({ title, language }) => (
					<button
						key={title}
						className={title === mark ? s.filled : ''}
						onClick={() => setLanguage(language)}
					>
						{title}
					</button>
				))}
			</div>
		</nav>
	)
}
export default Nav
