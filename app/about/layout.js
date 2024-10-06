import Link from "next/link";

export const metadata = {
    title: "About Us",
    description: "This is the about us page"
}
export default function AboutLayout({children}) {
    return (
        <div>
            <nav className="mt-5 mb-5">
                <ul className="flex gap-5">
                    <li><Link href="/about/mission">Mission</Link></li>
                    <li><Link href="/about/vision">Vision</Link></li>
                </ul>
            </nav>
            {children}
        </div>
    )
}