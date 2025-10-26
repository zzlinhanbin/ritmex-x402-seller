import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-4xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <div className="flex flex-col items-center gap-12 text-center sm:items-start sm:text-left">
          <div className="flex flex-col items-center gap-6 sm:items-start">
            <div className="flex items-center gap-3">
              <div className="rounded-lg bg-gradient-to-br from-orange-500 to-red-500 px-4 py-2 text-2xl font-bold text-white">
                X402
              </div>
              <span className="text-lg text-zinc-600 dark:text-zinc-400">Seller</span>
            </div>
            <h1 className="max-w-2xl text-4xl font-semibold leading-tight tracking-tight text-black dark:text-zinc-50">
              Content Monetization with Micropayments
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-zinc-600 dark:text-zinc-400">
              A Next.js template for implementing pay-per-access content using the X402 protocol. 
              Enable creators to charge small amounts for premium content without traditional payment friction.
            </p>
          </div>

          <div className="grid w-full gap-8 sm:grid-cols-3">
            <div className="flex flex-col gap-3 p-6 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900">
              <div className="text-3xl">🔒</div>
              <h3 className="text-lg font-semibold text-black dark:text-zinc-50">Protected Access</h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">
                Blockchain-verified access control with pay-per-view model
              </p>
            </div>
            <div className="flex flex-col gap-3 p-6 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900">
              <div className="text-3xl">⚡</div>
              <h3 className="text-lg font-semibold text-black dark:text-zinc-50">Instant Payments</h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">
                Lightning-fast micropayments powered by X402 protocol
              </p>
            </div>
            <div className="flex flex-col gap-3 p-6 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900">
              <div className="text-3xl">📊</div>
              <h3 className="text-lg font-semibold text-black dark:text-zinc-50">Modern Stack</h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">
                Built with Next.js 16, React 19, and Tailwind CSS
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-4 w-full sm:flex-row">
            <Link
              href="/protected"
              className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-orange-500 to-red-500 px-6 text-white transition-all hover:shadow-lg hover:shadow-orange-500/25 sm:w-auto"
            >
              View Premium Content
            </Link>
            <a
              href="https://x402.org"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-6 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] sm:w-auto"
            >
              Learn About X402
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}
