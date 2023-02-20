import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
} from 'react-native';

const ScreenWrapper = (props:
  { 
    children: any,
  }) => {
    return (
      <SafeAreaView style={styles.wrapperContainer}>
        <StatusBar
          barStyle='dark-content'
          backgroundColor='white'
        />
          {props.children}
      </SafeAreaView>
  ) ;
}


const styles = StyleSheet.create({
  wrapperContainer: {
    flex: 1,
    backgroundColor: 'white',
  }
});


export default ScreenWrapper