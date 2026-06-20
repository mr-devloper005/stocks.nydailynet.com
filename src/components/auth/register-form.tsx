'use client'

import { FormEvent, useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Sparkles } from 'lucide-react'
import { useAuth } from '@/lib/auth-context'

export function RegisterForm({ actionClassName, mutedClassName }: { actionClassName: string; mutedClassName: string }) {
  const router = useRouter()
  const { signup, isLoading, isAuthenticated } = useAuth()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [purpose, setPurpose] = useState('')
  const [error, setError] = useState('')

  useEffect(() => {
    if (isAuthenticated) {
      router.replace('/dashboard')
    }
  }, [isAuthenticated, router])

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setError('')

    if (!name.trim() || !email.trim() || !password.trim()) {
      setError('Please fill in full name, email, and password.')
      return
    }

    await signup(name.trim(), email.trim(), password)
    router.replace('/dashboard')
  }

  return (
    <>
      <form className="mt-6 grid gap-4" onSubmit={handleSubmit}>
        <input
          className="h-12 rounded-xl border border-current/10 bg-transparent px-4 text-sm"
          placeholder="Full name"
          value={name}
          onChange={(event) => setName(event.target.value)}
          autoComplete="name"
        />
        <input
          className="h-12 rounded-xl border border-current/10 bg-transparent px-4 text-sm"
          placeholder="Email address"
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          autoComplete="email"
        />
        <input
          className="h-12 rounded-xl border border-current/10 bg-transparent px-4 text-sm"
          placeholder="Password"
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          autoComplete="new-password"
        />
        <input
          className="h-12 rounded-xl border border-current/10 bg-transparent px-4 text-sm"
          placeholder="What are you creating or publishing?"
          value={purpose}
          onChange={(event) => setPurpose(event.target.value)}
        />
        {error ? <p className="text-sm text-red-600">{error}</p> : null}
        <button
          type="submit"
          className={`inline-flex h-12 items-center justify-center rounded-full px-6 text-sm font-semibold ${actionClassName}`}
          disabled={isLoading}
        >
          {isLoading ? 'Creating account...' : 'Create account'}
        </button>
      </form>
      <div className={`mt-6 flex items-center justify-between text-sm ${mutedClassName}`}>
        <span>Already have an account?</span>
        <Link href="/login" className="inline-flex items-center gap-2 font-semibold hover:underline">
          <Sparkles className="h-4 w-4" />
          Sign in
        </Link>
      </div>
    </>
  )
}
