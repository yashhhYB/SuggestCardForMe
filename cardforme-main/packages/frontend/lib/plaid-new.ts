import { Configuration, PlaidApi, PlaidEnvironments } from "plaid";

const configuration = new Configuration({
  basePath: PlaidEnvironments.sandbox,
  baseOptions: {
    headers: {
      "PLAID-CLIENT-ID": process.env.PLAID_CLIENT_ID || "sandbox-cards-3640be",
      "PLAID-SECRET": process.env.PLAID_SECRET || "419fbafe-eb2d-4500-9e74-c39f5e37a8bf",
      "Plaid-Version": "2020-09-14",
    },
  },
});

export const plaidClient = new PlaidApi(configuration);
