import { defineConfig } from "drizzle-kit";

export default defineConfig({
  schema: "./drizzle/schema.ts",
  dbCredentials: {
    url: process.env.DATABASE_URL! as string,
  },
  out: "./drizzle/migrations",
  dialect: "postgresql",
  strict: true,
  verbose: true,
});
