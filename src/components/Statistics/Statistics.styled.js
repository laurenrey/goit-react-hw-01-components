import styled from 'styled-components';

export const Wrapper = styled.section`
  width: 400px;
  border: 1px solid ${p => p.theme.colors.gray};
  border-radius: 4px;
  text-align: center;
`;

export const Title = styled.h2`
  text-transform: uppercase;
  font-size: ${p => p.theme.fontSizes.xl};
  font-weight: 700;
  color: ${p => p.theme.colors.black};
  padding: 8px;
`;

export const StatList = styled.ul`
  display: grid;
  grid-auto-flow: column;
`;

export const StatItem = styled.li`
  display: flex;
  flex-direction: column;
  text-align: center;
  border-top: 1px solid ${p => p.theme.colors.gray};
  padding: 16px;
`;

export const Label = styled.span`
  color: ${p => p.theme.colors.gray};
  font-size: ${p => p.theme.fontSizes.s};
  font-weight: 500;
  margin-bottom: 8px;
`;

export const Percentage = styled.span`
  color: ${p => p.theme.colors.black};
  font-size: ${p => p.theme.fontSizes.m};
  font-weight: 500;
`;
