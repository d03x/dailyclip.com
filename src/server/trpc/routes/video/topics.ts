import db from "@/server/db";
import { baseProcedure, createTRPCRouter } from "@/server/trpc/init";

export default createTRPCRouter({
    getFeatured : baseProcedure.query(async ()=>{
        const data = await db.topics.findMany()
        return data;
    })
})