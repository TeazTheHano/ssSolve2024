import { StyleSheet } from 'react-native';
import { vw, vh } from './stylesheet';

const clrStyle = StyleSheet.create<any>({
    white: '#FFFFFF',
    black: '#000000',
    // ***
    red: `#EE8469`,
    blue100: `#101529`,
    blue80: `#2A2E40`,
    blue50: `#B6D7FB`,
    blue30: `#D5E8FB`,
    green100: `#F5F6DD`,
    green50: `#FBFBF1`,
    grey100: `#2C2C2C`,
    grey50: `#6E6E6E`,
    grey30: `#7D8792`,
    grey10: `#F6F6F5`,
    pri4: `#F2F1F9`

});

export default clrStyle;

const componentStyle = StyleSheet.create<any>({
    // input 
    textInput: {
        borderRadius: vw(4),
        flex: 1,
        paddingVertical: vw(4),
        fontSize: vw(4),
    },
});

export { componentStyle };