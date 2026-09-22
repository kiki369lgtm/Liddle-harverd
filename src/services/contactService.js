// General contact message submission — mirrors admissionsService's demo/live
// pattern for the Contact page form. See that file for the rationale.

const API_URL = import.meta.env.VITE_API_URL

export async function submitContactMessage(payload) {
  if (!API_URL) {
    await new Promise((resolve) => setTimeout(resolve, 700))
    console.info('[demo mode] Contact message (no backend configured yet):', payload)
    return { ok: true, mode: 'demo' }
  }

  const res = await fetch(`${API_URL}/contact/messages`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  })

  if (!res.ok) throw new Error('Failed to send message')
  return { ok: true, mode: 'live', data: await res.json() }
}
