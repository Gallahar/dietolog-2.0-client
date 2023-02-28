import Link from 'next/link'
import { FC } from 'react'
import ActionButton, { ActionButtonProps } from '../ActionButton/ActionButton'
import s from './ActionLink.module.scss'

interface ActionLinkProps extends ActionButtonProps {
	path: string
}

const ActionLink: FC<ActionLinkProps> = ({ path, ...rest }) => {
	return (
		<Link href={path}>
			<ActionButton className={s.actionLink} {...rest} />
		</Link>
	)
}
export default ActionLink
