
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

export default function Header() {
  return (
    <header className="sticky top-0 bg-white border-b shadow-sm">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="text-xl font-bold text-blue-600">
          QuizMaster
        </Link>

        
        <nav className="flex items-center gap-4">
          <Link 
            to="/features" 
            className="text-gray-600 hover:text-blue-500 text-sm font-medium"
          >
            Features
          </Link>
          <Link 
            to="/about" 
            className="text-gray-600 hover:text-blue-500 text-sm font-medium"
          >
            About
          </Link>

          {/* Auth Buttons */}
          <div className="flex gap-2 ml-4">
            <Button asChild variant="outline" size="sm">
              <Link to="/login">Log in</Link>
            </Button>
            <Button asChild size="sm">
              <Link to="/register">Sign up</Link>
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
}