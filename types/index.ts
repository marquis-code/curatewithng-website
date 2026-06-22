export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  role: 'USER' | 'VENDOR' | 'ADMIN';
  avatar?: string;
  phone?: string;
  preferences?: UserPreferences;
  recipients?: Recipient[];
  corporateProfile?: CorporateProfile;
  isVerified: boolean;
  createdAt: string;
}

export interface UserPreferences {
  occasions: string[];
  budgetRange: { min: number; max: number };
  interests: string[];
}

export interface Recipient {
  name: string;
  relationship: string;
  birthday?: string;
  interests: string[];
  notes?: string;
}

export interface CorporateProfile {
  companyName: string;
  position: string;
  teamSize: number;
}

export interface Gift {
  _id: string;
  vendorId: Vendor | string;
  name: string;
  slug: string;
  description: string;
  category: string;
  tags: string[];
  images: string[];
  price: number;
  discountPrice?: number;
  currency: string;
  occasions: string[];
  recipientTypes: string[];
  budgetTier: 'BUDGET' | 'MID' | 'PREMIUM' | 'LUXURY';
  stock: number;
  isAvailable: boolean;
  aiTags: string[];
  rating: number;
  reviewCount: number;
  isFeatured: boolean;
  createdAt: string;
}

export interface Vendor {
  _id: string;
  businessName: string;
  slug: string;
  description: string;
  logo: string;
  coverImage: string;
  categories: string[];
  location: { state: string; city: string; address?: string };
  rating: number;
  reviewCount: number;
  isApproved: boolean;
  createdAt: string;
}

export interface Order {
  _id: string;
  orderNumber: string;
  userId: string;
  items: OrderItem[];
  recipient: OrderRecipient;
  totalAmount: number;
  platformFee: number;
  vendorAmount: number;
  status: OrderStatus;
  paymentStatus: 'UNPAID' | 'PAID' | 'REFUNDED';
  paystackReference?: string;
  timeline: TimelineEntry[];
  createdAt: string;
}

export interface OrderItem {
  giftId: Gift | string;
  vendorId: Vendor | string;
  quantity: number;
  unitPrice: number;
  subtotal: number;
}

export interface OrderRecipient {
  name: string;
  phone?: string;
  address?: string;
  note?: string;
  deliveryDate?: string;
}

export interface TimelineEntry {
  status: OrderStatus;
  timestamp: string;
  note?: string;
}

export type OrderStatus = 'PENDING' | 'CONFIRMED' | 'PROCESSING' | 'SHIPPED' | 'DELIVERED' | 'CANCELLED' | 'REFUNDED';

export interface CartItem {
  gift: Gift;
  quantity: number;
}

export interface CurationRequest {
  recipientName?: string;
  relationship: string;
  age?: number;
  gender?: string;
  interests: string[];
  occasion: string;
  budgetMin: number;
  budgetMax: number;
  additionalNotes?: string;
}

export interface CurationRecommendation {
  gift: Gift;
  score: number;
  reasoning: string;
}

export interface CurationResult {
  sessionId: string;
  recommendations: CurationRecommendation[];
}

export interface ApiResponse<T> {
  success: boolean;
  data: T;
  timestamp: string;
}

export interface PaginatedResponse<T> {
  data: T[];
  meta: {
    total: number;
    page: number;
    limit: number;
    totalPages: number;
    hasNextPage: boolean;
    hasPrevPage: boolean;
  };
}
