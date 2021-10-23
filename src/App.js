import React, { useReducer } from 'react'

function Checkbox() {
	const [checked, toggle] = useReducer((checked) => !checked, false)

	return (
		<>
			<label>
				{checked ? 'checked' : 'not checked'}
				<input type="checkbox" value={checked} onChange={toggle} />
			</label>
		</>
	)
}

export default function App() {
	return <Checkbox />
}
