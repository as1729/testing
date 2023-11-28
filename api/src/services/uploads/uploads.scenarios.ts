import type { Prisma, Upload } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.UploadCreateArgs>({
  upload: {
    one: {
      data: { name: 'String', user: { create: { email: 'String5509197' } } },
    },
    two: {
      data: { name: 'String', user: { create: { email: 'String4212849' } } },
    },
  },
})

export type StandardScenario = ScenarioData<Upload, 'upload'>
