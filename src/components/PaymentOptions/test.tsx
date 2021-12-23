import { screen, waitFor } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import cardsMock from './mock'

import PaymentOptions from '.'
import userEvent from '@testing-library/user-event'

describe('<PaymentOptions />', () => {
  it('should render the saved card options and the add new card button', () => {
    renderWithTheme(
      <PaymentOptions cards={cardsMock} handlePayment={jest.fn} />
    )

    expect(screen.getByLabelText(/4326/)).toBeInTheDocument()
    expect(screen.getByLabelText(/1973/)).toBeInTheDocument()
    expect(screen.getByText(/add a new credit card/i)).toBeInTheDocument()
  })

  it('should select card when clicking on the label', async () => {
    renderWithTheme(
      <PaymentOptions cards={cardsMock} handlePayment={jest.fn} />
    )
    userEvent.click(screen.getByLabelText(/4326/))
    await waitFor(() => {
      expect(screen.getByRole('radio', { name: /4326/ })).toBeChecked()
    })
  })

  it('should not call handlepayment when button is desabled', async () => {
    const handlePayment = jest.fn()
    renderWithTheme(
      <PaymentOptions cards={cardsMock} handlePayment={handlePayment} />
    )
    userEvent.click(screen.getByRole('button', { name: /buy now/i }))
    expect(handlePayment).not.toHaveBeenCalled()
  })

  it('should call handlepayment when credit card is selected', async () => {
    const handlePayment = jest.fn()
    renderWithTheme(
      <PaymentOptions cards={cardsMock} handlePayment={handlePayment} />
    )
    userEvent.click(screen.getByLabelText(/4326/))
    userEvent.click(screen.getByRole('button', { name: /buy now/i }))

    await waitFor(() => {
      expect(handlePayment).toHaveBeenCalled()
    })
  })
})
