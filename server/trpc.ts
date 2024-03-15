import { initTRPC } from '@trpc/server';


const trpc = initTRPC.create();

export const router = trpc.router;
export const procedure = trpc.procedure;
