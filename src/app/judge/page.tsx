import Link from "next/link";

export default function Judge(){
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <div className="flex flex-col items-center">
            <h1 className="text-2xl font-bold">Group Selection</h1>
            <p className="text-l text-slate-500">Please select the group level to be judged</p>
        </div>
        {/* PICK LEVEL: Highschool | Middle school */}
        <div className="grid grid-cols-[1fr,1fr] gap-2 mt-6">
          <Link href={"/judge/highschool"}>
            <div className="bg-slate-600 text-center p-3 rounded-lg">
                High School
            </div>
          </Link>
          <Link href={"/judge/middleschool"}>
            <div className="bg-slate-600 text-center p-3 rounded-lg">
                Middle School
            </div>
          </Link>
        </div>
      </div>
    )
  }
  