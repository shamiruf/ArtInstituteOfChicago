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
  artWrapper: {
    paddingVertical: 15,
    paddingHorizontal: 13,
    backgroundColor: 'white',
    marginBottom: 18,
    borderRadius: 7,
    alignItems: 'center',
  },
  artTitle: {
    fontSize: 16,
    fontWeight: '600',
    paddingBottom: 8,
    paddingTop: 14,
    textAlign: 'center',
    width: 200,
  },
  artAdditionalText: {
    fontSize: 16,
    paddingBottom: 8,
    alignItems: 'center',
  },
  artImage: {
    width: 150,
    height: 150,
    borderRadius: 5,
  },
  aboutArtButton: {
    backgroundColor: '#D1D3FA',
    padding: 10,
    borderColor: '#B6B9E1',
    borderRadius: 8,
    borderWidth: 1,
  },
  aboutArtButtonText: {
    fontWeight: '600',
  },
})

export default styles
