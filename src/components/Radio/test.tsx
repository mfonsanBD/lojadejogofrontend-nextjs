import { screen, waitFor } from '@testing-library/react'
import theme from 'styles/theme'
import { renderWithTheme } from 'utils/tests/helpers'
import userEvent from '@testing-library/user-event'

import Radio from '.'

describe('<Radio />', () => {
  it('should render with label', () => {
    renderWithTheme(<Radio label="Radio" labelFor="check" value="anyValue" />)

    const label = screen.getByText('Radio')
    expect(label).toBeInTheDocument()
    expect(label).toHaveStyle({ color: theme.colors.white })
  })

  it('should render with black label', () => {
    renderWithTheme(<Radio label="Radio" labelColor="black" />)

    const label = screen.getByText('Radio')
    expect(label).toBeInTheDocument()
    expect(label).toHaveStyle({ color: theme.colors.black })
  })

  it('should render without label', () => {
    renderWithTheme(<Radio />)

    expect(screen.queryByLabelText('Radio')).not.toBeInTheDocument()
  })

  it('should dispatch onCheck when status change', async () => {
    const onCheck = jest.fn()
    renderWithTheme(
      <Radio
        label="Radio"
        labelFor="Radio"
        onCheck={onCheck}
        value="anyValue"
      />
    )
    expect(onCheck).not.toHaveBeenCalled()

    userEvent.click(screen.getByRole('radio'))
    await waitFor(() => {
      expect(onCheck).toHaveBeenCalledTimes(1)
    })

    expect(onCheck).toHaveBeenCalledWith('anyValue')
  })

  it('should be accessible with tab', () => {
    renderWithTheme(<Radio label="Radio" labelFor="Radio" />)

    expect(document.body).toHaveFocus()
    userEvent.tab()
    expect(screen.getByLabelText(/Radio/i)).toHaveFocus()
  })
})
