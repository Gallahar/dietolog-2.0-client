import Link from 'next/link'
import { FC } from 'react'
import ActionButton, { ActionButtonProps } from './ActionButton'

interface ActionLinkProps extends ActionButtonProps {
	path: string
}

const ActionLink: FC<ActionLinkProps> = ({ path, ...rest }) => {
	return (
		<Link href={path}>
			<ActionButton {...rest} />
		</Link>
	)
}
export default ActionLink
