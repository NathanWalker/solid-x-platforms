/**
 * Option B
 */
// export function Button({ onTap, ...props }: { onTap: () => void }) {
//   return <button onClick={onTap} on:tap={onTap} {...props} />;
// }

/**
 * Option A
 */
import { isNativeScript } from '@solid-x-platforms/utils';
export function Button({
  onTap,
  children,
  ...extraProps
}: {
  onTap: () => void;
  children: any;
}) {
  if (isNativeScript()) {
    return (
      <button on:tap={onTap} {...extraProps}>
        {...children}
      </button>
    );
  } else {
    return (
      <button onClick={onTap} {...extraProps}>
        {...children}
      </button>
    );
  }
}
