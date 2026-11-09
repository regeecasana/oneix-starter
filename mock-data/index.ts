/**
 * Mock data entry point. Components never import fixtures directly:
 * they receive data as props. Pages use these functions, which later become
 * calls to the ONEix API (`GET /customers/:id/insights`).
 */
import type { CustomerInsights, ScenarioGuide } from "@/contracts/customer-insights"
import { customers } from "./customers"
import { scenarioGuides } from "./scenario-guides"

export { customers } from "./customers"
export { segments } from "./segments"
export { scenarioGuides } from "./scenario-guides"

export function getCustomerInsights(customerId: string): CustomerInsights | undefined {
  return customers.find((c) => c.customerId === customerId)
}

export function getScenarioGuide(scenarioId: string): ScenarioGuide | undefined {
  return scenarioGuides.find((g) => g.scenarioId === scenarioId)
}
