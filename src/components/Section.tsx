import {
    StyleSheet,
    Text,
    View,
} from 'react-native';
import type {PropsWithChildren} from 'react';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function Section({children, title}: SectionProps): JSX.Element {
    return (
      <View style={styles.sectionContainer}>
        <Text
          style={[
            styles.sectionTitle,
          ]}>
          {title}
        </Text>
        <Text
          style={[
            styles.sectionDescription,
          ]}>
          {children}
        </Text>
      </View>
    );
}

const styles = StyleSheet.create({
    sectionContainer: {
      marginTop: 32,
      paddingHorizontal: 24,
    },
    sectionTitle: {
      fontSize: 24,
      fontWeight: '600',
    },
    sectionDescription: {
      marginTop: 8,
      fontSize: 18,
      fontWeight: '400',
    },
  });

export default Section