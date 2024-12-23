CREATE TABLE "notes" (
	"id" uuid,
	"title" text NOT NULL,
	"userId" text NOT NULL,
	"description" text NOT NULL,
	"createdAt" timestamp with time zone DEFAULT now() NOT NULL,
	"updatedAt" timestamp with time zone DEFAULT now() NOT NULL
);
