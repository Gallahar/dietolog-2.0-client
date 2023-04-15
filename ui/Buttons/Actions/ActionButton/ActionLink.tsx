import Link from 'next/link'
import { FC } from 'react'
import ActionButton, { ActionButtonProps } from './ActionButton'

interface ActionLinkProps extends ActionButtonProps {
	path: string
	as?: string
}

const ActionLink: FC<ActionLinkProps> = ({ path, as, ...rest }) => {
	return (
		<Link as={as} href={path}>
			<ActionButton {...rest} />
		</Link>
	)
}
export default ActionLink
