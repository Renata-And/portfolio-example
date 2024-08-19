import React from 'react'
import styled from 'styled-components'

type WorkPropsType = {
  src: string
  title: string
  text: string
}

export const Work = (props: WorkPropsType) => {
  return (
    <StyledWork>
      <Image src={props.src} />
      <WorkTitle>{props.title}</WorkTitle>
      <WorkText>{props.text}</WorkText>
      <Link href={'#'}>demo</Link>
      <Link href={'#'}>code</Link>
    </StyledWork>
  )
}

const StyledWork = styled.div`
  background-color: #d1f7d4;
  max-width: 540px;
`

const Image = styled.img`
  width: 100%;
  height: 260px;
  object-fit: cover;
`

const WorkTitle = styled.h3`
  color: blue;
`

const WorkText = styled.p`
  
`

const Link = styled.a`
  
`