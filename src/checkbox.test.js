import { render, fireEvent } from '@testing-library/react'
import App from './App'
import React from 'react'

test('Selecting the checkbox should toggle its value', () => {
	const { getByLabelText } = render(<App />)
	const checkbox = getByLabelText(/not checked/i)
	fireEvent.click(checkbox)
	expect(checkbox.checked).toEqual(true)
	fireEvent.click(checkbox)
	expect(checkbox.checked).toEqual(false)
})
