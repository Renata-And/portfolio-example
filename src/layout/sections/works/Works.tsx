import React from 'react'
import styled from 'styled-components'
import { SectionTitle } from '../../../components/SectionTitle'
import { Menu } from '../../../components/menu/Menu'
import { Work } from './work/Work'
import proj1Image from '../../../assets/images/proj-1.png'
import proj2Image from '../../../assets/images/proj-2.png'
import { FlexWrapper } from '../../../components/FlexWrapper'

const worksItems = ['All', 'landing page', 'React', 'spa']

export const Works = () => {
  return (
    <StyledWorks>

      <SectionTitle>My Works</SectionTitle>
      <Menu items={worksItems} />
      <FlexWrapper justify={'space-around'}>
        <Work
          src={proj1Image}
          title={'Social Network'}
          text={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.'} />
        <Work
          src={proj2Image}
          title={'Timer'}
          text={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit  ut labore et dolore magna aliqua Ut enim'} />
      </FlexWrapper>
    </StyledWorks>
  )
}

const StyledWorks = styled.section`
  background-color: #f7e8cc;
  min-height: 100vh;
`