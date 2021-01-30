import Image from 'next/image'

import styled from 'styled-components'

const GridContainer = styled.div`
  border: #eee solid 2px;
  border-radius: 4px;
  padding: 15px 35px;
  transition: 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);

  &:hover {
    transform: scale(1.05);
    border: #ccc solid 2px;
  }
`

function GridContent(props) {
  const children = props.children
  return (
    <GridContainer>
      <span>{children}</span>
    </GridContainer>
  )
}

function ContactGrid(props) {
  const path = props.path
  const to = props.to

  return (
    <a href={to} target="_blank">
      <Image src={path} height={25} width={25} />
    </a>
  )
}

export { GridContent, ContactGrid }