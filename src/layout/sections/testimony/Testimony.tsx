import React from 'react'
import styled from 'styled-components'
import { SectionTitle } from '../../../components/SectionTitle'
import { Icon } from '../../../components/icon/Icon'
import { Slider } from '../../../components/slider/Slider'
import { FlexWrapper } from '../../../components/FlexWrapper'

export const Testimony = () => {
  return (
    <StyledSection>
      <SectionTitle>Testimony</SectionTitle>
      <FlexWrapper direction={'column'} align={'center'}>
        <Icon iconId={'quotes'} />
        <Slider />
      </FlexWrapper>
    </StyledSection>
  )
}

const StyledSection = styled.section`
  background-color: #cccaca;
  min-height: 70vh;
`
