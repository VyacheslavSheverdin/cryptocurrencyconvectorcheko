import { StyleSheet } from 'react-native';
import { IColors } from '../../../../src/UIProvider/colors/IColorsController';

export const getStyle = (colors: IColors) => {
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: colors.background,
        },
        list: {
            paddingHorizontal: 10,
            paddingVertical: 5
        },
        contentContainerStyle: {
            paddingBottom: 10
        }
    });
    return styles;
}