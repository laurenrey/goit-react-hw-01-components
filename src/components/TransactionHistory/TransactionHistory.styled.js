import styled from 'styled-components';

export const TransactionHistoryTable = styled.table`
  width: 600px;
  box-shadow: ${p => p.theme.shadows.shadow};

  th,
  td {
    border: 1px solid ${p => p.theme.colors.white};
    border-collapse: collapse;
    height: 40px;
  }

  thead {
    background-color: #0000ff;
    color: ${p => p.theme.colors.white};
    font-size: ${p => p.theme.fontSizes.m};
    text-transform: uppercase;
  }

  tr {
    text-align: center;
    :nth-child(2n) {
      background-color: #f0f8ff;
    }
  }

  tbody {
    background-color: #ccf2f2;
    font-size: ${p => p.theme.fontSizes.s};
    color: ${p => p.theme.colors.gray};
    text-transform: capitalize;
  }
`;
