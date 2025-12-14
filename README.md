# Customer Service Chatbot

A modern, responsive customer service chatbot built with React, TypeScript, and Tailwind CSS. This chatbot provides instant automated responses to common customer inquiries.

![Chatbot Preview](https://img.shields.io/badge/React-18.3.1-blue) ![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue) ![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-cyan)

---

## 🚀 Features

- **Floating Chat Widget**: A sleek, floating chat button that expands into a full chat interface
- **Real-time Responses**: Instant automated responses based on keyword matching
- **Typing Indicator**: Visual feedback showing the bot is "typing" a response
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Customizable Responses**: Easy-to-modify response rules for different business needs
- **Modern UI**: Beautiful gradient backgrounds and smooth animations

---

## 📁 Project Structure

```
src/
├── components/
│   ├── ChatWidget.tsx        # Main chat interface component
│   ├── ChatMessage.tsx       # Individual message bubble component
│   ├── TypingIndicator.tsx   # Animated typing dots
│   └── ui/                   # Reusable UI components (shadcn/ui)
├── lib/
│   ├── chatResponses.ts      # Response rules and logic
│   └── utils.ts              # Utility functions
├── pages/
│   ├── Index.tsx             # Main landing page
│   └── NotFound.tsx          # 404 page
├── hooks/                    # Custom React hooks
├── index.css                 # Global styles and design tokens
├── App.tsx                   # Root application component
└── main.tsx                  # Application entry point
```

---

## 🔧 Core Components

### 1. ChatWidget (`src/components/ChatWidget.tsx`)

The main chat interface that handles:
- Opening/closing the chat window
- Managing message state
- Sending user messages
- Displaying bot responses with typing animation

**Key Features:**
- Toggle button with message icon
- Chat header with close button
- Scrollable message area
- Input field with send button

### 2. ChatMessage (`src/components/ChatMessage.tsx`)

Renders individual chat messages with different styles for:
- **User messages**: Aligned right with primary color background
- **Bot messages**: Aligned left with muted background

**Props:**
```typescript
interface ChatMessageProps {
  message: string;
  isBot: boolean;
  timestamp: Date;
}
```

### 3. TypingIndicator (`src/components/TypingIndicator.tsx`)

Animated dots that appear while the bot is "thinking":
- Three bouncing dots with staggered animation
- Shows realistic typing delay

### 4. Response System (`src/lib/chatResponses.ts`)

Contains all the chatbot logic:

```typescript
interface ResponseRule {
  keywords: string[];      // Trigger words
  response: string;        // Bot's response
  priority?: number;       // Higher = checked first
}
```

---

## 💬 How the Chatbot Works

1. **User sends a message** → Message is added to chat history
2. **Typing indicator appears** → Creates realistic delay (1-2 seconds)
3. **Keyword matching** → System searches for matching keywords in user's message
4. **Response selection** → Best matching response is selected based on priority
5. **Bot responds** → Response is displayed in chat

### Response Matching Logic

```typescript
// Example: User asks "What are your hours?"
// Keywords matched: ["hours", "open", "schedule"]
// Response: "We're available 24/7! Our support team..."
```

---

## 📝 Current Response Categories

| Category | Keywords | Description |
|----------|----------|-------------|
| Greetings | hello, hi, hey | Welcome messages |
| Pricing | price, cost, pricing | Pricing information |
| Hours | hours, open, schedule | Business hours |
| Contact | contact, email, phone | Contact methods |
| Support | help, support, issue | Support assistance |
| Shipping | shipping, delivery | Shipping info |
| Returns | return, refund | Return policy |
| Account | account, login, password | Account help |

---

## 🎨 Customization Guide

### Adding New Responses

Edit `src/lib/chatResponses.ts`:

```typescript
export const responseRules: ResponseRule[] = [
  // Add your new rule here
  {
    keywords: ['warranty', 'guarantee'],
    response: 'All our products come with a 2-year warranty!',
    priority: 1
  },
  // ... existing rules
];
```

### Changing Colors

Edit `src/index.css` to modify the design tokens:

```css
:root {
  --primary: 174 72% 56%;        /* Main brand color */
  --secondary: 180 25% 25%;      /* Secondary elements */
  --accent: 174 100% 29%;        /* Accent highlights */
}
```

### Modifying the Chat Widget Size

Edit `src/components/ChatWidget.tsx`:

```typescript
// Change these classes for different sizes
className="w-80 h-96"  // Width: 320px, Height: 384px
className="w-96 h-[500px]"  // Larger chat window
```

---

## 🛠️ Technology Stack

| Technology | Purpose |
|------------|---------|
| **React 18** | UI framework |
| **TypeScript** | Type safety |
| **Tailwind CSS** | Styling |
| **shadcn/ui** | UI component library |
| **Vite** | Build tool & dev server |
| **Lucide React** | Icons |


---

## 🚀 Deployment

### Using Lovable
1. Open your project in Lovable
2. Click the **Share** button (top right)
3. Click **Publish** to deploy

### Manual Deployment
```bash
# Build for production
npm run build

# Preview production build
npm run preview
```

The build output will be in the `dist/` folder, ready for deployment to any static hosting service.

---

## 🔮 Future Enhancements

Consider these upgrades for production use:

1. **AI-Powered Responses**: Connect to OpenAI/Claude for intelligent responses
2. **Database Integration**: Store conversation history with Lovable Cloud
3. **Human Handoff**: Escalate complex issues to live agents
4. **Multi-language Support**: Add translations for global users
5. **Analytics**: Track common questions and response effectiveness
6. **Rich Messages**: Support for images, buttons, and carousels

---

## 📄 File Reference

| File | Description |
|------|-------------|
| `index.html` | HTML entry point with meta tags |
| `src/main.tsx` | React app initialization |
| `src/App.tsx` | Router configuration |
| `src/index.css` | Global styles & CSS variables |
| `tailwind.config.ts` | Tailwind configuration |
| `vite.config.ts` | Vite build configuration |

---

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📞 Support

For questions or issues:
- Open an issue in this repository
- Contact us through the chatbot! 😄

