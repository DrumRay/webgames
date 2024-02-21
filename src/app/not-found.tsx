import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex items-center min-h-screen px-4 text-center sm:px-6 dark:bg-gray-900">
      <div className="mx-auto space-y-4">
        <div className="space-y-2">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-6xl">404</h1>
          <p className="text-4x1 tracking-tighter sm:text-6xl">Страница не найдена</p>
          <p className="mx-auto max-w-3xl text-black-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            Похоже вы заблудились. Такой страницы не существует.
          </p>
        </div>
        <div>
          <Link
            className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 border-gray-200 bg-white px-8 text-sm font-medium shadow-sm dark:border-gray-800 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
            href="/"
          >
            На главную
          </Link>
        </div>
      </div>
    </div>
  )
}