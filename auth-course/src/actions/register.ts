'use server';
import bcrypt from "bcrypt"
import { db } from "@/lib/db";
import * as z from "zod";
import { revalidatePath, revalidateTag } from "next/cache";
import { RegisterSchema } from '@/schemas'
import { error } from "console";
export const register = async (values: z.infer<typeof RegisterSchema>) => {
    // console.log(values);
    const validateFields = RegisterSchema.safeParse(values);
    if (!validateFields.success) {
        return { error: "Invalid fields!" };
    }

    const { email, password, name } = validateFields.data;
    const hashedPassword = await bcrypt.hash(password, 10);

    const existingUser = await db.user.findUnique({
        where: {
            email,
        }
    });

    if (existingUser) {
        return {
            error: "Email already in use!"
        };
    }

    await db.user.create({
        data: {
            name,
            email,
            password: hashedPassword,
        },
    });

    //send verification token email
    return { success: "User Created" };

};
