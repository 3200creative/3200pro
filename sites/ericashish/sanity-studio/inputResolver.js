import RandomList from './inputs/RandomList'

export default function resolveInput(type) {
  if (type?.type?.name === 'randomPostList') {
    return RandomList
  }
}
