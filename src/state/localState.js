import { withClientState } from "apollo-link-state"
import { cache } from "../state"

export const clientStateLink = withClientState({
  cache,
  defaults: {},
  resolvers: {},
})
