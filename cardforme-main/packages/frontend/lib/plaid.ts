import { Configuration, PlaidApi, PlaidEnvironments } from "plaid";

console.log("PLAID_CLIENT_ID:", process.env.PLAID_CLIENT_ID);
console.log("PLAID_SECRET:", process.env.PLAID_SECRET);

const env = process.env.PLAID_ENV || "sandbox";

const plaidClient = new PlaidApi(
  new Configuration({
    basePath: PlaidEnvironments[env],
    baseOptions: {
      headers: {
        "PLAID-CLIENT-ID": process.env.PLAID_CLIENT_ID,
        "PLAID-SECRET": process.env.PLAID_SECRET,
        "Plaid-Version": "2020-09-14",
      },
    },
  })
);

const sessionOptions = {
  cookieName: "myapp_cookiename",
  password: "complex_password_at_least_32_characters_long",
  // secure: true should be used in production (HTTPS) but can't be used in development (HTTP)
  cookieOptions: {
    secure: process.env.NODE_ENV === "production",
  },
};

export { plaidClient, sessionOptions };
