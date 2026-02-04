# 🛍️ SHOP.CO - Modern E-Ticaret Platformu

SHOP.CO, modern web teknolojileri kullanılarak geliştirilmiş, kullanıcı dostu ve performanslı bir e-ticaret uygulamasıdır. Figma tasarımlarına %100 sadık kalınarak, mobile-first yaklaşımıyla oluşturulmuştur.

## ✨ Özellikler

- 🎨 **Pixel-Perfect Tasarım**: Figma tasarımlarına birebir sadık arayüz
- 📱 **Responsive Tasarım**: Mobile-first yaklaşımla tüm cihazlarda mükemmel görünüm
- 🛒 **Gelişmiş Sepet Yönetimi**: Zustand ile optimize edilmiş state yönetimi
- ⚡ **Hızlı Performans**: TanStack Query ile cache yönetimi ve veri optimizasyonu
- 🎯 **Kategori Bazlı Filtreleme**: Ürünleri kategorilere göre filtreleme
- ⭐ **Ürün Detay Sayfaları**: Resimler, açıklamalar ve kullanıcı yorumları
- 💳 **Sepet Fonksiyonları**: Ürün ekleme, çıkarma, miktar güncelleme
- 🎨 **Dress Style Kategorileri**: Görsel stil kategorileri ile kolay gezinme

## 🚀 Teknolojiler

### Core
- **Next.js 16.1.6** - React framework (App Router)
- **React 19.2.3** - UI library
- **TypeScript 5** - Type safety

### Styling
- **Tailwind CSS 4.1.18** - Utility-first CSS framework
- **PostCSS 8.5.6** - CSS transformations
- **Autoprefixer 10.4.24** - Browser compatibility

### State Management & Data Fetching
- **Zustand 5.0.11** - Lightweight state management
- **TanStack Query v5.90.20** - Server state management
- **Axios 1.13.4** - HTTP client

### UI & Icons
- **Lucide React 0.563.0** - Icon library

### Development Tools
- **ESLint 9** - Code linting
- **React Compiler** - Performance optimizations
- **OpenAPI React Query Codegen** - Type-safe API client generation

## 📦 Kurulum

```bash
# Repository'yi klonlayın
git clone <repository-url>

# Proje dizinine gidin
cd wibesoft-ecommerce

# Bağımlılıkları yükleyin
npm install

# Development server'ı başlatın
npm run dev
```

Uygulama [http://localhost:3000](http://localhost:3000) adresinde çalışacaktır.

## 📁 Proje Yapısı

```
wibesoft-ecommerce/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── page.tsx           # Ana sayfa
│   │   ├── cart/              # Sepet sayfası
│   │   ├── category/[slug]/   # Kategori sayfası (dynamic)
│   │   └── product/[id]/      # Ürün detay sayfası (dynamic)
│   ├── components/            # Reusable components
│   │   ├── Navbar.tsx         # Navigation bar
│   │   ├── Hero.tsx           # Hero section
│   │   ├── ProductCard.tsx    # Ürün kartı
│   │   ├── CustomerReviews.tsx
│   │   ├── TopSelling.tsx
│   │   ├── DressStyle.tsx
│   │   ├── FilterDrawer.tsx
│   │   ├── Reviews.tsx
│   │   └── Footer.tsx
│   ├── hooks/                 # Custom React hooks
│   │   └── useProducts.ts     # Product data fetching
│   ├── store/                 # State management
│   │   └── useCartStore.ts    # Shopping cart store
│   ├── providers/             # Context providers
│   │   └── QueryProvider.tsx  # TanStack Query provider
│   └── types/                 # TypeScript type definitions
│       └── index.ts
├── public/                    # Static assets
│   └── categories/           # Category images
└── config files              # ESLint, Tailwind, etc.
```

## 🎯 Temel Fonksiyonaliteler

### Ana Sayfa
- Hero banner
- New Arrivals section (4 ürün)
- Top Selling section
- Dress Style kategorileri
- Müşteri yorumları

### Ürün Yönetimi
- FakeStore API'den ürün çekme
- Kategori bazlı filtreleme
- Ürün detay sayfası
- Ürün yorumları ve değerlendirmeleri

### Sepet Yönetimi
- Sepete ürün ekleme
- Ürün miktarı artırma/azaltma
- Sepetten ürün çıkarma
- Subtotal, discount, delivery fee hesaplaması
- Promo code alanı

### Navigasyon
- Responsive navbar
- Kategori linkleri
- Sepet badge (toplam ürün sayısı)
- Search bar (desktop)

## 🏗️ Mimari Kararlar

### Mobile-First Yaklaşım
Proje, mobil cihazlar öncelikli tasarlanmıştır. Tailwind CSS'in responsive breakpoint'leri kullanılarak tablet ve desktop için optimize edilmiştir.

### State Yönetimi - Zustand
Sepet yönetimi için Zustand tercih edilmiştir:
- ✅ Minimal boilerplate
- ✅ Yüksek performans
- ✅ DevTools desteği
- ✅ TypeScript uyumluluğu

### API Cache Yönetimi - TanStack Query
Server state yönetimi için TanStack Query v5 kullanılmıştır:
- ✅ Otomatik cache yönetimi
- ✅ Background refetching
- ✅ Loading ve error state'leri
- ✅ Optimistic updates

### Styling - Tailwind CSS
Utility-first yaklaşımla hızlı ve tutarlı UI geliştirme:
- ✅ JIT (Just-In-Time) compiler
- ✅ Custom design system
- ✅ Responsive utilities
- ✅ Dark mode desteği (hazır altyapı)

## 🎨 Design System

Figma tasarımlarına %100 sadık kalınarak:
- **Border Radius**: Tüm köşe yuvarlaklıkları tasarım dokümanına uygun
- **Spacing**: Padding ve margin değerleri birebir uygulanmış
- **Typography**: Font boyutları, ağırlıkları ve satır yükseklikleri tasarıma uygun
- **Colors**: Marka renkleri ve gri tonları tasarım sistemine göre

## 🔧 Npm Scripts

```bash
# Development server
npm run dev

# Production build
npm run build

# Production server
npm start

# Linting
npm run lint
```

## 🌐 API

Proje, ürün verilerini [FakeStore API](https://fakestoreapi.com/) üzerinden çekmektedir:
- `GET /products` - Tüm ürünler
- `GET /products?limit=n` - Belirli sayıda ürün
- `GET /products/categories` - Kategoriler

## 📱 Responsive Breakpoints

```css
sm: 640px   /* Small devices */
md: 768px   /* Medium devices */
lg: 1024px  /* Large devices */
xl: 1280px  /* Extra large devices */
2xl: 1536px /* 2X Extra large devices */
```

## 🎯 Gelecek Geliştirmeler

- [ ] Kullanıcı authentication sistemi
- [ ] Ürün arama fonksiyonalitesi
- [ ] Favori ürünler listesi
- [ ] Ödeme entegrasyonu
- [ ] Sipariş geçmişi
- [ ] Ürün karşılaştırma
- [ ] Dark mode implementasyonu
- [ ] i18n (Çoklu dil desteği)

## 📄 Lisans

Bu proje özel bir projedir.

## 👨‍💻 Geliştirici

Wibesoft E-Commerce Platform

---

**Not**: Bu proje Figma tasarımlarına birebir sadık kalınarak, modern web development best practices kullanılarak geliştirilmiştir.