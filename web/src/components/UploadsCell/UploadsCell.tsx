import Table from 'react-bootstrap/Table'
import type { UploadsQuery } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

export const QUERY = gql`
  query UploadsQuery {
    uploads {
      id
      name
      validatedAt
    }
  }
`

export const Loading = () => <div>Retrieving uploads...</div>

export const Empty = () => <div>No Uploads found</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({ uploads }: CellSuccessProps<UploadsQuery>) => {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Upload ID</th>
          <th>Name</th>
          <th>Validated At</th>
        </tr>
      </thead>
      <tbody>
        {uploads.map((item) => {
          return (
            <tr
              key={item.id}
              className={item.validatedAt ? 'table-success' : ''}
            >
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.validatedAt}</td>
            </tr>
          )
        })}
      </tbody>
    </Table>
  )
}
