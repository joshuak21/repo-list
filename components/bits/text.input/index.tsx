import {
	useRef,
	memo,
} from 'react'

import * as StringHelper from 'helpers/string'

// import BoxBit from '../box'

import SCSS from './style.module.scss'

export interface PropsInterface {
	type: 'text' | 'tel' | 'email' | 'number' | 'password' | string,
	autoComplete?: 'name' | 'email' | 'password' | 'tel',

	disabled?: boolean,
	error?: boolean,
	readonly?: boolean,
	autoFocus?: boolean,
	autoCorrect?: 'on' | 'off',
	autoCapitalize?: 'on' | 'off',

	min?: number | string,
	max?: number | string,
	step?: number,

	maxLength?: number,
	pattern?: string,

	defaultValue?: string | number | string[],
	value?: string | number,
	placeholder?: string,

	onChange?: (event: React.ChangeEvent<HTMLInputElement>, value: string) => void,
	onSubmit?: (event: React.KeyboardEvent<HTMLInputElement>, value: string) => void,

	onKeyUp?: (event: React.KeyboardEvent<HTMLInputElement>) => void,
	onKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void,

	id?: string,
	className?: string,
	style?: React.CSSProperties,
}

function _TextInputBit({
	type = 'text',
	...props
}: PropsInterface): JSX.Element {

	const ref = useRef<{
		element: HTMLDivElement | null,
	}>({
		element: null,
	})

	const refElementSetter = (element: HTMLInputElement) => {
		ref.current.element = element
	}

	const onKeyUp = (event: React.KeyboardEvent<HTMLInputElement>) => {
		if(props.onSubmit && event.key === 'Enter') {
			props.onSubmit(event, event.currentTarget.value)
		}

		props.onKeyUp?.(event)
	}

	const onKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
		if(props.onSubmit && event.key === 'Tab') {
			props.onSubmit(event, event.currentTarget.value)
		}

		props.onKeyDown?.(event)
	}

	const onChange: React.ChangeEventHandler<HTMLInputElement> = event => {
		props.onChange?.(event, event.currentTarget.value)
	}

	return (
		<input
			ref={ refElementSetter }
			type={ type }
			autoComplete={ props?.autoComplete || 'off' }

			disabled={ props.disabled }
			readOnly={ props.readonly }
			autoFocus={ props.autoFocus }
			autoCorrect={ props.autoCorrect }
			autoCapitalize={ props.autoCapitalize }

			defaultValue={ props.defaultValue }
			value={ props.value }
			placeholder={ props.placeholder }

			min={ props.min }
			max={ props.max }
			step={ props.step }

			pattern={ props.pattern }
			maxLength={ props.maxLength }
			
			onChange={ onChange }
			onKeyUp={ onKeyUp }
			onKeyDown={ onKeyDown }

			className={ StringHelper.trim(`${SCSS.TextInputBit} ${props.className || ''}`)}
			style={ props.style }
		/>
	)
}

const TextInputBit = memo(_TextInputBit)
export default TextInputBit