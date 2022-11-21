import React from 'react'
import {ScrollView, Text, View} from 'react-native'
import {useQuery} from 'react-query'

import Art from '../../components/Art'
import LoadingSpinner from '../../components/LoadingSpinner'
import {getArts} from '../../api'
import {TArt} from '../../types'
import styles from './styles'

const HomeScreen = () => {
  const {isLoading, error, data} = useQuery('arts', getArts)

  if (error)
    return (
      <View>
        <Text>{`An error has occurred: ${error}`}</Text>
      </View>
    )

  return isLoading ? (
    <LoadingSpinner
      style={styles.loadingWrapperFullScreen}
      size="large"
      color={'blue'}
    />
  ) : (
    data && (
      <ScrollView style={styles.homeWrapper}>
        {data.data.map((art: TArt, i: number) => (
          <View key={i}>
            <Art art={art} />
          </View>
        ))}
      </ScrollView>
    )
  )
}

export default HomeScreen
