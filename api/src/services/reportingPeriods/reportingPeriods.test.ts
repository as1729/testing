import type { ReportingPeriod } from '@prisma/client'

import {
  reportingPeriods,
  reportingPeriod,
  createReportingPeriod,
  updateReportingPeriod,
  deleteReportingPeriod,
} from './reportingPeriods'
import type { StandardScenario } from './reportingPeriods.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('reportingPeriods', () => {
  scenario(
    'returns all reportingPeriods',
    async (scenario: StandardScenario) => {
      const result = await reportingPeriods()

      expect(result.length).toEqual(
        Object.keys(scenario.reportingPeriod).length
      )
    }
  )

  scenario(
    'returns a single reportingPeriod',
    async (scenario: StandardScenario) => {
      const result = await reportingPeriod({
        id: scenario.reportingPeriod.one.id,
      })

      expect(result).toEqual(scenario.reportingPeriod.one)
    }
  )

  scenario('deletes a reportingPeriod', async (scenario: StandardScenario) => {
    const original = (await deleteReportingPeriod({
      id: scenario.reportingPeriod.one.id,
    })) as ReportingPeriod
    const result = await reportingPeriod({ id: original.id })

    expect(result).toEqual(null)
  })
})
