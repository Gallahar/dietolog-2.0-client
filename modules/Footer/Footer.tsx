import ArrowFooter from '@/assets/icons/ArrowFooter'
import s from './Footer.module.scss'

const Footer = () => {
	const scrollToTopHandler = () => {
		window.scrollTo(scrollY, 0)
	}

	return (
		<footer className={s.footer}>
			<div className={`container ${s.container}`}>
				<p>2023 © All rights reserved</p>
				<button onClick={scrollToTopHandler}>
					<ArrowFooter />
				</button>
			</div>
		</footer>
	)
}
export default Footer
