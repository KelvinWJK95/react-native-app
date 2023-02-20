import {
    StyleSheet,
    TextInput,
} from 'react-native';

export interface errorProp {
    hasError: boolean,
    message: string
}

const EmailInput = (props:
    { 
        placeholder: string
    }
    ) => {
    return (
        <TextInput
            placeholder={props.placeholder}
            keyboardType="default"
            secureTextEntry={true}
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

export default EmailInput;