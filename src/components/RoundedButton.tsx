import {
    Text,
    TouchableOpacity,
    StyleSheet
} from 'react-native';
    
const RoundedButton = (props:
    { 
        name:string,
        onClick: () => void, 
        width: string,
        padding: number, 
        backgroundColor: string
        borderRadius: number
    }
    ) => {
    return (
        <TouchableOpacity
        onPress={props.onClick}
        style={[styles.button, 
        {
            width: props.width,
            padding: props.padding,
            backgroundColor: props.backgroundColor,
            borderRadius: props.borderRadius
        }]}>
            <Text style={[styles.buttonText]}>{props.name}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        margin: 5,
        alignSelf: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        height: 48,
    },
    buttonText:{
        fontSize: 16,
        alignSelf: 'center',
        color: 'white',
        fontWeight: 'bold',
    }
});

export default RoundedButton;