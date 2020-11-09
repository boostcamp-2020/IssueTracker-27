import styled from '@emotion/styled';

const IssueFormContainer = styled.form`
  display: flex;
  flex-direction: column;
  width: 65%;
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

  & .issue_form_text_area {
    position: relative;
    width: 100%;
  }
  & .issue_form_character_length {
    position: absolute;
    bottom: 1.8rem;
    right: 0.5rem;
  }

  & input {
    height: 2.5rem;
    font-size: 1.3rem;
    padding: 0rem 0.5rem;
  }

  & textarea {
    height: 45vh;
    width: 100%;
    min-height: 15rem;
    resize: vertical;
    font-size: 1.5rem;
    padding: 0.5rem;
    margin: 1.2rem 0;
  }
`;

export default IssueFormContainer;
