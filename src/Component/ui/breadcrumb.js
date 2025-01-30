import React from 'react';
import cn from '../../Utils/class-names';

const BreadcrumbItem = ({ href = '#', className, children }) => (
  <a href={href} role="button" className={cn('inline-flex items-center gap-2 text-sm', className)}>
    {children}
  </a>
);

const Breadcrumb = ({ separator = '/', disableCurrent = true, children, className, separatorClassName, separatorVariant = 'default' }) => {
  const numOfItems = React.Children.count(children);

  return (
    <div className={cn('inline-flex items-center gap-2.5', className)}>
      {React.Children.map(children, (child, index) => {
        if (!React.isValidElement(child)) return child;
        return (
          <>
            {React.cloneElement(child, {
              className: cn(
                'text-gray-700 last:text-gray-500 font-medium',
                disableCurrent && 'last:pointer-events-none'
              ),
            })}
            {index < numOfItems - 1 &&
              (separatorVariant === 'default' ? (
                <span className={cn('text-sm text-gray-500', separatorClassName)}>
                  {separator}
                </span>
              ) : (
                <span className="h-1 w-1 rounded-full bg-gray-300" />
              ))}
          </>
        );
      })}
    </div>
  );
};

Breadcrumb.Item = BreadcrumbItem;
Breadcrumb.displayName = 'Breadcrumb';

export default Breadcrumb;
