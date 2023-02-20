import {
    StyleSheet,
    TextInput,
} from 'react-native';

export interface errorProp {
    hasError: boolean,
    message: string
}

const PasswordInput = (props:
    { 
        placeholder: string
    }
    ) => {
    return (
        <TextInput
            placeholder={props.placeholder}
            keyboardType="email-address"
            style={styles.input}
        />
        
    )
};

const styles = StyleSheet.create({
    input: {
        margin: 5,
        padding: 8,
        paddingStart: 15,
        paddingEnd: 15,
        borderBottomWidth: 1,
        borderBottomColor: 'rgb(133, 133, 133)',
        alignSelf: 'center',
        width: '70%',
    }
});

export default PasswordInput;