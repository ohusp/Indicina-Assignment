import gql from 'graphql-tag';

export const SEARCH_FOR_REPOS = gql`
    query($searchTerm: String!, $after: String) {
        search(query: $searchTerm, type: REPOSITORY, first: 100, after: $after) {
            repositoryCount,
            edges {
                node {
                    ... on Repository {
                        name,
                        stargazers {
                            totalCount
                        },
                        primaryLanguage {
                            name
                        },
                        description,
                        licenseInfo {
                          name
                        },
                        updatedAt
                    }
                }
            }
            pageInfo {
                endCursor
            }
        }
    }
`;

export const SEARCH_FOR_USERS = gql`
    query($searchTerm: String!, $after: String) {
        search(query: $searchTerm, type: USER, first: 100, after: $after) {
            userCount,
            edges {
                node {
                    ... on User {
                        name,
                        company,
                        bio
                    }
                }
            }
            pageInfo {
                endCursor
            }
        }
    }
`;
