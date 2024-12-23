import { eq } from "drizzle-orm";
import { db } from "./db";
import { InsertNote, noteTable, SelectNote } from "./schema";

export async function createNote(data: InsertNote) {
    try {
        console.log("Starting database insertion with data:", data);
        
        const inserted = await db.insert(noteTable)
            .values(data)
            .returning({
                id: noteTable.id,
                title: noteTable.title,
                description: noteTable.description,
                userId: noteTable.userId
            });
            
        console.log("Database insertion successful:", inserted);
        return inserted[0];
        
    } catch (error) {
        console.error("Database insertion failed:", error);
        throw error;
    }
}

export async function selectNoteByUserId(userId:SelectNote["id"]):Promise<
Array<{
    id:string,
    title:string,
    description:string
}
>>{
    return db.select().from(noteTable).where(eq(noteTable.userId,userId));
}


export async function deleteNoteByUserId(userId:SelectNote["userId"]){
    return db.delete(noteTable).where(eq(noteTable.userId,userId));
}


export async function deleteNoteById(id:SelectNote["id"]){
    return db.delete(noteTable).where(eq(noteTable.userId,id));
}