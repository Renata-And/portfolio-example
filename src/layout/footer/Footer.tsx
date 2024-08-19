import React from 'react'
import styled from 'styled-components'
import { Icon } from '../../components/icon/Icon'
import { FlexWrapper } from '../../components/FlexWrapper'

export const Footer = () => {
  return (
    <StyledFooter>
      <FlexWrapper direction={'column'} align={'center'}>
        <Name>Svetlana</Name>
        <SocialList>
          <SocialItem>
            <SocialLink href={'#'}>
              <Icon iconId={'inst'} width={'21px'} height={'21px'} viewBox={'0 0 21 21'} />
            </SocialLink>
          </SocialItem>
          <SocialItem>
            <SocialLink href={'#'}>
              <Icon iconId={'linkedin'} width={'21px'} height={'21px'} viewBox={'0 0 21 21'} />
            </SocialLink>
          </SocialItem>
          <SocialItem>
            <SocialLink href={'#'}>
              <Icon iconId={'telegram'} width={'21px'} height={'21px'} viewBox={'0 0 21 21'} />
            </SocialLink>
          </SocialItem>
          <SocialItem>
            <SocialLink href={'#'}>
              <Icon iconId={'vk'} width={'21px'} height={'21px'} viewBox={'0 0 21 21'} />
            </SocialLink>
          </SocialItem>
        </SocialList>
        <Copyright>© 2023 Svetlana Dyablo, All Rights Reserved.</Copyright>
      </FlexWrapper>
    </StyledFooter>
  )
}

const StyledFooter = styled.footer`
  min-height: 50vh;
  background-color: #d7d4df;
`

const Name = styled.span`
  
`

const SocialList = styled.ul`
  display: flex;
  gap: 20px;
`

const SocialItem = styled.li`

`

const SocialLink = styled.a`
  
`

const Copyright = styled.small`

`