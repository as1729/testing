export const schema = gql`
  type ReportingPeriod {
    id: Int!
    name: String
  }

  type Query {
    reportingPeriods: [ReportingPeriod!]! @requireAuth
    reportingPeriod(id: Int!): ReportingPeriod @requireAuth
  }

  input CreateReportingPeriodInput {
    name: String
  }

  input UpdateReportingPeriodInput {
    name: String
  }

  type Mutation {
    createReportingPeriod(input: CreateReportingPeriodInput!): ReportingPeriod!
      @requireAuth
    updateReportingPeriod(
      id: Int!
      input: UpdateReportingPeriodInput!
    ): ReportingPeriod! @requireAuth
    deleteReportingPeriod(id: Int!): ReportingPeriod! @requireAuth
  }
`
