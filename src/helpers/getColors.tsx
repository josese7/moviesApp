import ImageColors from "react-native-image-colors"



export const getImageColors = async(uri:string ) => {
   
    let primary;
    let secondary;
    const result = await ImageColors.getColors(uri, {
        fallback:'#228822',
        cache: true,
        key: undefined
    })

    switch (result.platform) {
        case 'android':
          // android result properties
          primary = result.dominant;
          secondary = result.average;
          break
        case 'web':
          // web result properties
          const lightVibrantColor = result.lightVibrant
          break
        case 'ios':
          // iOS result properties
          primary = result.primary
          secondary = result.secondary
          break
        default:
          throw new Error('Unexpected platform key')
      }

      return{
          primary,
          secondary
      }
}