import React from 'react'
import { GetServerSideProps } from 'next'
import prisma from '../../../../lib/prisma'
import Link from 'next/link'
import Layout from '../../../../components/layout/Layout'

type Props = {
  username: string
  logs: {
    id: string
    slug: string
    title: string
    createdAt: string
  }[]
}

export default function UserLogsPage({ username, logs }: Props) {
  return (
    <Layout>
      <h1 className="text-2xl font-bold mb-4 text-white">
        {username.charAt(0).toUpperCase() + username.slice(1).toLowerCase()}
        &apos;s Mission Logs
      </h1>
      {logs.length === 0 ? (
        <p>No logs yet.</p>
      ) : (
        <ul className="space-y-3">
          {logs.map((log) => (
            <li key={log.id}>
              <Link href={`/logs/user/${username}/${log.slug}`}>
                <span className="text-blue-600 hover:underline">
                  {log.title}
                </span>
              </Link>
              <div className="text-sm text-gray-500">
                {new Date(log.createdAt).toLocaleDateString()}
              </div>
            </li>
          ))}
        </ul>
      )}
      <Link href="/logs/new" className="mt-6 inline-block">
        <span className="text-blue-600 hover:underline">Create Log</span>
      </Link>
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const username = context.params?.username as string

  const user = await prisma.user.findUnique({
    where: { username },
    include: {
      logs: {
        orderBy: { createdAt: 'desc' },
        select: {
          id: true,
          slug: true,
          title: true,
          createdAt: true,
        },
      },
    },
  })

  if (!user) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      username,
      logs: user.logs.map((log) => ({
        ...log,
        createdAt: log.createdAt.toISOString(),
      })),
    },
  }
}
