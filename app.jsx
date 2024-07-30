import React, { useState } from 'react';
import { Bell, Heart, MessageCircle, Send, Upload, User } from 'lucide-react';

const Button = ({ children, className, ...props }) => (
  <button className={`px-4 py-2 rounded ${className}`} {...props}>{children}</button>
);

const Input = ({ className, ...props }) => (
  <input className={`border rounded px-2 py-1 ${className}`} {...props} />
);

const Card = ({ children, className, ...props }) => (
  <div className={`bg-white rounded-lg shadow-md ${className}`} {...props}>{children}</div>
);

const Avatar = ({ children }) => (
  <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center">{children}</div>
);

const Alert = ({ title, children }) => (
  <div className="bg-purple-100 border-purple-300 border rounded-lg p-4">
    <h3 className="text-purple-700 font-bold">{title}</h3>
    <p className="text-purple-600">{children}</p>
  </div>
);

const SocialMediaApp = () => {
  const [posts] = useState([
    { id: 1, user: 'Alice', content: 'Hello, world!', likes: 5, comments: ['Great post!', 'Hello Alice!'] },
    { id: 2, user: 'Bob', content: 'React is awesome!', likes: 10, comments: ['Totally agree!', 'Love React!', 'Nice!'] },
  ]);

  return (
    <div className="max-w-2xl mx-auto p-4 bg-gradient-to-b from-blue-100 to-purple-100 min-h-screen">
      <nav className="flex justify-between items-center mb-6 bg-white p-4 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-blue-600">Social Media App</h1>
        <div className="flex space-x-4">
          <Bell className="cursor-pointer text-purple-500" />
          <User className="cursor-pointer text-purple-500" />
        </div>
      </nav>

      <Card className="mb-6 p-4">
        <div className="flex space-x-2 mb-4">
          <Input placeholder="What's on your mind?" className="flex-grow" />
          <Button className="bg-blue-500 text-white">Post</Button>
        </div>
        <div className="flex justify-between">
          <Button className="text-purple-500">
            <Upload className="inline mr-2 h-4 w-4" /> Photo/Video
          </Button>
          <Button className="text-purple-500">
            #Hashtag
          </Button>
        </div>
      </Card>

      {posts.map((post) => (
        <Card key={post.id} className="mb-4 p-4">
          <div className="flex items-center mb-2">
            <Avatar>{post.user[0]}</Avatar>
            <span className="ml-2 font-semibold text-blue-600">{post.user}</span>
          </div>
          <p className="mb-4">{post.content}</p>
          <div className="flex justify-between mb-2">
            <Button className="text-pink-500">
              <Heart className="inline mr-2 h-4 w-4" /> {post.likes} Likes
            </Button>
            <Button className="text-green-500">
              <MessageCircle className="inline mr-2 h-4 w-4" /> {post.comments.length} Comments
            </Button>
          </div>
          <div className="mt-2">
            <h4 className="font-semibold text-gray-700">Comments:</h4>
            {post.comments.map((comment, index) => (
              <p key={index} className="text-sm text-gray-600 mt-1">{comment}</p>
            ))}
          </div>
        </Card>
      ))}

      <Alert title="Trending Content">
        #ReactJS, #WebDevelopment, and #SocialMedia are trending right now!
      </Alert>
    </div>
  );
};

export default SocialMediaApp;