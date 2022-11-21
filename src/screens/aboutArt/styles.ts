import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
  loadingWrapperFullScreen: {
    width: '100%',
    height: '100%',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: '30%',
    backgroundColor: 'black',
  },
  aboutArtWrapper: {
    paddingVertical: 13,
    paddingHorizontal: 16,
    backgroundColor: '#E4E4E4',
    marginBottom: 20,
  },
  topBlock: {
    alignItems: 'center',
    paddingVertical: 20,
    backgroundColor: 'white',
    borderRadius: 8,
    marginBottom: 15,
  },
  imageStyle: {
    width: 250,
    height: 250,
    borderRadius: 5,
  },
  aboutArtTitle: {
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 14,
    textAlign: 'center',
    width: 200,
    paddingBottom: 10,
  },
  middleBlock: {
    paddingVertical: 15,
    backgroundColor: 'white',
    borderRadius: 8,
    paddingHorizontal: 13,
    marginBottom: 10,
  },
  middleBlockTitle: {
    fontSize: 16,
    fontWeight: '600',
    paddingBottom: 8,
  },
})

export default styles
