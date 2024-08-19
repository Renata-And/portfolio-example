import React from 'react';
import { Icon } from '../../../../components/icon/Icon';
import styled from 'styled-components';

type SkillPropsType = {
  iconId: string
  title: string
  description: string
};

export const Skill = (props: SkillPropsType) => {
  return (
    <StyledSkill>
      <Icon iconId={props.iconId} />
      <SkillTitle>{props.title}</SkillTitle>
      <SkillText>{props.description}</SkillText>
    </StyledSkill>
  );
};

const StyledSkill = styled.div`
  width: 30%;
  background-color: #f8f8f87a;
`;
const SkillTitle = styled.h3``;
const SkillText = styled.p``;
