// frontend/src/components/Cart.tsx
import React, { useState } from 'react';
import { X, Plus, Minus, Trash2 } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { motion, AnimatePresence } from 'framer-motion';

interface CartProps {
  isOpen: boolean;
  onClose: () => void;
}

const Cart: React.FC<CartProps> = ({ isOpen, onClose }) => {
  const { cart, removeFromCart, updateCartItemQuantity, getCartTotal, getCartItemCount } = useAuth();
  const [isProcessing, setIsProcessing] = useState(false);

  const handleCheckout = async () => {
    setIsProcessing(true);
    // Simulate payment processing
    setTimeout(() => {
      alert('Payment successful! Redirecting to dashboard...');
      setIsProcessing(false);
      onClose();
      // In a real app, this would redirect to Stripe checkout
      window.location.href = '/dashboard';
    }, 2000);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      <div className="absolute inset-0 bg-black bg-opacity-50" onClick={onClose} />
      <div className="absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-xl">
        <div className="flex h-full flex-col">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-gray-200 px-6 py-4">
            <h2 className="text-lg font-semibold text-gray-900">
              Shopping Cart ({getCartItemCount()})
            </h2>
            <button
              onClick={onClose}
              className="rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto px-6 py-4">
            <AnimatePresence>
              {cart.length === 0 ? (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex h-full flex-col items-center justify-center py-12 text-center"
                >
                  <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                    <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m6-5v5a2 2 0 01-2 2h-4a2 2 0 01-2-2v-5m6-5V6a2 2 0 00-2-2H9a2 2 0 00-2 2v2" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Your cart is empty</h3>
                  <p className="text-gray-500">Add courses to your cart to get started.</p>
                </motion.div>
              ) : (
                <div className="space-y-4">
                  {cart.map((item) => (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      className="flex items-center space-x-4 border-b border-gray-100 pb-4"
                    >
                      <img
                        src={item.image}
                        alt={item.title}
                        className="h-16 w-16 rounded-md object-cover"
                      />
                      <div className="flex-1 min-w-0">
                        <h3 className="text-sm font-medium text-gray-900 truncate">
                          {item.title}
                        </h3>
                        <p className="text-sm text-gray-500">{item.instructor}</p>
                        <p className="text-sm font-medium text-gray-900">
                          ${item.price.toFixed(2)}
                        </p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <button
                          onClick={() => updateCartItemQuantity(item.id, item.quantity - 1)}
                          className="rounded-md p-1 text-gray-400 hover:bg-gray-100 hover:text-gray-500"
                        >
                          <Minus className="h-4 w-4" />
                        </button>
                        <span className="w-8 text-center text-sm font-medium text-gray-900">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateCartItemQuantity(item.id, item.quantity + 1)}
                          className="rounded-md p-1 text-gray-400 hover:bg-gray-100 hover:text-gray-500"
                        >
                          <Plus className="h-4 w-4" />
                        </button>
                      </div>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="rounded-md p-1 text-gray-400 hover:bg-gray-100 hover:text-red-500"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </motion.div>
                  ))}
                </div>
              )}
            </AnimatePresence>
          </div>

          {/* Footer */}
          {cart.length > 0 && (
            <div className="border-t border-gray-200 bg-gray-50 px-6 py-4">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm font-medium text-gray-900">Total:</span>
                <span className="text-lg font-bold text-gray-900">
                  ${getCartTotal().toFixed(2)}
                </span>
              </div>
              <button
                onClick={handleCheckout}
                disabled={isProcessing}
                className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isProcessing ? 'Processing...' : 'Proceed to Checkout'}
              </button>
              <p className="text-xs text-gray-500 mt-2 text-center">
                Secure payment with Stripe
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;