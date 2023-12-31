import Link from "next/link"

export default function Home(){
  return (
    <div className="flex flex-col gap-12 items-center justify-center min-h-screen">
      <Link href={"/judge"}>
        <button className="bg-red-600 py-4 px-5 text-5xl rounded-lg border border-gray-50">
          Judge
        </button>
      </Link>
      <Link href={"/testing"}>
        <button className="bg-red-600 py-4 px-5 text-5xl rounded-lg border border-gray-50">
          Testing
        </button>
      </Link>
    </div>
  )
}
