import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  DatetimeLocalField,
  NumberField,
  Submit,
} from '@redwoodjs/forms'

import type { EditUploadById, UpdateUploadInput } from 'types/graphql'
import type { RWGqlError } from '@redwoodjs/forms'

const formatDatetime = (value) => {
  if (value) {
    return value.replace(/:\d{2}\.\d{3}\w/, '')
  }
}

type FormUpload = NonNullable<EditUploadById['upload']>

interface UploadFormProps {
  upload?: EditUploadById['upload']
  onSave: (data: UpdateUploadInput, id?: FormUpload['id']) => void
  error: RWGqlError
  loading: boolean
}

const UploadForm = (props: UploadFormProps) => {
  const onSubmit = (data: FormUpload) => {
    props.onSave(data, props?.upload?.id)
  }

  return (
    <div className="rw-form-wrapper">
      <Form<FormUpload> onSubmit={onSubmit} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName="rw-form-error-wrapper"
          titleClassName="rw-form-error-title"
          listClassName="rw-form-error-list"
        />

        <Label
          name="name"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Name
        </Label>

        <TextField
          name="name"
          defaultValue={props.upload?.name}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="name" className="rw-field-error" />

        <Label
          name="validatedAt"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Validated at
        </Label>

        <DatetimeLocalField
          name="validatedAt"
          defaultValue={formatDatetime(props.upload?.validatedAt)}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="validatedAt" className="rw-field-error" />

        <Label
          name="userId"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          User id
        </Label>

        <NumberField
          name="userId"
          defaultValue={props.upload?.userId}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="userId" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default UploadForm
