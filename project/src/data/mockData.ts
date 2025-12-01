import { PostType } from '@/types/post';
import { ClosetItemType } from '@/types/closet';
import { OutfitType } from '@/types/outfit';

export const mockPosts: PostType[] = [
  {
    id: '1',
    user: {
      id: '101',
      name: 'Sophie Anderson',
      username: 'sophiestyle',
      avatar: 'https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    imageUrl: 'https://images.pexels.com/photos/2043590/pexels-photo-2043590.jpeg?auto=compress&cs=tinysrgb&w=800',
    caption: 'Spring vibes in my favorite outfit 🌸',
    likes: 345,
    comments: 42,
    shares: 12,
    tags: ['spring', 'casual', 'ootd'],
    timestamp: '2 hours ago',
    isLiked: false,
    isSaved: false
  },
  {
    id: '2',
    user: {
      id: '102',
      name: 'Alex Martin',
      username: 'alexstreetwear',
      avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    imageUrl: 'https://images.pexels.com/photos/3651597/pexels-photo-3651597.jpeg?auto=compress&cs=tinysrgb&w=800',
    caption: 'Streetwear styling for the weekend 🔥',
    likes: 521,
    comments: 38,
    shares: 24,
    tags: ['streetwear', 'urban', 'nike'],
    timestamp: '5 hours ago',
    isLiked: true,
    isSaved: true
  }
];

export const mockTrendingTags = [
  'hangerhaul',
  'sustainablefits',
  'closetswap',
  'stylistSOS',
  'streetstyle',
  'nightout',
];

export const mockClosetItems: ClosetItemType[] = [
  {
    id: '1',
    name: 'Black Turtleneck',
    brand: 'Uniqlo',
    category: 'Tops',
    color: 'Black',
    season: 'Fall/Winter',
    imageUrl: 'https://images.pexels.com/photos/6311387/pexels-photo-6311387.png?auto=compress&cs=tinysrgb&w=300&bg=transparent'
  },
  {
    id: '2',
    name: 'Slim Jeans',
    brand: 'Levi\'s',
    category: 'Bottoms',
    color: 'Blue',
    season: 'All Seasons',
    imageUrl: 'https://images.pexels.com/photos/4210866/pexels-photo-4210866.png?auto=compress&cs=tinysrgb&w=300&bg=transparent'
  },
  {
    id: '3',
    name: 'White Sneakers',
    brand: 'Nike',
    category: 'Shoes',
    color: 'White',
    season: 'All Seasons',
    imageUrl: 'https://images.pexels.com/photos/19090/pexels-photo.png?auto=compress&cs=tinysrgb&w=300&bg=transparent'
  },
  {
    id: '4',
    name: 'Leather Jacket',
    brand: 'Zara',
    category: 'Outerwear',
    color: 'Black',
    season: 'Fall/Winter',
    imageUrl: 'https://images.pexels.com/photos/6770028/pexels-photo-6770028.png?auto=compress&cs=tinysrgb&w=300&bg=transparent'
  },
  {
    id: '5',
    name: 'Gold Necklace',
    brand: 'H&M',
    category: 'Accessories',
    color: 'Gold',
    season: 'All Seasons',
    imageUrl: 'https://images.pexels.com/photos/9428790/pexels-photo-9428790.png?auto=compress&cs=tinysrgb&w=300&bg=transparent'
  },
  {
    id: '6',
    name: 'Silk Blouse',
    brand: 'Mango',
    category: 'Tops',
    color: 'White',
    season: 'Spring/Summer',
    imageUrl: 'https://images.pexels.com/photos/6311651/pexels-photo-6311651.png?auto=compress&cs=tinysrgb&w=300&bg=transparent'
  }
];

export const mockTrendingUsers = [
  {
    id: '101',
    name: 'Sophie A.',
    username: 'sophiestyle',
    avatar: 'https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=150'
  },
  {
    id: '102',
    name: 'Alex M.',
    username: 'alexstreetwear',
    avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150'
  },
  {
    id: '103',
    name: 'Mia L.',
    username: 'miastyle',
    avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150'
  },
  {
    id: '104',
    name: 'Jackson K.',
    username: 'jacksonk',
    avatar: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=150'
  },
  {
    id: '105',
    name: 'Emma W.',
    username: 'emmafashion',
    avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150'
  },
  {
    id: '106',
    name: 'Tyler R.',
    username: 'tylerstreet',
    avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150'
  }
];

export const mockStylistSpotlight = [
  {
    id: '501',
    name: 'Noah Rivera',
    specialty: 'Minimalist streetwear',
    avatar: 'https://images.pexels.com/photos/775358/pexels-photo-775358.jpeg?auto=compress&cs=tinysrgb&w=150',
    sessions: 142,
  },
  {
    id: '502',
    name: 'Priya Desai',
    specialty: 'Power suiting & workwear',
    avatar: 'https://images.pexels.com/photos/4153188/pexels-photo-4153188.jpeg?auto=compress&cs=tinysrgb&w=150',
    sessions: 98,
  },
  {
    id: '503',
    name: 'Leo Martins',
    specialty: 'Vintage treasure hunter',
    avatar: 'https://images.pexels.com/photos/2413594/pexels-photo-2413594.jpeg?auto=compress&cs=tinysrgb&w=150',
    sessions: 76,
  },
];

export const mockTrendingOutfits: OutfitType[] = [
  {
    id: '1',
    title: 'Spring Casual',
    imageUrl: 'https://images.pexels.com/photos/2043590/pexels-photo-2043590.jpeg?auto=compress&cs=tinysrgb&w=300',
    creator: 'Sophie A.',
    likes: 435,
    createdAt: '2023-06-12',
    isNew: true
  },
  {
    id: '2',
    title: 'Urban Style',
    imageUrl: 'https://images.pexels.com/photos/3651597/pexels-photo-3651597.jpeg?auto=compress&cs=tinysrgb&w=300',
    creator: 'Alex M.',
    likes: 328,
    createdAt: '2023-06-10'
  },
  {
    id: '3',
    title: 'Office Chic',
    imageUrl: 'https://images.pexels.com/photos/1021693/pexels-photo-1021693.jpeg?auto=compress&cs=tinysrgb&w=300',
    creator: 'Mia L.',
    likes: 267,
    createdAt: '2023-06-08',
    isNew: true
  },
  {
    id: '4',
    title: 'Weekend Vibes',
    imageUrl: 'https://images.pexels.com/photos/2905238/pexels-photo-2905238.jpeg?auto=compress&cs=tinysrgb&w=300',
    creator: 'Jackson K.',
    likes: 189,
    createdAt: '2023-06-05'
  }
];

export const mockUserProfile = {
  id: '1001',
  name: 'Emily Johnson',
  username: 'emilystyle',
  bio: 'Fashion enthusiast | NYC 🗽 | Sharing my style journey and closet organization tips',
  avatar: 'https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=150',
  stats: {
    posts: 87,
    followers: 2430,
    following: 412,
    likes: 15600
  },
  closet: mockClosetItems,
  outfits: [
    {
      id: '1',
      title: 'Summer Brunch',
      imageUrl: 'https://images.pexels.com/photos/2043590/pexels-photo-2043590.jpeg?auto=compress&cs=tinysrgb&w=300',
      creator: 'Emily J.',
      likes: 325,
      createdAt: '2023-06-12'
    },
    {
      id: '2',
      title: 'Office Look',
      imageUrl: 'https://images.pexels.com/photos/1021693/pexels-photo-1021693.jpeg?auto=compress&cs=tinysrgb&w=300',
      creator: 'Emily J.',
      likes: 287,
      createdAt: '2023-06-10'
    },
    {
      id: '3',
      title: 'Weekend Casual',
      imageUrl: 'https://images.pexels.com/photos/2905238/pexels-photo-2905238.jpeg?auto=compress&cs=tinysrgb&w=300',
      creator: 'Emily J.',
      likes: 198,
      createdAt: '2023-06-08'
    },
    {
      id: '4',
      title: 'Night Out',
      imageUrl: 'https://images.pexels.com/photos/3651597/pexels-photo-3651597.jpeg?auto=compress&cs=tinysrgb&w=300',
      creator: 'Emily J.',
      likes: 342,
      createdAt: '2023-06-05'
    }
  ]
};

export const mockClosetRequests = [
  {
    id: 'r1',
    name: 'Maya Chen',
    avatar: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150',
    request: 'Offered $120 for your Leather Jacket',
    timeAgo: '12m ago',
    type: 'buy',
  },
  {
    id: 'r2',
    name: 'Jordan Lee',
    avatar: 'https://images.pexels.com/photos/936559/pexels-photo-936559.jpeg?auto=compress&cs=tinysrgb&w=150',
    request: 'Wants to trade for your Silk Blouse',
    timeAgo: '1h ago',
    type: 'trade',
  },
  {
    id: 'r3',
    name: 'The Style Lab',
    avatar: 'https://images.pexels.com/photos/3760856/pexels-photo-3760856.jpeg?auto=compress&cs=tinysrgb&w=150',
    request: 'Book you as a virtual stylist',
    timeAgo: '2h ago',
    type: 'styling',
  },
];

export const mockStylistServices = [
  {
    id: 's1',
    title: 'AI Outfit Builder',
    description: 'Let Hanger curate a full look from your closet with one tap.',
    cta: 'Generate look',
  },
  {
    id: 's2',
    title: 'Hire Me For An Event',
    description: 'Offer 3 custom outfit decks plus direct chat styling support.',
    cta: 'Share rates',
  },
  {
    id: 's3',
    title: 'Accept Closet Requests',
    description: 'Approve buyers, swaps, and stylist consults from your community.',
    cta: 'Review now',
  },
];

export const mockAiHotItems = [
  {
    id: 'h1',
    label: 'Cherry red moto jacket',
    lift: '+42% week over week',
  },
  {
    id: 'h2',
    label: 'Metallic mini bags',
    lift: '+28% search volume',
  },
  {
    id: 'h3',
    label: 'Sheer button-downs',
    lift: '+19% saved looks',
  },
];

export const mockAiTips = [
  {
    id: 't1',
    title: 'Layer denim on denim',
    body: 'Pair your Levi\'s slim jeans with a cropped denim jacket for a modern take on the Canadian tuxedo.',
  },
  {
    id: 't2',
    title: 'Contrast cozy textures',
    body: 'Style the black turtleneck with your silk blouse draped over shoulders for instant polish.',
  },
  {
    id: 't3',
    title: 'Statement sneaker swap',
    body: 'Trade for white sneakers with colored laces to refresh repeat looks without new purchases.',
  },
];

export const mockAiClosetLooks = [
  {
    id: 'cl1',
    title: 'Brunch in Soho',
    pieces: ['Silk Blouse', 'Slim Jeans', 'White Sneakers'],
    vibe: 'Soft neutrals • Casual chic',
  },
  {
    id: 'cl2',
    title: 'Gallery Opening',
    pieces: ['Black Turtleneck', 'Leather Jacket', 'Gold Necklace'],
    vibe: 'Monochrome • Elevated edge',
  },
];

export const mockMarketplaceRecommendations = [
  {
    id: 'm1',
    item: 'Vintage satin midi skirt',
    seller: 'ari.wears',
    price: '$64',
  },
  {
    id: 'm2',
    item: 'Chunky silver hoops',
    seller: 'lexcloset',
    price: '$18',
  },
  {
    id: 'm3',
    item: 'Oversized trench coat',
    seller: 'coatcollective',
    price: '$110',
  },
];