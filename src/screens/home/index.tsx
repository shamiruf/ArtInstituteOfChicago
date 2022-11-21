import React from 'react'
import {NativeScrollEvent, ScrollView, Text, View} from 'react-native'
import {useQuery, useQueryClient} from 'react-query'

import Art from '../../components/Art'
import LoadingSpinner from '../../components/LoadingSpinner'
import {getArts} from '../../api'
import {TArt} from '../../types'
import styles from './styles'

const HomeScreen = () => {
  const queryClient = useQueryClient()
  const [page, setPage] = React.useState<number>(1)
  const [arts, setArts] = React.useState<TArt[]>([])
  const [hasNextPage, setHasNextPage] = React.useState<boolean>(false)
  const {isLoading, error} = useQuery(['arts', page], () => getArts(page), {
    keepPreviousData: true,
    staleTime: 5000,
    onSuccess: data => {
      console.log({data})
      setArts([...arts, ...data.data])
      setHasNextPage(data.pagination.total_pages < page ? false : true)
    },
  })

  React.useEffect(() => {
    queryClient.prefetchQuery(['arts', page], () => getArts(page + 1))
  }, [page])

  const isCloseToBottom = ({
    layoutMeasurement,
    contentOffset,
    contentSize,
  }: NativeScrollEvent) => {
    let paddingToBottom = 0
    paddingToBottom += layoutMeasurement.height

    return contentOffset.y >= contentSize.height - paddingToBottom
  }

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
    arts && (
      <ScrollView
        style={styles.homeWrapper}
        onScroll={({nativeEvent}) => {
          if (isCloseToBottom(nativeEvent)) {
            if (hasNextPage) {
              setPage(page + 1)
            }
          }
        }}
        scrollEventThrottle={400}>
        {arts.map((art: TArt, i: number) => (
          <View key={i}>
            <Art art={art} />
          </View>
        ))}
      </ScrollView>
    )
  )
}

export default HomeScreen
