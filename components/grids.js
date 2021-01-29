import styled from 'styled-components'

const Container = styled.div`
  border: #eee solid 2px;
  border-radius: 4px;
  padding: 15px 35px;
  transition: 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);

  &:hover {
    transform: scale(1.05);
    border: #ccc solid 2px;
  }
`

function ContentGrid(props) {
  const children = props.children
  return (
    <Container>
      <span>{children}</span>
    </Container>
  )
}

export { ContentGrid }