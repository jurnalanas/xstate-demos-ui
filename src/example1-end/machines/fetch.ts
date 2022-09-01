import { Machine, assign } from "xstate";

interface FetchStates {
  states: {
    idle: {};
    pending: {};
    successful: {};
    failed: {};
  };
}

type FetchMachineEvents =
  | { type: "FETCH" }
  | { type: "RESOLVE"; results: any[] }
  | { type: "REJECT"; message: string };

interface FetchContext {
  results: any[];
  message: string;
}

export const fetchMachine = Machine<
  FetchContext,
  FetchStates,
  FetchMachineEvents
>(
  {
    id: "fetch",
    initial: "idle",
    // context: to store data
    context: {
      results: [],
      message: "",
    },
    states: {
      idle: {
        on: {
          FETCH: "pending",
        },
      },
      pending: {
        entry: ["fetchData"],
        on: {
          // target state in an object, so you can add `actions` to it
          RESOLVE: { target: "successful", actions: ["setResults"] },
          REJECT: { target: "failed", actions: ["setMessage"] },
        },
      },
      failed: {
        // if no actions needed, can just put it in a string
        on: {
          FETCH: "pending",
        },
      },
      successful: {
        on: {
          FETCH: "pending",
        },
      },
    },
  },
  {
    actions: {
      setResults: assign((ctx, event: any) => ({
        results: event.results,
      })),
      setMessage: assign((ctx, event: any) => ({
        message: event.message,
      })),
    },
  }
);
