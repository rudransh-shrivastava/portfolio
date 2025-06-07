export default function Footer() {
  return (
    <footer className="mt-12 border-t border-gray-700 pt-4">
      <div className="flex justify-center gap-4">
        <a
          href="https://github.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-white"
        >
          <i className="fab fa-github text-2xl"></i>
        </a>
        <a
          href="https://linkedin.com/in/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-white"
        >
          <i className="fab fa-linkedin text-2xl"></i>
        </a>
      </div>
    </footer>
  );
}
