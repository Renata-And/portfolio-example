import React from 'react'
import styled from 'styled-components'
import { FlexWrapper } from '../../../components/FlexWrapper'
import { SectionTitle } from '../../../components/SectionTitle'
import { Skill } from './skill/Skill'

export const Skills = () => {
  return (
    <StyledSkills>
      <SectionTitle>My Skills</SectionTitle>

      <FlexWrapper gap={'30px'}>
        <Skill
          iconId={'code'}
          title={'html5'}
          description={'1Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim'}
        />
        <Skill
          iconId={'css'}
          title={'css3'}
          description={'2Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim'}
        />
        <Skill
          iconId={'react'}
          title={'React'}
          description={'3Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim'} />
        <Skill
          iconId={'typescr'}
          title={'typescript'}
          description={'4Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim'} />
        <Skill
          iconId={'stylecomp'}
          title={'styled components'}
          description={'5Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim'} />
        <Skill
          iconId={'figma'}
          title={'WEB design  '}
          description={'6Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim'} />
      </FlexWrapper>
    </StyledSkills>
  )
}

const StyledSkills = styled.section`
  background-color: #e3e5fc;
  min-height: 100vh;
`