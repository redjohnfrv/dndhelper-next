import axios from 'axios'

export const getAdventures = async () => {
  let error = ''

  const data = axios.get('http://localhost:4000/adventures')
    .then((res) => res.data)
    .catch(err => error = err.message)

  if (error) return error
  return data
}
