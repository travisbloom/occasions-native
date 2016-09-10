import { Asset, Font } from 'exponent'

const cacheImages = (images) => (
    images.map(image => Asset.fromModule(image).downloadAsync())
)

const cacheFonts = (fonts) => (
    fonts.map(font => Font.loadAsync(font))
)

const cacheAssetsAsync = ({ images = [], fonts = [] }) => (
    Promise.all([
        ...cacheImages(images),
        ...cacheFonts(fonts),
    ])
)

export default cacheAssetsAsync
