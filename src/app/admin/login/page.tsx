"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminLoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    setLoading(true);

    const response = await fetch("/api/admin/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const payload = await response.json();
    setLoading(false);

    if (!response.ok) {
      setError(payload.error || "Login failed.");
      return;
    }

    router.push("/admin");
  }

  return (
    <main className="overflow-hidden h-screen bg-[#faf9f7] px-4 pb-10 pt-12 mt-24 flex justify-center items-center text-slate-900">
      <div className="mx-auto max-w-2xl rounded-4xl border border-black/10 bg-white p-10 shadow-xl shadow-black/5">
        <div className="mb-8">
          <p className="text-sm uppercase tracking-[0.3em] text-[#886c46]">Admin login</p>
          <h1 className="mt-4 text-4xl font-bold">Secure access only</h1>
          <p className="mt-3 text-sm text-slate-600">Enter your admin credentials to view contact submissions.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <label className="block space-y-2 text-sm text-slate-700">
            <span>Email</span>
            <input
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              className="w-full rounded-2xl border border-slate-300 bg-[#faf9f7] px-4 py-3 text-sm outline-none transition focus:border-[#886c46] focus:ring-2 focus:ring-[#886c46]/15"
              placeholder="admin@example.com"
              required
            />
          </label>

          <label className="block space-y-2 text-sm text-slate-700">
            <span>Password</span>
            <input
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              className="w-full rounded-2xl border border-slate-300 bg-[#faf9f7] px-4 py-3 text-sm outline-none transition focus:border-[#886c46] focus:ring-2 focus:ring-[#886c46]/15"
              placeholder="Enter admin password"
              required
            />
          </label>

          {error ? <p className="text-sm text-red-600">{error}</p> : null}

          <button
            type="submit"
            disabled={loading}
            className="inline-flex w-full items-center justify-center rounded-full bg-[#111110] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#886c46] disabled:cursor-not-allowed disabled:opacity-60"
          >
            {loading ? "Signing in..." : "Sign in"}
          </button>
        </form>
      </div>
    </main>
  );
}
