import type {
  QueryResolvers,
  MutationResolvers,
  UploadRelationResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const uploads: QueryResolvers['uploads'] = () => {
  return db.upload.findMany()
}

export const upload: QueryResolvers['upload'] = ({ id }) => {
  return db.upload.findUnique({
    where: { id },
  })
}

export const createUpload: MutationResolvers['createUpload'] = ({ input }) => {
  return db.upload.create({
    data: input,
  })
}

export const updateUpload: MutationResolvers['updateUpload'] = ({
  id,
  input,
}) => {
  return db.upload.update({
    data: input,
    where: { id },
  })
}

export const deleteUpload: MutationResolvers['deleteUpload'] = ({ id }) => {
  return db.upload.delete({
    where: { id },
  })
}

export const Upload: UploadRelationResolvers = {
  user: (_obj, { root }) => {
    return db.upload.findUnique({ where: { id: root?.id } }).user()
  },
}
