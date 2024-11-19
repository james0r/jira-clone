'use client'

import React from 'react'

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card'
import { DottedSeparator } from '@/components/dotted-separator'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { useJoinWorkspace } from '../api/use-join-workspace'
import { useInviteCode } from '../hooks/use-invite-code'
import { useWorkspaceId } from '../hooks/use-workspace-id'
import { useRouter } from 'next/navigation'

interface JoinWorkspaceFormProps {
  initialValues: {
    name: string
  }
}

const JoinWorkspaceForm = ({
  initialValues
}: JoinWorkspaceFormProps) => {
  const router = useRouter()
  const workspaceId = useWorkspaceId()
  const inviteCode = useInviteCode()
  const { mutate, isPending } = useJoinWorkspace()

  const onSubmit = () => {
    mutate({
      param: { workspaceId },
      json: { code: inviteCode }
    }, {
      onSuccess: (({ data }) => {
        router.push(`/workspaces/${data.$id}`)
      })
    })
  }

  return (
    <Card className="w-full h-full border-none shadow-none">
      <CardHeader className="p-7">
        <CardTitle className="text-xl font-bold">
          Join workspace
        </CardTitle>
        <CardDescription>
          You&apos;ve been invited to join <strong>{initialValues.name}</strong> workspace
        </CardDescription>
      </CardHeader>
      <div className="px-7">
        <DottedSeparator />
      </div>
      <CardContent className="p-7">
        <div className="flex gap-2 items-center justify-between flex-col lg:flex-row">
          <Button
            className="w-full lg:w-fit"
            variant="secondary"
            type="button"
            size="lg"
            asChild
            disabled={isPending}
          >
            <Link href="/"> Cancel</Link>
          </Button>
          <Button
            type="button"
            onClick={onSubmit}
            disabled={isPending}
            className="w-full lg:w-fit"
          >
            Join Workspace
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

export default JoinWorkspaceForm