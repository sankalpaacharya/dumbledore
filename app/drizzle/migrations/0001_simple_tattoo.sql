ALTER TABLE "notes" ADD PRIMARY KEY ("id");--> statement-breakpoint
ALTER TABLE "notes" ALTER COLUMN "id" SET DEFAULT gen_random_uuid();--> statement-breakpoint
ALTER TABLE "notes" ALTER COLUMN "id" SET NOT NULL;