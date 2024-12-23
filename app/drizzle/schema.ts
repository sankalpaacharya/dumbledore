import { pgTable, uuid,text, timestamp} from "drizzle-orm/pg-core";

const createdAt = timestamp({withTimezone:true}).notNull().defaultNow()
const updatedAt = timestamp({withTimezone:true}).notNull().defaultNow().$onUpdate(()=>new Date())

export const noteTable = pgTable("notes",{
    id:uuid().primaryKey().defaultRandom(),
    title:text().notNull(),
    userId:text().notNull(),
    description:text().notNull(),
    createdAt,
    updatedAt
})

export type InsertNote = typeof noteTable.$inferInsert
export type SelectNote = typeof noteTable.$inferSelect
