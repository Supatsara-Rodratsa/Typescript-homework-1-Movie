import { Path } from '../types/movie.types'

export function countingRating(score: number): string[] {
  let starItem = []
  let totalScore = (score * 5) / 10
  let fullScore = 5

  while (fullScore > 0) {
    if (Math.trunc(totalScore) > 0) {
      starItem.push('<i class="fa fa-star fa-lg">')
    } else if (totalScore >= 0.5) {
      starItem.push('<i class="fa fa-star-half-o fa-lg">')
    } else {
      starItem.push('<i class="fa fa-star-o fa-lg">')
    }
    totalScore -= 1
    fullScore--
  }

  return starItem
}

export function blobToBase64(blob: Blob) {
  return new Promise((resolve, _) => {
    const reader = new FileReader()
    reader.onloadend = () => resolve(reader.result)
    reader.readAsDataURL(blob)
  })
}

export function getURLPath(isShowHigherResolution: boolean = false): Path {
  if (!isShowHigherResolution)
    return { path: 'src/data/movies.json', responseType: 'json' }
  return {
    path: 'https://img.omdbapi.com/?i=tt3896198&h=1000&apikey=35972be8',
    responseType: 'blob',
  }
}
