/**
 * Re-mounts on every navigation, replaying a subtle CSS fade/slide.
 * Pure CSS (no JS) so the first paint is never blocked on hydration.
 */
export default function Template({ children }: { children: React.ReactNode }) {
  return <div className="animate-page-in">{children}</div>;
}
