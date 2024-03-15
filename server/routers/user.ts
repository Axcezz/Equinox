import { z } from "zod";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
import { procedure, router } from "../trpc";


export const userRouter = router({

getUsers: procedure.query( async () => {
    return await prisma.user.findMany();
}),
addUser: procedure.input(z.object({ username: z.string(), email: z.string(), password: z.string() })).mutation( async (opts) => {
    const { input } = opts;
    await prisma.user.create({
        data: {
            username: input.username,
            email: input.email,
            password: input.password,
            createdAt: new Date(),
        },
        });
    }),
});
