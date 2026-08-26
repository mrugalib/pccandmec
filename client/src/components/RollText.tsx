/** Careons reference recreation — shared hover roll-up text effect used across nav and buttons. */
export default function RollText({ children }: { children: string }) {
  return (
    <span className="roll-text">
      <span className="roll-text__inner">
        <span className="roll-text__line">{children}</span>
        <span className="roll-text__line" aria-hidden="true">{children}</span>
      </span>
    </span>
  );
}
