export function Button({ onTap, ...props }: { onTap: () => void }) {
  return <button onClick={onTap} on:tap={onTap} {...props} />;
}
