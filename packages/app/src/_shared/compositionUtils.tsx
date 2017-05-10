import { createEagerElement } from "recompose";
import * as React from 'react';
import { ReactNode } from 'react';
type ComponentOrSFC<P> = React.ComponentClass<P> | React.SFC<P>;

interface ComposedEnhancer<P> {
    (component: ComponentOrSFC<P>): typeof component
}
export const prependChild = (child: ReactNode) => (Component: ComponentOrSFC<any>) => (props: any) => createEagerElement(Component, { ...props, children: [child, ...React.Children.toArray(props.children)] })