import styled from '@emotion/styled';

const FilterContainer = styled.div`
    display: flex;
    width: 70%;
    & details {
      position: relative;
    }

    & summary {
      padding: 0.5rem;
      border: 1px solid #E1E4E8;
      border-top-left-radius: 5px;
      border-bottom-left-radius: 5px;
      line-height: 1rem;
    }

    & summary::-webkit-details-marker { display: none; }
    
    & .filter_list {
      position: absolute;
      top: 3rem;
      width: 30vw;
      background-color: white;
      border: 1px solid #E1E4E8;
      border-radius: 5px;
      
      & .filter_item{
        padding: 0.5rem;
        border-bottom: 1px solid #E1E4E8;
        &:hover {
          background-color: gray;
          cursor: pointer;
        }
        &:first-child:hover {
          background-color: white;
          cursor: default;
        }
        &:last-child {
          border-bottom:none;
        }
      }
    }

  & .filter_input_wrap {
    display: flex;
    width: 70%;
    padding-left: 0.5rem;
    border: 1px solid #E1E4E8;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    align-items: center;

    &:focus-within {
      box-shadow: 0 0 0 3px #88b8ff;
    }
    
    & input {
      width: 100%;
      height: 100%;
      margin-left: 0.5rem;
      padding-left: 0.5rem;
      border-top-right-radius: 5px;
      border-bottom-right-radius: 5px;
      border: none;
      &:focus {
        outline: none;
      }
    }
  }
`;

export default FilterContainer;