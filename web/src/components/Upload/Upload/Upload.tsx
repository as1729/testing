import { Link, routes, navigate } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { timeTag } from 'src/lib/formatters'

import type {
  DeleteUploadMutationVariables,
  FindUploadById,
} from 'types/graphql'

const DELETE_UPLOAD_MUTATION = gql`
  mutation DeleteUploadMutation($id: Int!) {
    deleteUpload(id: $id) {
      id
    }
  }
`

interface Props {
  upload: NonNullable<FindUploadById['upload']>
}

const Upload = ({ upload }: Props) => {
  const [deleteUpload] = useMutation(DELETE_UPLOAD_MUTATION, {
    onCompleted: () => {
      toast.success('Upload deleted')
      navigate(routes.uploads())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id: DeleteUploadMutationVariables['id']) => {
    if (confirm('Are you sure you want to delete upload ' + id + '?')) {
      deleteUpload({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            Upload {upload.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{upload.id}</td>
            </tr>
            <tr>
              <th>Created at</th>
              <td>{timeTag(upload.createdAt)}</td>
            </tr>
            <tr>
              <th>Updated at</th>
              <td>{timeTag(upload.updatedAt)}</td>
            </tr>
            <tr>
              <th>Name</th>
              <td>{upload.name}</td>
            </tr>
            <tr>
              <th>Validated at</th>
              <td>{timeTag(upload.validatedAt)}</td>
            </tr>
            <tr>
              <th>User id</th>
              <td>{upload.userId}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editUpload({ id: upload.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(upload.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default Upload
