import type { Upload } from '@prisma/client'

import {
  uploads,
  upload,
  createUpload,
  updateUpload,
  deleteUpload,
} from './uploads'
import type { StandardScenario } from './uploads.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('uploads', () => {
  scenario('returns all uploads', async (scenario: StandardScenario) => {
    const result = await uploads()

    expect(result.length).toEqual(Object.keys(scenario.upload).length)
  })

  scenario('returns a single upload', async (scenario: StandardScenario) => {
    const result = await upload({ id: scenario.upload.one.id })

    expect(result).toEqual(scenario.upload.one)
  })

  scenario('creates a upload', async (scenario: StandardScenario) => {
    const result = await createUpload({
      input: { name: 'String', userId: scenario.upload.two.userId },
    })

    expect(result.name).toEqual('String')
    expect(result.userId).toEqual(scenario.upload.two.userId)
  })

  scenario('updates a upload', async (scenario: StandardScenario) => {
    const original = (await upload({ id: scenario.upload.one.id })) as Upload
    const result = await updateUpload({
      id: original.id,
      input: { name: 'String2' },
    })

    expect(result.name).toEqual('String2')
  })

  scenario('deletes a upload', async (scenario: StandardScenario) => {
    const original = (await deleteUpload({
      id: scenario.upload.one.id,
    })) as Upload
    const result = await upload({ id: original.id })

    expect(result).toEqual(null)
  })
})
