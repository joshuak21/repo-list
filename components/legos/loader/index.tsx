import { memo } from 'react'

import BoxBit from 'components/bits/box'

import SCSS from './style.module.scss'

export interface PropsInterface {
	width?: 'SMALL' | 'STRETCH',

	className?: string,
	style?: React.CSSProperties,
}

function _LoaderLego({
	width = 'STRETCH',
	...props
}: PropsInterface): JSX.Element {

	return (
		<BoxBit unflex
			className={`${SCSS.LoaderLego} ${SCSS[width]} ${props.className || ''}`}
			style={ props.style }
		>
			<BoxBit unflex className={SCSS.bar}/>
		</BoxBit>
	)
}

const LoaderLego = memo(_LoaderLego)
export default LoaderLego