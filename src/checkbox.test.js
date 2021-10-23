import { render, fireEvent } from '@testing-library/react'
import App from './App'
import React from 'react'

test('Selecting the checkbox should toggle its value', () => {
	const { getByLabelText } = render(<App />)
	const checcbox = getByLabelText(/not checked/i) // When the component first renders, its label text reads "not checked",
	// so we can search via a regular expression to find a match with the string
	// this regex is case sensitive, so if you wanted to search for any case, you could add an {i} to the end of it
	fireEvent.click(checcbox)
	expect(checcbox.checked).toEqual(true)
	fireEvent.click(checcbox)
	expect(checcbox.checked).toEqual(false)
})
