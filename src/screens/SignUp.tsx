import RoundedButton from '../components/RoundedButton'
import EmailInput from '../components/EmailInput'
import PasswordInput from '../components/PasswordInput'
import ScreenWrapper from '../components/ScreenWrapper'
import TextButton from '../components/TextButton'
import {
    StyleSheet,
    View,
    Text,
} from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

type RootStackParamList = {
    Login: undefined;
    Home: undefined;
    SignUp: undefined;
};

type Props = NativeStackScreenProps<RootStackParamList, 'SignUp'>;

const SignUp = ({navigation}: Props) => {
    const handleOnPress = () => {
        navigation.navigate('Login')
    }
    
    return (
        <ScreenWrapper>
            <View style={styles.container}>
                <Text style={styles.headerTitle}>Sign Up</Text>
                <EmailInput
                    placeholder='Email Address'
                />
                <PasswordInput
                    placeholder='Password'
                />
                <View style={styles.section}>
                    <RoundedButton
                        name='Register'
                        backgroundColor='#2AB2DE'
                        padding={10}
                        borderRadius={24}
                        width='73%'
                        onClick={handleOnPress}
                    />
                </View>
                <TextButton
                    name='Back'
                    onClick={handleOnPress}
                />
            </View>
        </ScreenWrapper>
    )
};


const styles = StyleSheet.create({
    headerTitle: {
        fontSize: 32,
        fontWeight: 'bold',
        color: 'black',
        alignSelf: 'center',
        marginTop: 100,
        marginBottom: 40,
    },
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    section: {
        marginTop: 15,
        marginBottom: 6
    }
});

export default SignUp