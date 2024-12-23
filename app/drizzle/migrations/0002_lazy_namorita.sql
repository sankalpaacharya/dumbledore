ALTER TABLE "notes" ADD COLUMN "user_id" text NOT NULL;--> statement-breakpoint
ALTER TABLE "notes" ADD COLUMN "created_at" timestamp with time zone DEFAULT now() NOT NULL;--> statement-breakpoint
ALTER TABLE "notes" ADD COLUMN "updated_at" timestamp with time zone DEFAULT now() NOT NULL;--> statement-breakpoint
ALTER TABLE "notes" DROP COLUMN "userId";--> statement-breakpoint
ALTER TABLE "notes" DROP COLUMN "createdAt";--> statement-breakpoint
ALTER TABLE "notes" DROP COLUMN "updatedAt";