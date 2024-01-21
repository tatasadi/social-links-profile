import Reference from "@/components/Reference"
import { Button } from "@/components/ui/button"
import avatar from "@/public/images/avatar-jessica.jpeg"
import Image from "next/image"

export default function Home() {
  return (
    <main className="flex h-full min-h-screen w-full max-w-7xl flex-col items-center p-6 lg:min-h-0 lg:pt-32">
      <div className="flex w-80 flex-col items-center gap-6 rounded-xl bg-neutral-darkgrey p-6 text-center lg:w-96 lg:p-10">
        <Image
          src={avatar}
          alt="avatar"
          className="aspect-square w-[5.5rem] rounded-full"
        />
        <div className="leading-9">
          <h1 className="text-2xl font-semibold">Jessica Randall</h1>
          <p className="text-sm font-bold text-primary-green">
            London, United Kingdom
          </p>
        </div>
        <p className="text-sm leading-[1.3125rem]">
          &quot;Front-end developer and avid reader.&quot;
        </p>
        <div className="flex w-full flex-col gap-4">
          <Button asChild>
            <a href="https://github.com" aria-label="github" target="_blank">
              GitHub
            </a>
          </Button>
          <Button asChild>
            <a
              href="https://frontendmentor.io"
              aria-label="frontend mentor"
              target="_blank"
            >
              Frontend Mentor
            </a>
          </Button>
          <Button asChild>
            <a
              href="https://linkedin.com"
              aria-label="linkedin"
              target="_blank"
            >
              LinkedIn
            </a>
          </Button>
          <Button asChild>
            <a href="https://twitter.com" aria-label="twitter" target="_blank">
              Twitter
            </a>
          </Button>
          <Button asChild>
            <a
              href="https://instagram.com"
              aria-label="instagram"
              target="_blank"
            >
              Instagram
            </a>
          </Button>
        </div>
      </div>
      <Reference />
    </main>
  )
}
