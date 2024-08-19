import React from 'react'
import styled from 'styled-components'
import { SectionTitle } from '../../../components/SectionTitle'
import { Button } from '../../../components/Button'

export const Contact = () => {
  return (
    <StyledContacts>
      <SectionTitle>Contact</SectionTitle>
      <StyledForm>
        <Field placeholder={'Name'} />
        <Field placeholder={'Subject'} />
        <Field placeholder={'Message'} as={'textarea'} />
        <Button>Send message</Button>
      </StyledForm>
    </StyledContacts>
  )
}

const StyledContacts = styled.section`
  min-height: 70vh;
  background-color: #f1c9e7;
`
const StyledForm = styled.form`
  max-width: 540px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin: 0 auto;
`
const Field = styled.input`
  
`
