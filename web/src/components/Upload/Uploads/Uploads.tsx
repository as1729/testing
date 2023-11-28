import { Link, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { QUERY } from 'src/components/Upload/UploadsCell'
import { timeTag, truncate } from 'src/lib/formatters'

import type { DeleteUploadMutationVariables, FindUploads } from 'types/graphql'

const DELETE_UPLOAD_MUTATION = gql`
  mutation DeleteUploadMutation($id: Int!) {
    deleteUpload(id: $id) {
      id
    }
  }
`

const UploadsList = ({ uploads }: FindUploads) => {
  const [deleteUpload] = useMutation(DELETE_UPLOAD_MUTATION, {
    onCompleted: () => {
      toast.success('Upload deleted')
    },
    onError: (error) => {
      toast.error(error.message)
    },
    // This refetches the query on the list page. Read more about other ways to
    // update the cache over here:
    // https://www.apollographql.com/docs/react/data/mutations/#making-all-other-cache-updates
    refetchQueries: [{ query: QUERY }],
    awaitRefetchQueries: true,
  })

  const onDeleteClick = (id: DeleteUploadMutationVariables['id']) => {
    if (confirm('Are you sure you want to delete upload ' + id + '?')) {
      deleteUpload({ variables: { id } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Created at</th>
            <th>Updated at</th>
            <th>Name</th>
            <th>Validated at</th>
            <th>User id</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {uploads.map((upload) => (
            <tr key={upload.id}>
              <td>{truncate(upload.id)}</td>
              <td>{timeTag(upload.createdAt)}</td>
              <td>{timeTag(upload.updatedAt)}</td>
              <td>{truncate(upload.name)}</td>
              <td>{timeTag(upload.validatedAt)}</td>
              <td>{truncate(upload.userId)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.upload({ id: upload.id })}
                    title={'Show upload ' + upload.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editUpload({ id: upload.id })}
                    title={'Edit upload ' + upload.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete upload ' + upload.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(upload.id)}
                  >
                    Delete
                  </button>
                </nav>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default UploadsList
