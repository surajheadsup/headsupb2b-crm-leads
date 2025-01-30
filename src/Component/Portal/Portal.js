import React, { forwardRef, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { useIsomorphicEffect } from '../../Hooks/use-event-listener';
import { assignRef } from '../../Component/ui/menu/popover/use-merged-ref'

function createPortalNode(props) {
    const node = document.createElement('div');
    node.setAttribute('data-portal', 'true');
    if (typeof props.className === 'string') {
        node.classList.add(...props.className.split(' ').filter(Boolean));
    }
    if (typeof props.style === 'object') {
        Object.assign(node.style, props.style);
    }
    if (typeof props.id === 'string') {
        node.setAttribute('id', props.id);
    }
    return node;
}

export const Portal = forwardRef(({ children, target, ...props }, ref) => {
    const [mounted, setMounted] = useState(false);
    const nodeRef = useRef(null);

    useIsomorphicEffect(() => {
        setMounted(true);
        nodeRef.current = !target
            ? createPortalNode(props)
            : typeof target === 'string'
                ? document.querySelector(target)
                : target;

        assignRef(ref, nodeRef.current);

        if (!target && nodeRef.current) {
            document.body.appendChild(nodeRef.current);
        }

        return () => {
            if (!target && nodeRef.current) {
                document.body.removeChild(nodeRef.current);
            }
        };
    }, [target]);

    if (!mounted || !nodeRef.current) {
        return null;
    }

    return createPortal(<>{children}</>, nodeRef.current);
});

Portal.displayName = 'Portal';
