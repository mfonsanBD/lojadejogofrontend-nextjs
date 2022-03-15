import 'match-media-mock'
import { fireEvent, render, screen } from 'utils/test-utils'
import Gallery from '.'
import itemsMock from './mock'

describe('<Gallery />', () => {
  it('should render thumbnails as button', () => {
    render(<Gallery items={itemsMock.slice(0, 2)} />)
    expect(
      screen.getByRole('button', { name: /Thumb - Gallery Image 1/i })
    ).toHaveAttribute('src', itemsMock[0].src)
    expect(
      screen.getByRole('button', { name: /Thumb - Gallery Image 2/i })
    ).toHaveAttribute('src', itemsMock[1].src)
  })

  it('should render open modal', () => {
    render(<Gallery items={itemsMock.slice(0, 2)} />)

    //selecionar o modal
    const modal = screen.getByLabelText('modal')

    //verificar se o modal está escondido
    expect(modal.getAttribute('aria-hidden')).toBe('true')
    expect(modal).toHaveStyle({ opacity: 0, pointerEvents: 'none' })

    //clicar na imagem de abrir o modal e verificar se ele abriu
    fireEvent.click(
      screen.getByRole('button', { name: /Thumb - Gallery Image 1/i })
    )
    expect(modal.getAttribute('aria-hidden')).toBe('false')
    expect(modal).toHaveStyle({ opacity: 1 })
  })

  it('should open modal with selected image', async () => {
    render(<Gallery items={itemsMock.slice(0, 2)} />)

    //clicar na thambnail
    fireEvent.click(
      screen.getByRole('button', { name: /Thumb - Gallery Image 2/i })
    )

    //espero que a imagem da thambnail seja aberta
    const img = await screen.findByRole('img', { name: /Gallery Image 2/i })
    expect(img.parentElement?.parentElement).toHaveClass('slick-active')
  })

  it('should render close modal when overlay or button clicked', () => {
    render(<Gallery items={itemsMock.slice(0, 2)} />)

    //selecionar o modal
    const modal = screen.getByLabelText('modal')

    //clicar na imagem de abrir o modal e verificar se ele abriu
    fireEvent.click(
      screen.getByRole('button', { name: /Thumb - Gallery Image 1/i })
    )

    //clicar para fechar o modal
    fireEvent.click(screen.getByRole('button', { name: /close modal/i }))

    expect(modal.getAttribute('aria-hidden')).toBe('true')
    expect(modal).toHaveStyle({ opacity: 0, pointerEvents: 'none' })
  })

  it('should render close modal when esc pressed', () => {
    const { container } = render(<Gallery items={itemsMock.slice(0, 2)} />)

    //selecionar o modal
    const modal = screen.getByLabelText('modal')

    //clicar para fechar o modal
    fireEvent.keyUp(container, { key: 'Escape' })

    expect(modal.getAttribute('aria-hidden')).toBe('true')
    expect(modal).toHaveStyle({ opacity: 0, pointerEvents: 'none' })
  })
})
