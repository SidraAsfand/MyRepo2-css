

export default function Footer() {
  return (
    <footer className='footer'>
      <div className='container5'>
        <p className='text'>&copy; {new Date().getFullYear()} Your Name. All rights reserved.</p>
        <div className='socialLinks'>
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer">Twitter</a>
          <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
}