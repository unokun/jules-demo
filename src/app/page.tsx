import Image from "next/image";
import Link from 'next/link';

export default function Home() {
  return (
    <div className="font-sans flex items-center justify-center min-h-screen">
      <main className="flex flex-col items-center gap-8">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <h1 className="text-2xl font-semibold">ダッシュボードデモ</h1>
        <p>以下のリンクからダッシュボードページに移動してください。</p>
        <Link
          href="/dashboard"
          className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
        >
          ダッシュボードへ
        </Link>
      </main>
    </div>
  );
}