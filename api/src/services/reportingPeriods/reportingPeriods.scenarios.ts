import type { Prisma, ReportingPeriod } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.ReportingPeriodCreateArgs>({
  reportingPeriod: { one: { data: {} }, two: { data: {} } },
})

export type StandardScenario = ScenarioData<ReportingPeriod, 'reportingPeriod'>
