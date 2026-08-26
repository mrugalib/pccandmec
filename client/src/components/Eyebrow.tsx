/** Careons reference recreation — shared small uppercase-dot section label used above every section heading. */
export default function Eyebrow({ children, light = false }: { children: string; light?: boolean }) {
  return (
    <p className={`eyebrow ${light ? "eyebrow--light" : ""}`}>
      <span aria-hidden="true" />
      {children}
    </p>
  );
}
