import { render, screen } from '@testing-library/react'
import Main from './index'

describe('testing Main component', () => {
  it('should be render <Main/> component', () => {
    const { container } = render(<Main />)

    expect(
      screen.getByRole('heading', { name: /Main component/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
