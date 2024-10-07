import {
  Book,
  BookMarked,
  ChevronLeft,
  ChevronRight,
  Link2
} from 'lucide-react'
import React from 'react'
import { twMerge } from 'tailwind-merge'

interface IGithubRepo {
  id: number
  name: string
  description: string
  topics: string[]
  html_url: string
  homepage?: string
}

const REPOS_PER_PAGE = 6

async function fetchRepos(): Promise<IGithubRepo[]> {
  const data = await fetch(
    'https://api.github.com/users/jdavidoliveira/repos'
  ).then((response) => response.json())
  return data
}

export default async function Page({
  searchParams
}: {
  searchParams: { page?: string }
}) {
  const currentPage = searchParams.page ? parseInt(searchParams.page) : 1
  const data = await fetchRepos()

  const totalPages = Math.ceil(data.length / REPOS_PER_PAGE)
  const startIndex = (currentPage - 1) * REPOS_PER_PAGE
  const paginatedRepos = data.slice(startIndex, startIndex + REPOS_PER_PAGE)

  return (
    <main className="w-full mx-auto p-4 pt-16 flex flex-col items-center dark:bg-primary-dark">
      <h1 className="text-2xl font-bold mb-4 text-center">
        GitHub Repositories
      </h1>
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {paginatedRepos.map((repo) => (
          <RepoCard key={repo.id} repo={repo} />
        ))}
      </ul>

      <div className="flex justify-center items-center my-8">
        <a
          href={`?page=${currentPage - 1}`}
          className={twMerge(
            `p-2 aspect-square size-10 bg-gray-200 rounded mr-2`,
            currentPage === 1 && 'opacity-50 pointer-events-none'
          )}
        >
          <ChevronLeft />
        </a>
        {Array.from({ length: totalPages })
          .slice(0, 5)
          .map((_, index) => {
            const page = index + 1
            return (
              <a
                key={index}
                href={`?page=${page}`}
                className={twMerge(
                  `px-3 size-10 aspect-square bg-gray-200 rounded ml-2 flex items-center justify-center text-xl`,
                  currentPage === page && 'opacity-50 pointer-events-none'
                )}
              >
                {page}
              </a>
            )
          })}
        <a
          href={`?page=${currentPage + 1}`}
          className={twMerge(
            `p-2 aspect-square size-10 bg-gray-200 rounded ml-2`,
            currentPage === totalPages && 'opacity-50 pointer-events-none'
          )}
        >
          <ChevronRight />
        </a>
      </div>
    </main>
  )
}

function RepoCard({ repo }: { repo: IGithubRepo }) {
  return (
    <li
      key={repo.id}
      className="border p-4 rounded shadow-lg flex flex-col items-start"
    >
      <div className="flex-grow">
        <div className="flex items-center gap-2">
          <BookMarked className="size-6" />
          <h2 className="text-xl font-semibold">{repo.name}</h2>
        </div>

        <p className="text-gray-600">
          {repo.description
            ? repo.description.slice(0, 100) +
              `${repo.description.length > 100 ? '...' : ''}`
            : 'No description'}
        </p>
        <div className="flex flex-wrap gap-2 my-2">
          {repo.topics.map((topic, index) => (
            <span key={index} className="text-xs bg-gray-200 px-2 py-1 rounded">
              {topic}
            </span>
          ))}
        </div>
      </div>
      <div className="flex items-center gap-2">
        <a
          href={repo.html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
        >
          View Repository
        </a>
        {repo.homepage && (
          <a
            href={repo.homepage}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            <div className="flex items-center justify-center border rounded-full p-1">
              <Link2 className="size-6" />
            </div>
          </a>
        )}
      </div>
    </li>
  )
}
