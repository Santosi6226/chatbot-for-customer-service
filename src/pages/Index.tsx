import { ChatWidget } from "@/components/ChatWidget";
import { MessageCircle, Zap, Clock, Shield } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <header className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/30" />
        <div className="container mx-auto px-6 py-20 relative">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-accent px-4 py-2 rounded-full text-accent-foreground text-sm font-medium mb-6">
              <MessageCircle className="w-4 h-4" />
              Customer Support Chatbot
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Instant Answers,
              <br />
              <span className="text-primary">Happy Customers</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
              Get instant help with our AI-powered customer service chatbot. 
              Available 24/7 to answer your questions about orders, shipping, returns, and more.
            </p>
            <p className="text-sm text-muted-foreground">
              Click the chat bubble in the bottom right corner to start a conversation →
            </p>
          </div>
        </div>
      </header>

      {/* Features Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-foreground mb-12">
            How Can We Help You?
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center p-6 rounded-2xl bg-background hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-accent rounded-xl flex items-center justify-center mx-auto mb-4">
                <Zap className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Instant Responses</h3>
              <p className="text-sm text-muted-foreground">
                Get immediate answers to common questions without waiting in line.
              </p>
            </div>
            <div className="text-center p-6 rounded-2xl bg-background hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-accent rounded-xl flex items-center justify-center mx-auto mb-4">
                <Clock className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">24/7 Available</h3>
              <p className="text-sm text-muted-foreground">
                Our chatbot is always online, ready to assist you anytime.
              </p>
            </div>
            <div className="text-center p-6 rounded-2xl bg-background hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-accent rounded-xl flex items-center justify-center mx-auto mb-4">
                <Shield className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Secure & Private</h3>
              <p className="text-sm text-muted-foreground">
                Your conversations are private and your data is protected.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Topics */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-foreground mb-4">
            Popular Topics
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-xl mx-auto">
            Ask our chatbot about any of these topics or type your own question
          </p>
          <div className="flex flex-wrap justify-center gap-3 max-w-2xl mx-auto">
            {[
              "Shipping & Delivery",
              "Returns & Refunds",
              "Order Tracking",
              "Payment Methods",
              "Business Hours",
              "Account Help",
              "Discounts & Coupons",
              "Contact Support"
            ].map((topic) => (
              <span
                key={topic}
                className="px-4 py-2 bg-secondary text-secondary-foreground rounded-full text-sm hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
              >
                {topic}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Chat Widget */}
      <ChatWidget />
    </div>
  );
};

export default Index;
