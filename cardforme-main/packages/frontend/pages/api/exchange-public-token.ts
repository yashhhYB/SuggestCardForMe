import { withIronSessionApiRoute } from "iron-session/next";
import { plaidClient } from "../../lib/plaid-new";
import { sessionOptions } from "../../lib/plaid";

export default withIronSessionApiRoute(exchangePublicToken, sessionOptions);

async function exchangePublicToken(req: any, res: any) {
  const exchangeResponse = await plaidClient.itemPublicTokenExchange({
    public_token: req.body.public_token,
  });

  req.session.access_token = exchangeResponse.data.access_token;
  await req.session.save();
  return res.send({ token: exchangeResponse.data.access_token });
}
