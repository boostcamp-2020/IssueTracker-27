import React from 'react';
import Issue from './Issue';
import styled from '@emotion/styled';

const IssueItems = styled.ul`
    border: 4px solid black;
`;

const Issues = ({issues}) => {
    return (
        <IssueItems>
           {issues.map((issue) => <Issue key={issue.id} issue={issue}/> )} 
        </IssueItems>
    );
};

export default Issues;
