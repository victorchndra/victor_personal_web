import Link from "next/link";

export function Header() {
  return (
    <header className="mx-auto max-w-[1140px] px-4 py-6 mb-2">
      <div className="flex justify-center">
        <div className="flex justify-between max-w-[570px] items-center w-full">
          <h1 className="font-bold text-xl">Victor Chandra</h1>
          <nav className=" space-x-1">
            <Link href="/blog" className="underline">Blog</Link>
            <span>|</span>
            <Link href="/project" className="underline">Project</Link>
          </nav>
        </div>
      </div>
    </header>
  )
}