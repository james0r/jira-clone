import { getCurrent } from '@/features/auth/actions'
import { redirect } from 'next/navigation'
import React from 'react'

const WorkspaceIdPage = async ({ workspaceId }: {
  workspaceId: string
}) => {
  const user = await getCurrent()
  if (!user) redirect('/sign-in')

  return (
    <div>
      WorkspaceIdPage
      <span>{workspaceId}</span>
    </div>
  )
}

export default WorkspaceIdPage