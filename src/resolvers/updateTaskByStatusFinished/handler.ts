/**
 * This file was generated using 8base CLI.
 *
 * To learn more about writing custom GraphQL resolver functions, visit
 * the 8base documentation at:
 *
 * https://docs.8base.com/docs/8base-console/custom-functions/resolvers/
 *
 * To update this functions invocation settings, update its configuration block
 * in the projects 8base.yml file:
 *  functions:
 *    updateTaskByStatusFinished:
 *      ...
 *
 * Data that is sent to this function can be accessed on the event argument at:
 *  event.data[KEY_NAME]
 *
 * There are two ways to invoke this function locally:
 *
 *  (1) Explicit file mock file path using '-p' flag:
 *    8base invoke-local updateTaskByStatusFinished -p src/resolvers/updateTaskByStatusFinished/mocks/request.json
 *
 *  (2) Default mock file location using -m flag:
 *    8base invoke-local updateTaskByStatusFinished -m request
 *
 *  Add new mocks to this function to test different input arguments. Mocks can easily be generated
 *  the following generator command:
 *    8base generate mock updateTaskByStatusFinished -m [MOCK_FILE_NAME]
 */

import {
  FunctionContext,
  FunctionEvent,
  FunctionResult,
} from "8base-cli-types";
import { gql } from "graphql-tag";

/**
 *  update entry mutation.
 */
export const ENTRY_UPDATE_MUTATION = gql`
  mutation EntryCreate(
    $id: ID
    $description: String
    $status: String
    $responsibleIs: String
    $informerIs: String
  ) {
    entryUpdate(
      data: {
        id: $id
        description: $description
        status: $status
        responsibleIs: $responsibleIs
        informerIs: $informerIs
      }
    ) {
      id
      description
      status
      responsibleIs
      informerIs
      createdAt
      updatedAt
    }
  }
`;

type ResolverResult = FunctionResult<{
  result: boolean;
}>;

interface Props {
  id: string;
  description: string;
  status: string;
  responsibleIs: string;
  informerIs: string;
}

export default async (
  event: FunctionEvent<Props>,
  ctx: FunctionContext
): ResolverResult => {
  const { id, description, status, responsibleIs, informerIs } = event.data;

  try {
    await ctx.api.gqlRequest(ENTRY_UPDATE_MUTATION, {
      id,
      description,
      status,
      responsibleIs,
      informerIs,
    },
    {
      headers: {
        Authorization: `Bearer 00856dac-787b-49e2-b7b6-a64397db72d6`,
      },
    });
  } catch (error) {
    return {
      data: {
        result: false,
      },
    };
  }

  return {
    data: {
      result: true,
    },
  };
};
