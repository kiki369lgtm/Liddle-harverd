// Admissions enquiry submission.
//
// No admissions backend exists yet. Rather than pretend a submission
// reached a school database, this resolves in a clearly-labelled "demo"
// mode so the form's validation, loading and success states can be tested
// honestly. Once VITE_API_URL is configured, the same function starts
// posting to the real endpoint and callers do not need to change.

const API_URL = import.meta.env.VITE_API_URL

export async function submitAdmissionsEnquiry(payload) {
  if (!API_URL) {
    await new Promise((resolve) => setTimeout(resolve, 700))
    console.info('[demo mode] Admissions enquiry (no backend configured yet):', payload)
    return { ok: true, mode: 'demo' }
  }

  const res = await fetch(`${API_URL}/admissions/enquiries`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  })

  if (!res.ok) throw new Error('Failed to submit enquiry')
  return { ok: true, mode: 'live', data: await res.json() }
}
