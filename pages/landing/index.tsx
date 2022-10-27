import {
	useState,
} from 'react'

import {
	useDispatch,
	useSelector,
} from 'react-redux'

import * as HistoryStore from 'app/stores/history'

import BoxBit from 'components/bits/box'
import TextInputBit, { PropsInterface as TextInputBitPropsInterface} from 'components/bits/text.input'

import LoaderLego from 'components/legos/loader'

import SCSS from './style.module.scss'

import { StoreInterface } from 'app/stores'

type RepositoriesTypes = {
	id: number,
	name: string,
	private: boolean,
	html_url: string,
}

export default function LandingPage(): JSX.Element {

	const
		[data, setData] = useState<RepositoriesTypes[]>([]),

		[isLoading, setIsLoading] = useState<boolean>(false),

		[errorMessage, setErrorMessage] = useState<string>(''),

		[search, setSearch] = useState<string>(''),

		dispatch = useDispatch(),

		historySearch = useSelector((state: StoreInterface) => state.history)

	const getData = () => {
		(async () => {
			setIsLoading(true)
			try {
				const res = await fetch(`https://api.github.com/users/${search}/repos`)
				const _data = await res.json()

				if(historySearch.history.indexOf(search) === -1) {
					dispatch(
						HistoryStore.pushSearch(search)
					)
				}

				setIsLoading(false)
				setSearch('')
				setData(_data)
			} catch(err) {
				if(err.status !== 200) {
					setErrorMessage('Gagal mendapatkan data. Coba lagi nanti')
				}
				setIsLoading(false)
			}
		})()
	}

	const onChange: TextInputBitPropsInterface['onChange'] = (e, val) => {
		setSearch(val)
	}

	const onClick = () => {
		getData()
	}

	const repoRenderer = (list: RepositoriesTypes, index: number) => {
		return (
			<BoxBit key={ index } className={ SCSS.dataContainer }>
				<p>Repo Name: { list.name }</p>

				<BoxBit unflex className={ SCSS.navigate }>
					<a href={ list.html_url } target="_blank" rel="noreferrer">Go to repo</a>
				</BoxBit>
			</BoxBit>
		)
	}

	const historyRenderer = (_history: string, index: number) => {
		return (
			<BoxBit key={ index } unflex className={ SCSS.historyDataContainer }>
				<p>{ _history }</p>
			</BoxBit>
		)
	}

	const onClearHistory = () => {
		dispatch(
			HistoryStore.removeAll()
		)
	}

	return (
		<BoxBit unflex>
			<BoxBit className={ SCSS.innerContainer }>
				<BoxBit centering className={ SCSS.titleContainer }>
					<p className={ SCSS.title }>Repositories List</p>
				</BoxBit>

				<BoxBit centering row>
					<BoxBit unflex>
						<TextInputBit type="text" placeholder="Enter github username" value={search} onChange={ onChange }/>
					</BoxBit>

					<BoxBit unflex centering onClick={ onClick } className={ SCSS.button }>
						<p className={ SCSS.buttonText }>Search</p>
					</BoxBit>

				</BoxBit>
				{ historySearch.history.length > 0 && (
					<BoxBit className={ SCSS.historiesContainer }>
						<BoxBit unflex centering row>
							<p className={ SCSS.historyTitle }>
								Riwayat Pencarian
							</p>

							<BoxBit unflex className={ SCSS.clear } onClick={ onClearHistory }>
								<p>Hapus riwayat</p>
							</BoxBit>
						</BoxBit>

						<BoxBit className={ SCSS.historiesDataContainer }>
							{ historySearch.history.map(historyRenderer) }
						</BoxBit>
					</BoxBit>
				)}

				<BoxBit centering className={ SCSS.datasContainer }>
					{ isLoading ? (
						<LoaderLego width="SMALL"/>
					) : data.length && (
						<BoxBit className={ SCSS.data }>
							{ data.map(repoRenderer) }
						</BoxBit>
					) || (
						<BoxBit>
							{ !!errorMessage ? errorMessage : 'Hasil pencarian kosong.'}
						</BoxBit>
					)}
				</BoxBit>
			</BoxBit>
		</BoxBit>
	)
}