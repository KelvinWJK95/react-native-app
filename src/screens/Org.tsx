import Section from '../components/Section'
import ScreenWrapper from '../components/ScreenWrapper'
import {
    StyleSheet,
    Button,
    View,
    Text,
} from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

type RootStackParamList = {
    Login: undefined;
    Home: undefined;
    SignUp: undefined;
    Org: {name: string};
};

type Props = NativeStackScreenProps<RootStackParamList, 'Org'>;

const Org = ({route, navigation}: Props) => {
    return (
        <ScreenWrapper>
            <View>
                <Section title={route.params.name}>
                <Button
                    title="Click here"
                    onPress={() => navigation.navigate('Login')}/>
                <Text> to see merchant page showcase</Text>
                </Section>
            </View>
        </ScreenWrapper>
    )
};


const styles = StyleSheet.create({

});

export default Org