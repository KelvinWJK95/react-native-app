import {
    Text,
    TouchableOpacity,
    StyleSheet
} from 'react-native';
    
const TextButton = (props:
    { 
        name:string,
        onClick: () => void, 
    }
    ) => {
    return (
        <Text 
        style={[styles.buttonText]}
        onPress={props.onClick}>
            {props.name}
        </Text>
    )
}

const styles = StyleSheet.create({
    buttonText:{
        fontSize: 14,
        alignSelf: 'center',
        color: 'rgb(0, 0, 0)',
    }
});

export default TextButton;