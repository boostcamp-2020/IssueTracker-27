import React from 'react';
import styled from '@emotion/styled';

const IssueItem = styled.li`
    border: 1px solid black;
`;

const Issue = ({issue}) => {
    return (
        <IssueItem>
            {issue.title}{issue.content}
        </IssueItem>
    );
};

export default Issue;