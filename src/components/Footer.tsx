export default function Footer() {
  return (
    <footer className="border-t border-border bg-background py-8">
      <div className="mx-auto max-w-6xl px-6 text-center text-sm text-muted">
        <p>&copy; {new Date().getFullYear()} Jacob Cox. All rights reserved.</p>
      </div>
    </footer>
  );
}
