import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ErrorComponent = ({err}:{err:string}) => {
  return (
    <View style={styles.container}>
      <Text>Oops!, {err}.</Text>
    </View>
  )
}

export default ErrorComponent

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        marginTop:18
    }
})