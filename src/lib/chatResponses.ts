interface ResponseRule {
  keywords: string[];
  response: string;
}

const responseRules: ResponseRule[] = [
  {
    keywords: ['hello', 'hi', 'hey', 'good morning', 'good afternoon', 'good evening'],
    response: "Hello! 👋 Welcome to our customer service. How can I help you today?"
  },
  {
    keywords: ['hours', 'open', 'working hours', 'business hours', 'when are you open'],
    response: "Our business hours are Monday to Friday, 9:00 AM to 6:00 PM EST. We're also available on Saturdays from 10:00 AM to 4:00 PM."
  },
  {
    keywords: ['shipping', 'delivery', 'ship', 'deliver', 'how long'],
    response: "We offer standard shipping (5-7 business days) and express shipping (2-3 business days). Free shipping is available on orders over $50!"
  },
  {
    keywords: ['return', 'refund', 'exchange', 'money back'],
    response: "We have a 30-day return policy. Items must be unused and in original packaging. Refunds are processed within 5-7 business days after we receive your return."
  },
  {
    keywords: ['payment', 'pay', 'credit card', 'debit', 'paypal'],
    response: "We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and Apple Pay. All transactions are secure and encrypted."
  },
  {
    keywords: ['track', 'tracking', 'order status', 'where is my order'],
    response: "You can track your order by logging into your account and visiting 'My Orders'. You'll also receive tracking information via email once your order ships."
  },
  {
    keywords: ['contact', 'phone', 'email', 'reach', 'support'],
    response: "You can reach our support team via:\n📧 Email: support@company.com\n📞 Phone: 1-800-123-4567\n💬 Or continue chatting here!"
  },
  {
    keywords: ['price', 'cost', 'discount', 'coupon', 'promo', 'sale'],
    response: "We regularly offer promotions! Sign up for our newsletter to get 10% off your first order. Check our website for current sales and deals."
  },
  {
    keywords: ['cancel', 'cancellation'],
    response: "To cancel an order, please contact us within 1 hour of placing it. If the order has already been processed, you may need to wait for delivery and initiate a return."
  },
  {
    keywords: ['account', 'login', 'password', 'sign in', 'register'],
    response: "Having account issues? Try resetting your password using the 'Forgot Password' link. If you need further help, our team can assist you with account recovery."
  },
  {
    keywords: ['thank', 'thanks', 'appreciate'],
    response: "You're welcome! 😊 Is there anything else I can help you with today?"
  },
  {
    keywords: ['bye', 'goodbye', 'see you', 'have a nice day'],
    response: "Thank you for chatting with us! Have a wonderful day! 🌟 Feel free to reach out anytime you need assistance."
  },
  {
    keywords: ['help', 'support', 'assist', 'question'],
    response: "I'm here to help! You can ask me about:\n• Shipping & Delivery\n• Returns & Refunds\n• Order Tracking\n• Payment Methods\n• Business Hours\n\nWhat would you like to know?"
  }
];

const defaultResponse = "I'm not sure I understand. Could you please rephrase your question? Or you can ask about shipping, returns, payments, order tracking, or contact information.";

export function getResponse(userMessage: string): string {
  const lowerMessage = userMessage.toLowerCase();
  
  for (const rule of responseRules) {
    for (const keyword of rule.keywords) {
      if (lowerMessage.includes(keyword)) {
        return rule.response;
      }
    }
  }
  
  return defaultResponse;
}

export function getWelcomeMessage(): string {
  return "Hello! 👋 I'm your customer service assistant. How can I help you today?";
}
