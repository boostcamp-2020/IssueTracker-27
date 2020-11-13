import React from 'react';
import { MileStoneTileContainer, MileStoneTitleWraper } from './style';

const MileStoneTile = ({ milestone }) => {
  const MilestonesIssues = milestone.Issues
    ? milestone.Issues.reduce(
        (total, milestone) => {
          if (milestone.status) total.opendMileStoneIssue += 1;
          else total.closedMileStoneIssue += 1;
          return total;
        },
        {
          opendMileStoneIssue: 0,
          closedMileStoneIssue: 0
        }
      )
    : {
        opendMileStoneIssue: 0,
        closedMileStoneIssue: 0
      };
  return (
    <MileStoneTileContainer>
      <div>
        <div className='milestone_title'>
          <h2>{milestone.title}</h2>
        </div>
        <div className='milestone_date'>
          <span>
            <svg
              className='octicon octicon-calendar'
              viewBox='0 0 16 16'
              version='1.1'
              width='16'
              height='16'
              aria-hidden='true'
            >
              <path
                fillRule='evenodd'
                d='M4.75 0a.75.75 0 01.75.75V2h5V.75a.75.75 0 011.5 0V2h1.25c.966 0 1.75.784 1.75 1.75v10.5A1.75 1.75 0 0113.25 16H2.75A1.75 1.75 0 011 14.25V3.75C1 2.784 1.784 2 2.75 2H4V.75A.75.75 0 014.75 0zm0 3.5h8.5a.25.25 0 01.25.25V6h-11V3.75a.25.25 0 01.25-.25h2zm-2.25 4v6.75c0 .138.112.25.25.25h10.5a.25.25 0 00.25-.25V7.5h-11z'
              ></path>
            </svg>
          </span>
          <span> Due by {milestone.dueDate}</span>
        </div>
        <div className='milestone_des'>{milestone.description}</div>
      </div>
      <div>
        <div className='graph'></div>
        <MileStoneTitleWraper>
          <span>
            {milestone.Issues &&
              ~~(
                (MilestonesIssues.closedMileStoneIssue /
                  milestone.Issues.length) *
                100
              )}
            % Complete
          </span>
          <span>{MilestonesIssues.opendMileStoneIssue}Open</span>
          <span>{MilestonesIssues.closedMileStoneIssue}Closed</span>
        </MileStoneTitleWraper>
        <MileStoneTitleWraper>
          <span className='small_blue_btn'>Edit</span>
          <span className='small_blue_btn'>Close</span>
          <span className='small_red_btn'>Delete</span>
        </MileStoneTitleWraper>
      </div>
    </MileStoneTileContainer>
  );
};

export default MileStoneTile;
