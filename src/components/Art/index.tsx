import React from 'react'
import {Image, Text, View} from 'react-native'

import GoToScreenButton from '../GoToScreenButton'
import {TArt} from '../../types'
import styles from './styles'

export const getArtImage = (imageId: string) => {
  return `https://www.artic.edu/iiif/2/${imageId}/full/200,/0/default.jpg`
}

type ArtProps = {
  art: TArt
}
const Art = ({art}: ArtProps) => {
  return art && art.image_id ? (
    <View style={styles.artWrapper}>
      <Image
        source={{uri: getArtImage(art.image_id)}}
        style={styles.artImage}
      />
      <Text style={styles.artTitle}>{art.title}</Text>
      <View style={styles.artAdditionalText}>
        {art.artist_title && <Text>Artist: {art.artist_title}</Text>}
        {art.date_end && <Text>Year: {art.date_end}</Text>}
      </View>
      <GoToScreenButton
        screenName={'About Art'}
        title={'About Art'}
        buttonStyle={styles.aboutArtButton}
        titleStyle={styles.aboutArtButtonText}
        routeParams={art}
      />
    </View>
  ) : null
}

export default Art
