import styled from 'styled-components';

export const Wrapper = styled.div`
  border: 1px solid ${p => p.theme.colors.gray};
  border-radius: ${p => p.theme.radii.bradius};
  width: 350px;
  background-color: ${p => p.theme.colors.background};
  margin-bottom: 32px;
`;

export const Avatar = styled.img`
  border-radius: ${p => p.theme.radii.round};
  margin-bottom: 16px;
  margin-top: 16px;
`;

export const Username = styled.p`
  font-size: ${p => p.theme.fontSizes.xl};
  font-weight: 700;
  color: ${p => p.theme.colors.black};
  margin-bottom: 8px;
`;

export const Tag = styled.p`
  font-size: ${p => p.theme.fontSizes.l};
  font-weight: 500;
  color: ${p => p.theme.colors.gray};
  margin-bottom: 8px;
`;

export const Location = styled.p`
  font-size: ${p => p.theme.fontSizes.m};
  font-weight: 500;
  color: ${p => p.theme.colors.gray};
  margin-bottom: 8px;
`;

export const Label = styled.span`
  font-size: ${p => p.theme.fontSizes.s};
  font-weight: 500;
  color: ${p => p.theme.colors.gray};
  display: block;
  margin-bottom: 4px;
`;

export const Quantity = styled.span`
  font-size: ${p => p.theme.fontSizes.m};
  font-weight: 700;
  color: ${p => p.theme.colors.black};
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  padding: 8px;
`;

export const Stats = styled.ul`
  display: flex;
  flex-direction: row;
  text-align: center;
  justify-content: space-evenly;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  background-color: ${p => p.theme.colors.backgroundSecondary};
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  text-align: center;
  border-top: 1px solid ${p => p.theme.colors.gray};
  :not(:last-child) {
    border-right: 1px solid ${p => p.theme.colors.gray};
  }
  padding: 8px;
`;
