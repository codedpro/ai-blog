"use client"

import type React from "react"

import { useEffect } from "react"
import { useToast } from "@/components/ui/use-toast"

export default function BlogPostClient({
  post,
  children,
}: {
  post: any | null
  children: React.ReactNode
}) {
  const { toast } = useToast()

  useEffect(() => {
    if (!post) {
      toast({
        title: "Post not found",
        description: "The requested blog post could not be found.",
        variant: "destructive",
      })
    }
  }, [post, toast])

  return <>{children}</>
}
