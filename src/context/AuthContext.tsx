// frontend/src/context/AuthContext.tsx
import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react';

interface User {
  email: string;
  name: string;
}

interface Course {
  id: number;
  title: string;
  instructor: string;
  price: number;
  originalPrice: number;
  image: string;
  level: string;
}

interface CartItem extends Course {
  quantity: number;
}

interface EnrolledCourse extends Course {
  enrollmentDate: string;
  progress: number;
}

interface AuthContextType {
  user: User | null;
  cart: CartItem[];
  enrolledCourses: EnrolledCourse[];
  login: (email: string, password: string) => void;
  logout: () => void;
  googleSignIn: () => void;
  addToCart: (course: Course) => void;
  removeFromCart: (courseId: number) => void;
  updateCartItemQuantity: (courseId: number, quantity: number) => void;
  clearCart: () => void;
  enrollInCourse: (course: Course) => void;
  getCartTotal: () => number;
  getCartItemCount: () => number;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [cart, setCart] = useState<CartItem[]>(() => {
    // Load cart from localStorage if available
    const savedCart = localStorage.getItem('techwave_cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });
  const [enrolledCourses, setEnrolledCourses] = useState<EnrolledCourse[]>(() => {
    // Load enrolled courses from localStorage if available
    const savedCourses = localStorage.getItem('techwave_enrolled');
    return savedCourses ? JSON.parse(savedCourses) : [];
  });

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('techwave_cart', JSON.stringify(cart));
  }, [cart]);

  // Save enrolled courses to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('techwave_enrolled', JSON.stringify(enrolledCourses));
  }, [enrolledCourses]);

  const login = (email: string, password: string): void => {
    setUser({ email, name: email.split('@')[0] });
  };

  const logout = (): void => {
    setUser(null);
    setCart([]);
    setEnrolledCourses([]);
  };

  const googleSignIn = (): void => {
    setUser({ email: 'demo@techwave.com', name: 'Demo User' });
  };

  const addToCart = (course: Course): void => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === course.id);
      if (existingItem) {
        return prevCart.map(item =>
          item.id === course.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevCart, { ...course, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (courseId: number): void => {
    setCart(prevCart => prevCart.filter(item => item.id !== courseId));
  };

  const updateCartItemQuantity = (courseId: number, quantity: number): void => {
    if (quantity <= 0) {
      removeFromCart(courseId);
      return;
    }
    setCart(prevCart =>
      prevCart.map(item =>
        item.id === courseId ? { ...item, quantity } : item
      )
    );
  };

  const clearCart = (): void => {
    setCart([]);
  };

  const enrollInCourse = (course: Course): void => {
    const newEnrolledCourse: EnrolledCourse = {
      ...course,
      enrollmentDate: new Date().toISOString(),
      progress: 0
    };
    setEnrolledCourses(prev => [...prev, newEnrolledCourse]);
    // Remove from cart after enrollment
    removeFromCart(course.id);
  };

  const getCartTotal = (): number => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const getCartItemCount = (): number => {
    return cart.reduce((count, item) => count + item.quantity, 0);
  };

  const value: AuthContextType = {
    user,
    cart,
    enrolledCourses,
    login,
    logout,
    googleSignIn,
    addToCart,
    removeFromCart,
    updateCartItemQuantity,
    clearCart,
    enrollInCourse,
    getCartTotal,
    getCartItemCount
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};