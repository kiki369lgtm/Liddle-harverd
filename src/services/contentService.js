// Content access layer.
//
// Phase One has no backend, so every function resolves local data from
// src/data. Each is already shaped like an async API call (Promise-based,
// single responsibility) so a later phase can swap the body for a real
// `fetch(`${API_URL}/...`)` without changing any calling component.

import { programs, getProgramBySlug } from '../data/programs'
import { activities, getActivityBySlug } from '../data/activities'
import { getGalleryByCategory } from '../data/gallery'
import { newsItems, getNewsBySlug } from '../data/news'

const API_URL = import.meta.env.VITE_API_URL

export async function getPrograms() {
  if (!API_URL) return programs
  const res = await fetch(`${API_URL}/programs`)
  if (!res.ok) throw new Error('Failed to load programs')
  return res.json()
}

export async function getProgram(slug) {
  if (!API_URL) return getProgramBySlug(slug)
  const res = await fetch(`${API_URL}/programs/${slug}`)
  if (!res.ok) throw new Error('Failed to load program')
  return res.json()
}

export async function getActivities() {
  if (!API_URL) return activities
  const res = await fetch(`${API_URL}/activities`)
  if (!res.ok) throw new Error('Failed to load activities')
  return res.json()
}

export async function getActivity(slug) {
  if (!API_URL) return getActivityBySlug(slug)
  const res = await fetch(`${API_URL}/activities/${slug}`)
  if (!res.ok) throw new Error('Failed to load activity')
  return res.json()
}

export async function getGallery(category) {
  if (!API_URL) return getGalleryByCategory(category)
  const query = category && category !== 'All' ? `?category=${encodeURIComponent(category)}` : ''
  const res = await fetch(`${API_URL}/gallery${query}`)
  if (!res.ok) throw new Error('Failed to load gallery')
  return res.json()
}

export async function getNews() {
  if (!API_URL) return newsItems
  const res = await fetch(`${API_URL}/news`)
  if (!res.ok) throw new Error('Failed to load news')
  return res.json()
}

export async function getNewsItem(slug) {
  if (!API_URL) return getNewsBySlug(slug)
  const res = await fetch(`${API_URL}/news/${slug}`)
  if (!res.ok) throw new Error('Failed to load news item')
  return res.json()
}
