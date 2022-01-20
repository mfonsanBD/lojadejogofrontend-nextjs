import { render, screen } from 'utils/test-utils'

import Logo from '.'

describe('<Logo />', () => {
  //1º passo - renderizar o componente com o método 'render'
  //2º passo - selecionar o elemento a ser testado com o método 'screen' com (queries)
  //3º passo - verificar se o que está retornando é a logo branca com o método 'expect'
  it('should render a white label default', () => {
    render(<Logo />)
    expect(screen.getByLabelText(/Won Games/i).parentElement).toHaveStyle({
      color: '#FAFAFA'
    })
  })

  it('should render a black label when color is passed', () => {
    render(<Logo color="black" />)
    expect(screen.getByLabelText(/Won Games/i).parentElement).toHaveStyle({
      color: '#030517'
    })
  })

  it('should render a normal logo when size is default', () => {
    render(<Logo />)
    expect(screen.getByLabelText(/Won Games/i).parentElement).toHaveStyle({
      width: '11rem'
    })
  })

  it('should render a bigger logo', () => {
    render(<Logo size="large" />)
    expect(screen.getByLabelText(/Won Games/i).parentElement).toHaveStyle({
      width: '20rem'
    })
  })

  it('should render a bigger logo without text if hideOnMobile', () => {
    render(<Logo hideOnMobile />)
    expect(screen.getByLabelText(/Won Games/i).parentElement).toHaveStyleRule(
      'width',
      '5.8rem',
      {
        media: '(max-width: 768px)'
      }
    )
  })

  it('should render the logo with id passed', () => {
    const { container } = render(<Logo id="myId" />)
    expect(container.querySelector('#paint_linear_myId')).toBeInTheDocument()
  })
})
