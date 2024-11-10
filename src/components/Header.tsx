import Link from "next/link";

export default function Header() {
  return (
    <div >
        <header className="header" >
          <div className='logo ' >Portfolio</div>
          <nav >
            <Link  href="/">Home</Link>
            <Link  href="/about" >About</Link>
            <Link  href="/contact" >contact</Link>
        
        </nav>
        </header>

        </div>
  );
}