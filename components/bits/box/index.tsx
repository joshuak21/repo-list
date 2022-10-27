import {
	// useCallback,
	// useEffect,
	// useRef,

	memo,
} from 'react'

import * as StringHelper from 'helpers/string'

import SCSS from './style.module.scss'

export interface PropsInterface {
	unflex?: boolean,
	centering?: boolean,
	row?: boolean,

	id?: string,

	onClick?: (event: React.MouseEvent<HTMLDivElement>) => void,

	children?: React.ReactNode,

	className?: string,
	style?: React.CSSProperties,
}

function _BoxBit(props: PropsInterface): React.ReactElement<HTMLDivElement> {

	return (
		<div
			id={ props.id }
			className={ StringHelper.trim(`
				${props.unflex ? SCSS.unflex : ''}
				${props.row ? SCSS.row : ''}
				${props.centering ? SCSS.centering : ''}
				${props.className || ''}
			`) || undefined }

			onClick={ props.onClick }

			style={ props.style }
		>
			{ props.children }
		</div>
	)
}

const BoxBit = memo(_BoxBit)
export default BoxBit