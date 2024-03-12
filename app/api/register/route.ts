import prisma from "@/lib/prisma";

export async function POST(req: Request) {
const body = await req.json();

const result = await prisma.user.create({
    data: {
        username: body.username,
        email: body.email,
        password: body.password,
        createdAt: body.createdAt,
    },
})
if (!result) return Response.json({
    message: 'error',
    status: 500
})
return Response.json({
    message: 'success',
    status: 200,
    data: result
})
}
