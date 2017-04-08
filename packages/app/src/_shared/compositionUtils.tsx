type ComponentOrSFC<P> = React.ComponentClass<P> | React.SFC<P>;

interface ComposedEnhancer<P> {
    (component: ComponentOrSFC<P>): typeof component
}
export function compose<P>(...funcs): ComposedEnhancer<P> {
    if (funcs.length === 0) {
        return arg => arg
    }

    if (funcs.length === 1) {
        return funcs[0]
    }

    return funcs.reduce((a, b) => (...args) => a(b(...args)))
}