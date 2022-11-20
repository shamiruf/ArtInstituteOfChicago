import React from 'react'
import {Image, Text, TouchableWithoutFeedback, View} from 'react-native'

import {TArt} from '../../types'
import styles from './styles'

type ArtProps = {
  art: TArt
}

const Art = ({art}: ArtProps) => {
  const getArtImage = (imageId: string) => {
    return `https://www.artic.edu/iiif/2/${imageId}/full/200,/0/default.jpg`
  }
  return (
    art && (
      <View style={styles.artWrapper}>
        <Image
          source={{uri: getArtImage(art.image_id)}}
          style={styles.artImage}
        />
        <Text style={styles.artTitle}>{art.title}</Text>
        <View style={styles.artAdditionalText}>
          <Text style={{color: 'black'}}>Artist: {art.artist_title}</Text>
          <Text style={{color: 'black'}}>Year: {art.date_end}</Text>
        </View>
        <TouchableWithoutFeedback onPress={() => {}}>
          <View style={styles.aboutArtButton}>
            <Text style={styles.aboutArtButtonText}>About Art</Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
    )
  )
}

export default Art
