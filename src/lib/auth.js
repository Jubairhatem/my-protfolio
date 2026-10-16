import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "@better-auth/mongo-adapter";

const mongoUri = process.env.MONGODB_URI;

let database;
if (mongoUri) {
  let client;
  if (process.env.NODE_ENV === "development") {
    if (!global._mongoClient) {
      global._mongoClient = new MongoClient(mongoUri);
    }
    client = global._mongoClient;
  } else {
    client = new MongoClient(mongoUri);
  }
  const db = client.db("portfolio");
  database = mongodbAdapter(db, { client });
}

const socialProviders = {};
if (process.env.GOOGLE_CLIENT_ID && process.env.GOOGLE_CLIENT_SECRET) {
  socialProviders.google = {
    clientId: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  };
}
if (process.env.GITHUB_CLIENT_ID && process.env.GITHUB_CLIENT_SECRET) {
  socialProviders.github = {
    clientId: process.env.GITHUB_CLIENT_ID,
    clientSecret: process.env.GITHUB_CLIENT_SECRET,
  };
}
if (process.env.DISCORD_CLIENT_ID && process.env.DISCORD_CLIENT_SECRET) {
  socialProviders.discord = {
    clientId: process.env.DISCORD_CLIENT_ID,
    clientSecret: process.env.DISCORD_CLIENT_SECRET,
  };
}
if (process.env.LINKEDIN_CLIENT_ID && process.env.LINKEDIN_CLIENT_SECRET) {
  socialProviders.linkedin = {
    clientId: process.env.LINKEDIN_CLIENT_ID,
    clientSecret: process.env.LINKEDIN_CLIENT_SECRET,
  };
}

export const auth = betterAuth({
  database: database || {
    provider: "sqlite",
    url: ":memory:",
  },
  secret: process.env.BETTER_AUTH_SECRET || "1f554138c238d9e900457df190ecd549a6550d6c10ae1105702f1a47a7165b63",
  baseURL: process.env.BETTER_AUTH_URL || "http://localhost:3000",
  emailAndPassword: {
    enabled: true,
  },
  socialProviders,
});
