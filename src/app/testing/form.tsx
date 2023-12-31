"use client"

import { useFormState } from "react-dom"
import { submitData } from "@/app/testing/actions"

export function AddForm({className}: {className: string}) {
    const [state, formAction] = useFormState(submitData, "")

    return (
        <form className={className} action={formAction}>
            <label>Name</label>
            <input type="text" name="name" required />
            <label className="mt-2">Score</label>
            <input type="number" name="score" required />
            <button type="submit" className=" bg-slate-300 text-black font-bold rounded mt-5">submit</button>
            <p aria-live="polite" className="sr-only" role="status">
                {state ?? null}
            </p>
        </form>
    )
}