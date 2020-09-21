import styled from 'styled-components';

export const Container = styled.ul`
  margin-top: 20px;

  li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #444;
    border: 1px solid #444;
    border-radius: 5px;
    padding: 10px;

    & + li {
      margin-top: 15px;
    }
  }
`;

export const FileInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex: 1;

  button {
    border: 0;
    background: transparent;
    color: #e83f5b;
    margin-left: 5px;
    cursor: pointer;
  }

  div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    div {
      display: flex;
      flex-direction: row;

      span {
        font-size: 12px;
        color: #999;
        margin-top: 5px;
      }

      i {
        justify-content: flex-start;
        font-size: 12px;
        color: #999;
        margin-top: 5px;
        margin-right: auto;
      }
    }
  }
`;
