import axios from 'axios'

import {baseEndpoint} from './config'

export const getArts = async (page: number) =>
  await axios
    .get(
      `${baseEndpoint}/artworks?fields=id,title,artist_display,artist_title,image_id,date_end,exhibition_history,department_title,style_titles,material_titles&page=${page}&limit=5`,
    )
    .then(res => {
      return res.data
    })
