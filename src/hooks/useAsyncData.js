import { useEffect, useState } from 'react'

// Runs an async fetcher (see src/services) and exposes loading/error state.
// Local data resolves instantly today; when a fetcher starts hitting a real
// API, callers using this hook already handle the loading/error states.
export function useAsyncData(fetcher, deps = []) {
  const [state, setState] = useState({ data: null, loading: true, error: null })

  useEffect(() => {
    let alive = true

    // Reset for the new request. This mirrors React's own data-fetching
    // effect example (react.dev/learn/synchronizing-with-effects); the
    // lint rule against setState-in-effect is aimed at avoiding an extra
    // render for state that could instead be derived, which isn't possible
    // here since "loading" depends on an in-flight promise.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setState({ data: null, loading: true, error: null })

    fetcher()
      .then((data) => {
        if (alive) setState({ data, loading: false, error: null })
      })
      .catch((error) => {
        if (alive) setState({ data: null, loading: false, error })
      })

    return () => {
      alive = false
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps)

  return state
}
