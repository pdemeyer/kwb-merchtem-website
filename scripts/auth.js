// auth.js
const express = require("express");
const open = require("open");
const { AuthorizationCode } = require("simple-oauth2");

const config = {
  client: {
  },
  auth: {
    tokenHost: "https://login.microsoftonline.com",
    authorizePath: "/YOUR_TENANT_ID/oauth2/v2.0/authorize",
    tokenPath: "/YOUR_TENANT_ID/oauth2/v2.0/token",
  },
};

const client = new AuthorizationCode(config);
const app = express();

const redirectUri = "http://localhost:3000/callback";

app.get("/login", (req, res) => {
  const authorizationUri = client.authorizeURL({
    redirect_uri: redirectUri,
    scope: "https://graph.microsoft.com/.default offline_access",
  });
  open(authorizationUri);
});

app.get("/callback", async (req, res) => {
  const code = req.query.code;
  const tokenParams = {
    code,
    redirect_uri: redirectUri,
    scope: "https://graph.microsoft.com/.default",
  };
  const accessToken = await client.getToken(tokenParams);
  res.send("Token ontvangen!");
  console.log("Bearer token:", accessToken.token.access_token);
});

app.listen(3000, () => {
  console.log("Server gestart op http://localhost:3000/login");
});
