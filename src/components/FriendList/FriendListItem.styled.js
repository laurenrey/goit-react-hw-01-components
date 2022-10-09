import styled from 'styled-components';

export const FriendItemCard = styled.li`
  display: flex;
  align-items: center;
  border: 1px solid ${p => p.theme.colors.black};
  border-radius: ${p => p.theme.radii.bradius};
  width: 280px;
  padding: 8px;
  :not(:last-child) {
    margin-bottom: 12px;
  }
  box-shadow: ${p => p.theme.shadows.shadow};
`;

export const Status = styled.span`
  width: 16px;
  height: 16px;
  border-radius: ${p => p.theme.radii.round};
  background-color: ${p =>
    p.isOnline ? p.theme.colors.online : p.theme.colors.offline};
  margin-left: 12px;
`;

export const FriendAvatar = styled.img`
  margin-left: 12px;
`;

export const FriendName = styled.p`
  color: ${p => p.theme.colors.black};
  font-size: ${p => p.theme.fontSizes.l};
  font-weight: 500;
  margin-left: 20px;
`;
