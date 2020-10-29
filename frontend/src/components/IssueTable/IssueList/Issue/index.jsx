import React from 'react';
import {IssueItem} from './style';

const Issue = ({issue}) => {
    return (
        <IssueItem>
            {issue.title}{issue.description}
        </IssueItem>
    );
};

export default Issue;