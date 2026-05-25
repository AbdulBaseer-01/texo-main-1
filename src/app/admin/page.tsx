import { redirect } from "next/navigation";
import { getAdminSessionEmail } from "@/lib/adminAuth";
import { supabaseAdmin } from "@/lib/supabaseAdmin";

export default async function AdminPage() {
  const email = await getAdminSessionEmail();
  if (!email) {
    redirect("/admin/login");
  }

  const { data: submissions, error } = await supabaseAdmin
    .from("contact_submissions")
    .select("id, name, email, phone, message, created_at")
    .order("created_at", { ascending: false });

  if (error) {
    return (
      <main className="min-h-screen bg-[#faf9f7] text-black p-6 mt-22 pt-22">
        <div className="mx-auto max-w-6xl">
          <h1 className="text-3xl font-bold mb-4">Admin panel</h1>
          <p className="text-red-600">Unable to load submissions: {error.message}</p>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#faf9f7] px-4 py-10 text-slate-900 mt-12 pt-22">
      <div className="mx-auto max-w-7xl">
        <header className="mb-8 flex flex-col gap-4 rounded-3xl border mt-12 pt-22 border-black/10 bg-white p-8 shadow-lg shadow-black/5">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.25em] text-[#886c46]">Secure admin dashboard</p>
              <h1 className="mt-2 text-4xl font-bold">Contact submissions</h1>
              <p className="mt-2 max-w-2xl text-sm text-slate-600">
                Only authenticated admin users can access this page. All contact form submissions are stored in Supabase.
              </p>
            </div>
          </div>
          <form action="/api/admin/logout" method="post">
            <button
              type="submit"
              className="inline-flex items-center justify-center rounded-full bg-[#111110] px-5 py-3 text-sm font-medium text-white transition hover:bg-[#886c46]"
            >
              Logout
            </button>
          </form>
        </header>

        <section className="space-y-6">
          <div className="overflow-x-auto rounded-3xl border border-black/10 bg-white shadow-sm">
            <table className="min-w-full border-collapse text-sm">
              <thead className="bg-[#f8f4ef] text-left text-xs uppercase tracking-[0.2em] text-slate-600">
                <tr>
                  <th className="px-4 py-4">Name</th>
                  <th className="px-4 py-4">Email</th>
                  <th className="px-4 py-4">Phone</th>
                  <th className="px-4 py-4">Message</th>
                  <th className="px-4 py-4">Submitted</th>
                </tr>
              </thead>
              <tbody>
                {submissions && submissions.length > 0 ? (
                  submissions.map((item) => (
                    <tr key={item.id ?? `${item.email}-${item.created_at}`} className="border-t border-slate-200">
                      <td className="px-4 py-4 align-top font-medium text-slate-900">{item.name}</td>
                      <td className="px-4 py-4 align-top text-slate-700">{item.email}</td>
                      <td className="px-4 py-4 align-top text-slate-700">{item.phone || "—"}</td>
                      <td className="px-4 py-4 align-top text-slate-700 max-w-lg whitespace-pre-wrap wrap-break-word">{item.message}</td>
                      <td className="px-4 py-4 align-top text-slate-500">{item.created_at ? new Date(item.created_at).toLocaleString() : "—"}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={5} className="px-4 py-12 text-center text-slate-500">
                      No submissions found yet.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </main>
  );
}
