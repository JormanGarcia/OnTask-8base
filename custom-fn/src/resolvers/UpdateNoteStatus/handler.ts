/**
 * This file was generated using 8base CLI.
 *
 * To learn more about writing custom GraphQL resolver functions, visit
 * the 8base documentation at:
 *
 * https://docs.8base.com/8base-console/custom-functions/resolvers
 *
 * To update this functions invocation settings, update its configuration block
 * in the projects 8base.yml file:
 *  functions:
 *    UpdateNoteStatus:
 *      ...
 *
 * Data that is sent to this function can be accessed on the event argument at:
 *  event.data[KEY_NAME]
 *
 * There are two ways to invoke this function locally:
 *
 *  (1) Explicit file mock file path using '-p' flag:
 *    8base invoke-local UpdateNoteStatus -p src/resolvers/UpdateNoteStatus/mocks/request.json
 *
 *  (2) Default mock file location using -m flag:
 *    8base invoke-local UpdateNoteStatus -m request
 *
 *  Add new mocks to this function to test different input arguments. Mocks can easily be generated
 *  the following generator command:
 *    8base generate mock UpdateNoteStatus -m [MOCK_FILE_NAME]
 */

import {
  FunctionContext,
  FunctionEvent,
  FunctionResult,
} from "8base-cli-types";

import { gql } from "graphql-tag";
type ResolverResult = FunctionResult<{
  result: string;
}>;

const Resolver = async (
  event: FunctionEvent<{ id: string; status: boolean }>,
  ctx: FunctionContext
) => {
  const Mutation = gql`
    mutation update($id: ID, $status: Boolean!) {
      taskUpdate(data: { isCompleted: $status }, filter: { id: $id }) {
        id
        isCompleted
      }
    }
  `;

  await ctx.api.gqlRequest(
    Mutation,
    {
      id: event.data.id,
      status: event.data.status,
    },
    {
      headers: {
        Authorization: "Bearer 3931c895-66a9-4b94-8bfd-4fd0b36bfd54",
      },
    }
  );

  return {
    data: {
      result: `${event.data.id}: ${event.data.status}`,
    },
  };
};

export default Resolver;
