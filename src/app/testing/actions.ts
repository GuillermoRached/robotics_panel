'use server'

import fs from "fs"
import { revalidatePath } from "next/cache"
import path from "path"

export async function submitData(prevState: any, formData: FormData) {
    // Grab data
    const name = formData.get("name")
    const val = formData.get("score")

    // Format data
    const formattedData = `${name}: ${val}\n`

    // Write/Append to file
    try {
        const filePath = path.join(process.cwd(), 'public', 'formData.txt');
        fs.appendFile(filePath, formattedData, (err) => {
            if (err) {
                console.error('Error writing to file:', err);
                throw new Error(`Error saving data: ${err.message}`);
            }
        })
    } catch (e) {
        console.error(e);
    }

    revalidatePath("/testing")

    return "Submission saved!"
}