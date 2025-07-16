// components/VerticalLabel.tsx
export default function VerticalLabel() {
  return (
    <h1
      className="absolute left-0 top-12 [writing-mode:vertical-rl] text-[9rem] font-bold text-white opacity-15 select-none pointer-events-none z-0"
      aria-hidden="true"
    >
      Dev Web
    </h1>
  );
}
