import {z} from 'zod'

export const createTaskSchema = z.object({
    title: z.string({
        required_error: "tittle is required"
    }),
    description: z.string({
        required_error : "description should be a string"
    }),
    date: z.string().datetime().optional(),
})