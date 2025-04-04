
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Send } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

// Sample conversation data - in a real app this would come from a database
const sampleConversations = [
  {
    id: '1',
    with: 'Maria Johnson',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100',
    lastMessage: 'I would like to get the vegetables you posted',
    timestamp: '9:32 AM',
    unread: true,
    type: 'receiver'
  },
  {
    id: '2',
    with: 'Jason Lee',
    avatar: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=100',
    lastMessage: 'The bread is still available for pickup',
    timestamp: 'Yesterday',
    unread: false,
    type: 'donor'
  },
  {
    id: '3',
    with: 'Sarah Williams',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=100',
    lastMessage: 'Thank you for the donation!',
    timestamp: 'Monday',
    unread: false,
    type: 'receiver'
  },
];

// Sample messages data - in a real app this would come from a database
const sampleMessages = {
  '1': [
    { id: 'm1', sender: 'Maria Johnson', content: 'Hello, I saw your post about vegetables available for donation.', time: '9:15 AM', isMine: false },
    { id: 'm2', sender: 'me', content: 'Hi Maria! Yes, they are still available.', time: '9:20 AM', isMine: true },
    { id: 'm3', sender: 'Maria Johnson', content: 'Great! I would like to get them. When can I pick them up?', time: '9:25 AM', isMine: false },
    { id: 'm4', sender: 'me', content: 'You can pick them up today between 2-5pm if that works for you?', time: '9:30 AM', isMine: true },
    { id: 'm5', sender: 'Maria Johnson', content: 'I would like to get the vegetables you posted', time: '9:32 AM', isMine: false },
  ],
  '2': [
    { id: 'm1', sender: 'Jason Lee', content: 'Hi there, I saw your request for bread.', time: 'Yesterday', isMine: false },
    { id: 'm2', sender: 'me', content: 'Yes, I am looking for some bread for our community pantry.', time: 'Yesterday', isMine: true },
    { id: 'm3', sender: 'Jason Lee', content: 'The bread is still available for pickup', time: 'Yesterday', isMine: false },
  ],
  '3': [
    { id: 'm1', sender: 'me', content: 'Hi Sarah, your donation has been picked up!', time: 'Monday', isMine: true },
    { id: 'm2', sender: 'Sarah Williams', content: 'Thank you for the donation!', time: 'Monday', isMine: false },
  ],
};

const MessagesPage: React.FC = () => {
  const navigate = useNavigate();
  const [activeConversation, setActiveConversation] = useState<string | null>(null);
  const [messageText, setMessageText] = useState('');
  const [conversations, setConversations] = useState(sampleConversations);
  const [messages, setMessages] = useState(sampleMessages);

  const handleSendMessage = () => {
    if (!messageText.trim() || !activeConversation) return;

    const newMessage = {
      id: `m${Math.random().toString(36).substr(2, 9)}`,
      sender: 'me',
      content: messageText,
      time: 'Just now',
      isMine: true
    };

    // Update messages
    setMessages(prev => ({
      ...prev,
      [activeConversation]: [...prev[activeConversation], newMessage]
    }));

    // Update last message in conversations list
    setConversations(prev =>
      prev.map(conv =>
        conv.id === activeConversation
          ? { ...conv, lastMessage: messageText, timestamp: 'Just now', unread: false }
          : conv
      )
    );

    setMessageText('');
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar isAuthenticated={true} />
      
      <main className="flex-grow bg-gray-50 py-8">
        <div className="container mx-auto px-4">
          <div className="mb-6">
            <Button 
              variant="ghost" 
              className="flex items-center text-gray-600" 
              onClick={() => navigate('/dashboard')}
            >
              <ArrowLeft size={16} className="mr-2" /> Back to Dashboard
            </Button>
          </div>
          
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <Tabs defaultValue="all" className="w-full">
              <div className="border-b">
                <div className="px-4">
                  <TabsList className="h-14">
                    <TabsTrigger value="all" className="data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-food-green-500 rounded-none px-4 py-3">
                      All Messages
                    </TabsTrigger>
                    <TabsTrigger value="donors" className="data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-food-green-500 rounded-none px-4 py-3">
                      Donors
                    </TabsTrigger>
                    <TabsTrigger value="receivers" className="data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-food-green-500 rounded-none px-4 py-3">
                      Receivers
                    </TabsTrigger>
                  </TabsList>
                </div>
              </div>
              
              <div className="grid md:grid-cols-3 h-[600px]">
                <div className="col-span-1 border-r">
                  <TabsContent value="all" className="m-0 h-full">
                    <ScrollArea className="h-[600px]">
                      {conversations.map(conversation => (
                        <div 
                          key={conversation.id}
                          onClick={() => setActiveConversation(conversation.id)}
                          className={`flex items-center gap-3 p-4 cursor-pointer hover:bg-gray-50 border-b ${activeConversation === conversation.id ? 'bg-gray-50' : ''}`}
                        >
                          <Avatar>
                            <AvatarImage src={conversation.avatar} />
                            <AvatarFallback>{conversation.with.charAt(0)}</AvatarFallback>
                          </Avatar>
                          <div className="flex-1 min-w-0">
                            <div className="flex justify-between items-center mb-1">
                              <p className="font-medium truncate">{conversation.with}</p>
                              <span className="text-xs text-gray-500">{conversation.timestamp}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <p className="text-sm text-gray-600 truncate">{conversation.lastMessage}</p>
                              {conversation.unread && <Badge variant="default" className="h-2 w-2 rounded-full p-0" />}
                            </div>
                          </div>
                        </div>
                      ))}
                    </ScrollArea>
                  </TabsContent>
                  
                  <TabsContent value="donors" className="m-0 h-full">
                    <ScrollArea className="h-[600px]">
                      {conversations.filter(c => c.type === 'donor').map(conversation => (
                        <div 
                          key={conversation.id}
                          onClick={() => setActiveConversation(conversation.id)}
                          className={`flex items-center gap-3 p-4 cursor-pointer hover:bg-gray-50 border-b ${activeConversation === conversation.id ? 'bg-gray-50' : ''}`}
                        >
                          <Avatar>
                            <AvatarImage src={conversation.avatar} />
                            <AvatarFallback>{conversation.with.charAt(0)}</AvatarFallback>
                          </Avatar>
                          <div className="flex-1 min-w-0">
                            <div className="flex justify-between items-center mb-1">
                              <p className="font-medium truncate">{conversation.with}</p>
                              <span className="text-xs text-gray-500">{conversation.timestamp}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <p className="text-sm text-gray-600 truncate">{conversation.lastMessage}</p>
                              {conversation.unread && <Badge variant="default" className="h-2 w-2 rounded-full p-0" />}
                            </div>
                          </div>
                        </div>
                      ))}
                    </ScrollArea>
                  </TabsContent>
                  
                  <TabsContent value="receivers" className="m-0 h-full">
                    <ScrollArea className="h-[600px]">
                      {conversations.filter(c => c.type === 'receiver').map(conversation => (
                        <div 
                          key={conversation.id}
                          onClick={() => setActiveConversation(conversation.id)}
                          className={`flex items-center gap-3 p-4 cursor-pointer hover:bg-gray-50 border-b ${activeConversation === conversation.id ? 'bg-gray-50' : ''}`}
                        >
                          <Avatar>
                            <AvatarImage src={conversation.avatar} />
                            <AvatarFallback>{conversation.with.charAt(0)}</AvatarFallback>
                          </Avatar>
                          <div className="flex-1 min-w-0">
                            <div className="flex justify-between items-center mb-1">
                              <p className="font-medium truncate">{conversation.with}</p>
                              <span className="text-xs text-gray-500">{conversation.timestamp}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <p className="text-sm text-gray-600 truncate">{conversation.lastMessage}</p>
                              {conversation.unread && <Badge variant="default" className="h-2 w-2 rounded-full p-0" />}
                            </div>
                          </div>
                        </div>
                      ))}
                    </ScrollArea>
                  </TabsContent>
                </div>
                
                {/* Chat Area */}
                <div className="col-span-2 flex flex-col h-full">
                  {activeConversation ? (
                    <>
                      {/* Chat Header */}
                      <div className="p-4 border-b flex items-center gap-3">
                        <Avatar>
                          <AvatarImage src={conversations.find(c => c.id === activeConversation)?.avatar} />
                          <AvatarFallback>{conversations.find(c => c.id === activeConversation)?.with.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-medium">{conversations.find(c => c.id === activeConversation)?.with}</p>
                          <p className="text-xs text-gray-500">{conversations.find(c => c.id === activeConversation)?.type === 'donor' ? 'Food Donor' : 'Food Requester'}</p>
                        </div>
                      </div>
                      
                      {/* Chat Messages */}
                      <ScrollArea className="flex-1 p-4">
                        <div className="space-y-4">
                          {messages[activeConversation].map(message => (
                            <div 
                              key={message.id} 
                              className={`flex ${message.isMine ? 'justify-end' : 'justify-start'}`}
                            >
                              <div 
                                className={`max-w-[80%] rounded-lg p-3 ${
                                  message.isMine 
                                    ? 'bg-food-green-500 text-white rounded-tr-none' 
                                    : 'bg-gray-100 text-gray-800 rounded-tl-none'
                                }`}
                              >
                                <p className="text-sm">{message.content}</p>
                                <p className={`text-xs mt-1 ${message.isMine ? 'text-green-100' : 'text-gray-500'}`}>{message.time}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </ScrollArea>
                      
                      {/* Message Input */}
                      <div className="p-4 border-t">
                        <div className="flex items-center gap-2">
                          <Input 
                            value={messageText}
                            onChange={(e) => setMessageText(e.target.value)}
                            onKeyDown={handleKeyPress}
                            placeholder="Type a message..." 
                            className="flex-1"
                          />
                          <Button 
                            onClick={handleSendMessage}
                            size="icon" 
                            disabled={!messageText.trim()}
                          >
                            <Send size={18} />
                          </Button>
                        </div>
                      </div>
                    </>
                  ) : (
                    <div className="flex flex-col items-center justify-center h-full text-center p-8">
                      <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center mb-4">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M21 15C21 15.5304 20.7893 16.0391 20.4142 16.4142C20.0391 16.7893 19.5304 17 19 17H7L3 21V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V15Z" stroke="#9CA3AF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      <h3 className="text-lg font-medium mb-2">Your Messages</h3>
                      <p className="text-gray-500">Select a conversation to start messaging</p>
                    </div>
                  )}
                </div>
              </div>
            </Tabs>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default MessagesPage;
