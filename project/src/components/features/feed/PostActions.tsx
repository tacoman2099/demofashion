import React, { useState } from 'react';
import { Heart, MessageCircle, Repeat, Bookmark } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { PostType } from '@/types/post';

interface PostActionsProps {
  post: PostType;
}

const PostActions: React.FC<PostActionsProps> = ({ post }) => {
  const [liked, setLiked] = useState(post.isLiked);
  const [saved, setSaved] = useState(post.isSaved);
  const [likeCount, setLikeCount] = useState(post.likes);

  const handleLike = () => {
    if (liked) {
      setLikeCount(prev => prev - 1);
    } else {
      setLikeCount(prev => prev + 1);
    }
    setLiked(!liked);
  };

  return (
    <div className="w-full">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Button 
            variant="ghost" 
            size="icon"
            onClick={handleLike}
            className={cn(
              "h-9 w-9 rounded-full transition-all",
              liked && "text-red-500"
            )}
          >
            <Heart 
              className={cn(
                "h-5 w-5 transition-all",
                liked && "fill-red-500 scale-110 transition-transform"
              )} 
            />
          </Button>
          <Button variant="ghost" size="icon" className="h-9 w-9 rounded-full">
            <MessageCircle className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="h-9 w-9 rounded-full">
            <Repeat className="h-5 w-5" />
          </Button>
        </div>
        <Button 
          variant="ghost" 
          size="icon" 
          className="h-9 w-9 rounded-full"
          onClick={() => setSaved(!saved)}
        >
          <Bookmark 
            className={cn(
              "h-5 w-5 transition-all",
              saved && "fill-foreground"
            )} 
          />
        </Button>
      </div>
      <div className="text-sm font-medium mt-2">
        {likeCount.toLocaleString()} likes
      </div>
    </div>
  );
};

export default PostActions;