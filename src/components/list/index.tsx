import { ReactNode } from 'react';

interface ListProps<T, U> {
  item: (t: T & U | T) => ReactNode;
  itemProps?: U;
  listItems: T[];
  className?: string;
  keyExpression: (u: T) => string;
}

export default function List<T, U>(
  { item, listItems, itemProps, className, keyExpression }: ListProps<T, U>,
) {
  return (
    !!listItems && !!listItems.length
      ? (
        <div className={className}>
          {
            listItems.map((dataItem: T) => (
              item({
                ...dataItem,
                ...itemProps,
                key: keyExpression(dataItem),
              })
            ))
          }
        </div>
      ) : null
  );
}
