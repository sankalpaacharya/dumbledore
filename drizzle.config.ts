import { defineConfig } from "drizzle-kit";
import { config } from 'dotenv';


config({ path: '.env' });

export default defineConfig({
  dialect: 'postgresql', 
  schema: './app/drizzle/schema.ts',
  out: './app/drizzle/migrations',
  strict:true,
  verbose:true,
  casing:"snake_case",
  dbCredentials:{
    url:process.env.DATABASE_URL!,
    
  }
})
