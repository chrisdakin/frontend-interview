import * as React from "react";
import styled from 'styled-components';

const RepositorySearchResults = ({ searchResults }) => {
    const Container = styled.div`
    margin: 30px auto;
    border: 1px solid black;
    :hover {
        background-color: #d4d4d4;
        cursor: pointer;
    }
    ul {
      list-style: none;
      padding: 0px 20px;
      border-bottom-left-radius: 4px;
      border-bottom-right-radius: 4px;
      li {
        padding: 10px 0px;
        border-top: 1px solid black;
        :first-of-type {
          border-top: none;
        }
      }
    }

    `

    const mappedResults = searchResults.map(({
        description,
        score,
        fullName,
        openIssuesCount,
        stargazersCount
    }) => (
            <Container role="button">
                <ul>
                    <li name="description">Description: {description}</li>
                    <li name="score">Score: {score}</li>
                    <li name="full name">Full Name: {fullName}</li>
                    <li name="open issues count">Open Issues Count: {openIssuesCount}</li>
                    <li name="stargazers count">Stargazers Count: {stargazersCount}</li>
                </ul>
            </Container >
        ));

    return <div>{mappedResults}</div>
}

export default RepositorySearchResults;