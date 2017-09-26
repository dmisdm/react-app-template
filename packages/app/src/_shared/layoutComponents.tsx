import { GlamorousInterface } from 'glamorous';
import glamorous from 'glamorous';
export const styles = {
    Flex: {
        display: 'flex',
        flexShrink: 0
    },
    Centered: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    Heading1: {
        fontSize: 32
    }
}
export const Flex = glamorous.div(styles.Flex, ({ flex }) => ({ flex: (flex === true ? 1 : flex) }));
export const CenteredFlex = glamorous(Flex)(styles.Centered);
export const Heading1 = glamorous.div(styles.Heading1)
