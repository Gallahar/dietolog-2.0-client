import {
	MouseEvent as MouseEventReact,
	TouchEvent as TouchEventReact,
} from 'react'

export const getTouchEventData = (
	e:
		| TouchEvent
		| MouseEvent
		| TouchEventReact<HTMLDivElement>
		| MouseEventReact<HTMLDivElement>
) => {
	return 'changedTouches' in e ? e.changedTouches[0] : e
}
