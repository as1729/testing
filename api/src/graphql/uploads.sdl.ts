export const schema = gql`
  type Upload {
    id: Int!
    createdAt: DateTime!
    updatedAt: DateTime!
    name: String!
    validatedAt: DateTime
    user: User!
    userId: Int!
  }

  type Query {
    uploads: [Upload!]! @requireAuth
    upload(id: Int!): Upload @requireAuth
  }

  input CreateUploadInput {
    name: String!
    validatedAt: DateTime
    userId: Int!
  }

  input UpdateUploadInput {
    name: String
    validatedAt: DateTime
    userId: Int
  }

  type Mutation {
    createUpload(input: CreateUploadInput!): Upload! @requireAuth
    updateUpload(id: Int!, input: UpdateUploadInput!): Upload! @requireAuth
    deleteUpload(id: Int!): Upload! @requireAuth
  }
`
