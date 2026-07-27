import icon from "@/assets/renomedy-icon.png";

export function Footer() {
  return (
    <footer className="mx-auto max-w-6xl px-6 pb-12 pt-16 border-t border-border/50 text-center text-sm text-muted-foreground flex flex-col items-center">
      <div className="flex items-center justify-center gap-2 mb-6">
        <img src={icon} alt="Renomedy" className="h-6 w-6 object-contain grayscale opacity-70" />
        <span className="font-bold text-foreground text-sm tracking-tight">Renomedy</span>
      </div>
      <div className="space-y-2">
        <p>© {new Date().getFullYear()} Renomedy • Family Care Simplified</p>
        <p className="text-xs">Built with ❤️ for Indian families. Family-first. Privacy-first.</p>
      </div>
    </footer>
  );
}
