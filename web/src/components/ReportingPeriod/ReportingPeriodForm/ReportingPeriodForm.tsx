import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  Submit,
} from '@redwoodjs/forms'

import type {
  EditReportingPeriodById,
  UpdateReportingPeriodInput,
} from 'types/graphql'
import type { RWGqlError } from '@redwoodjs/forms'

type FormReportingPeriod = NonNullable<
  EditReportingPeriodById['reportingPeriod']
>

interface ReportingPeriodFormProps {
  reportingPeriod?: EditReportingPeriodById['reportingPeriod']
  onSave: (
    data: UpdateReportingPeriodInput,
    id?: FormReportingPeriod['id']
  ) => void
  error: RWGqlError
  loading: boolean
}

const ReportingPeriodForm = (props: ReportingPeriodFormProps) => {
  const onSubmit = (data: FormReportingPeriod) => {
    props.onSave(data, props?.reportingPeriod?.id)
  }

  return (
    <div className="rw-form-wrapper">
      <Form<FormReportingPeriod> onSubmit={onSubmit} error={props.error}>
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
          defaultValue={props.reportingPeriod?.name}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="name" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default ReportingPeriodForm
