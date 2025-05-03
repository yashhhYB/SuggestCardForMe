import type { NextApiRequest, NextApiResponse } from "next";
import { plaidClient } from "../../lib/plaid-new";
import { Products, CountryCode } from "plaid";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const tokenResponse = await plaidClient.linkTokenCreate({
      user: { client_user_id: "user-id" }, // Changed from PLAID_CLIENT_ID to a fixed user ID string
      client_name: "cardforme @ hackuiowa",
      language: "en",
      products: [Products.Auth],
      country_codes: [CountryCode.Us],
      redirect_uri: process.env.PLAID_SANDBOX_REDIRECT_URI,
    });

    return res.json(tokenResponse.data);
  } catch (error: any) {
    console.error("Error creating link token:", error);
    return res.status(500).json({ error: "Failed to create link token", details: error.message });
  }
}
