import styled from '@emotion/styled';

const IssueFormContainer = styled.form`
  display: flex;
  flex-direction: column;
  width: 80%;
  margin-left: 2rem;
  padding: 0.8rem;
  border-radius: 0.5rem;
  border: 0.1rem solid lightgray;

  & input,
  & textarea {
    border-radius: 0.3rem;
  }

  & .issue_form_btns {
    display: flex;
    justify-content: space-between;
  }

  & input {
    height: 2.5rem;
    font-size: 1.3rem;
    padding: 0rem 0.5rem;
  }

  & textarea {
    height: 45vh;
    min-height: 15rem;
    resize: vertical;
    font-size: 1.5rem;
    padding: 0.5rem;
    margin: 1.2rem 0;
  }
`;

export default IssueFormContainer;
