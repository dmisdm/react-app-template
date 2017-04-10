import { createEagerElement } from "recompose";
import * as React from 'react';
import { ReactNode } from 'react';
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

export const prependChild = (child: ReactNode) => (Component: ComponentOrSFC<any>) => props => createEagerElement(Component, { ...props, children: [child, ...React.Children.toArray(props.children)] })