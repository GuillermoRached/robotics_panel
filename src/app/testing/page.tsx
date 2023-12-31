import fs from "fs"
import path from "path"

import { AddForm } from "./form"

export default async function Testing() {
    const filePath = path.join(process.cwd(), "public", "formData.txt");
    const data = fs.readFileSync(filePath, {encoding:"utf-8"}).split("\n")
    console.log(data)
    return (
        <div className="flex flex-col mt-8 items-center justify-center">
            <h1>TESTING Stuff!</h1>
            <AddForm className="flex flex-col my-12" />
            <div>
            </div>
        </div>
    )
}