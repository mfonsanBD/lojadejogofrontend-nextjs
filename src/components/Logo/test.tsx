import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Logo from '.'

describe('<Logo />', () => {
  //1º passo - renderizar o componente com o método 'render'
  //2º passo - selecionar o elemento a ser testado com o método 'screen' com (queries)
  //3º passo - verificar se o que está retornando é a logo branca com o método 'expect'
  it('should render a white label default', () => {
    renderWithTheme(<Logo />)
    expect(screen.getByLabelText(/Won Games/i).parentElement).toHaveStyle({ color: '#FAFAFA' })
  })

  it('should render a black label when color is passed', () => {
    renderWithTheme(<Logo color="black" />)
    expect(screen.getByLabelText(/Won Games/i).parentElement).toHaveStyle({ color: '#030517' })
  })
})
