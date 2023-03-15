import { useState, useEffect } from 'react'
import axios, { ResponseType } from 'axios'

const useAxios = <T>(path: string, type?: ResponseType) => {
  const [response, setResponse] = useState<T>()
  const [error, setError] = useState<string>('')
  const [loading, setLoading] = useState<boolean>(true)

  const fetchData = () => {
    axios
      .get(path, {
        responseType: type || 'json',
      })
      .then((res) => {
        setResponse(res.data)
      })
      .catch((err) => {
        setError(err)
      })
      .finally(() => {
        setLoading(false)
      })
  }

  useEffect(() => {
    fetchData()
  }, [path])

  return { response, error, loading }
}

export default useAxios
