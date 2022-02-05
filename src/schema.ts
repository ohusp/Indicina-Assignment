import { makeExecutableSchema } from "@graphql-tools/schema";

export const typeDefs = `

  type Stargazers {
    totalCount: Int!
  }

  type LicenseInfo {
    name: String!
  }

  type PrimaryLanguage {
    name: String!
  }

  type Node {
    name: String!
    stargazers: Stargazers!
    primaryLanguage: PrimaryLanguage!
    description: String!
    licenseInfo: LicenseInfo!
    updatedAt: String!
  }

  type Edges {
    node: Node!
  }

  type Repository {
    repositoryCount: Int!
    edges: Edges!
  }

  type User {
    name: String!
    company: String!
    bio: String!
  }

  type RepoUser {
    repository: Repository!
    user: User!
  }

  
  type Query {
    search(query: String!): RepoUser!
  }

`;

export const schema = makeExecutableSchema({ typeDefs });
