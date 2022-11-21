import React from 'react'
import {Image, ScrollView, Text, View} from 'react-native'

import {getArtImage} from '../../components/Art'
import styles from './styles'

type AboutArtScreenProps = {
  route?: any
}

const AboutArtScreen = ({route}: AboutArtScreenProps) => {
  return (
    route.params.routeParams && (
      <ScrollView style={styles.aboutArtWrapper}>
        <View style={styles.topBlock}>
          {route.params.routeParams.image_id && (
            <Image
              source={{uri: getArtImage(route.params.routeParams.image_id)}}
              style={styles.imageStyle}
            />
          )}
          <Text style={styles.aboutArtTitle}>
            {route.params.routeParams.title}
          </Text>
          <Text>{route.params.routeParams.date_end}</Text>
        </View>
        {route.params.routeParams.artist_title && (
          <View style={styles.middleBlock}>
            <Text style={styles.middleBlockTitle}>Artist</Text>
            <Text>{route.params.routeParams.artist_title}</Text>
            {route.params.routeParams.artist_display && (
              <Text>{route.params.routeParams.artist_display}</Text>
            )}
          </View>
        )}
        {route.params.routeParams.department_title && (
          <View style={styles.middleBlock}>
            <Text style={styles.middleBlockTitle}>Department</Text>
            <Text>{route.params.routeParams.department_title}</Text>
          </View>
        )}
        {route.params.routeParams.style_titles.length !== 0 && (
          <View style={styles.middleBlock}>
            <Text style={styles.middleBlockTitle}>Style</Text>
            {route.params.routeParams.style_titles.map(
              (s: string, i: number) => (
                <Text key={i}>{s}</Text>
              ),
            )}
          </View>
        )}
        {route.params.routeParams.material_titles.length !== 0 && (
          <View style={styles.middleBlock}>
            <Text style={styles.middleBlockTitle}>Material</Text>
            {route.params.routeParams.material_titles.map(
              (m: string, i: number) => (
                <Text key={i}>{m}</Text>
              ),
            )}
          </View>
        )}
        {route.params.routeParams.exhibition_history && (
          <View style={styles.middleBlock}>
            <Text style={styles.middleBlockTitle}>Exhibition history</Text>
            <Text>{route.params.routeParams.exhibition_history}</Text>
          </View>
        )}
      </ScrollView>
    )
  )
}

export default AboutArtScreen
