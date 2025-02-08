import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-background border-t">
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-center items-center">
          <p className="text-sm text-muted-foreground">
            © 2025 Sankalp Arora. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

