import {baseEndpoint} from './config'

export const getArts = () =>
  fetch(`${baseEndpoint}/artworks?limit=5`).then(res => res.json())
