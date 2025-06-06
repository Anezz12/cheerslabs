import Image from 'next/image';

// Customer review card component
interface Review {
  id: number;
  content: string;
  name: string;
  role: string;
  avatarUrl: string;
}

export default function CustomerReviewCard() {
  // Array of reviews with unique customer data focused on coffee experience
  const reviews: Review[] = [
    {
      id: 1,
      content:
        'Kopi di Cheers Labs benar-benar luar biasa! Biji kopinya berkualitas tinggi dan barista yang sangat ramah. Tempatnya juga nyaman untuk ngobrol atau kerja.',
      name: 'Putri Kartika',
      role: 'Mahasiswa',
      avatarUrl: '/profile.png',
    },
    {
      id: 2,
      content:
        'Harga yang sangat reasonable untuk kualitas kopi premium. Latte art-nya juga cantik banget!',
      name: 'Budi Santoso',
      role: 'Coffee Enthusiast',
      avatarUrl: '/profile.png',
    },
    {
      id: 3,
      content:
        'Suasana yang cozy dan tenang, Wi-Fi kencang, perfect untuk work from cafe. Menu makanannya juga enak-enak.',
      name: 'Diana Chen',
      role: 'Freelancer',
      avatarUrl: '/profile.png',
    },
    {
      id: 4,
      content:
        'Coffee shop favorit buat nongkrong sama teman. Espresso-nya bold dan rich, persis seperti yang saya suka.',
      name: 'Ari Santoso',
      role: 'Mahasiswa',
      avatarUrl: '/profile.png',
    },
    {
      id: 5,
      content:
        'Pelayanan yang excellent dan kopinya selalu konsisten. Cold brew-nya jadi andalan saya setiap hari.',
      name: 'Jessica Kim',
      role: 'Marketing Executive',
      avatarUrl: '/profile.png',
    },
    {
      id: 6,
      content:
        'Tempat yang instagramable dengan kopi yang tidak kalah amazing. Cappuccino-nya creamy dan aromatic.',
      name: 'Rahmat Hidayat',
      role: 'Content Creator',
      avatarUrl: '/profile.png',
    },
    {
      id: 7,
      content:
        'Sebagai pecinta kopi, saya sangat impressed dengan single origin coffee mereka. Flavor notes-nya complex dan balanced.',
      name: 'Sarah Johnson',
      role: 'Coffee Connoisseur',
      avatarUrl: '/profile.png',
    },
    {
      id: 8,
      content:
        'Hidden gem di Yogya! Kopinya top notch, pastry-nya fresh, dan atmosfernya bikin betah berlama-lama.',
      name: 'David Lee',
      role: 'Food Blogger',
      avatarUrl: '/profile.png',
    },
    {
      id: 9,
      content:
        'Perfect spot untuk first date atau meeting client. Ambience-nya warm dan kopi signature-nya memorable banget.',
      name: 'Natasha Singh',
      role: 'Business Owner',
      avatarUrl: '/profile.png',
    },
  ];

  // Enhanced review card component with white background
  const ReviewCard = ({ review }: { review: Review }) => (
    <div className="mb-4 md:mb-[30px] overflow-hidden rounded-2xl md:rounded-[20px] bg-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 md:hover:scale-100 border border-gray-100">
      <div className="p-4 md:p-5 space-y-4 md:space-y-[20px]">
        {/* Stars rating */}
        <div className="flex items-center justify-between">
          <Image
            src="/images/icons/stars.svg"
            alt="5-star rating"
            width={100}
            height={20}
            className="md:w-[120px] md:h-[24px]"
          />
        </div>

        {/* Review content with better typography */}
        <div className="relative">
          <svg
            className="absolute -top-2 -left-1 w-6 h-6 text-[#1e3c63]/20"
            fill="currentColor"
            viewBox="0 0 32 32"
          >
            <path d="M10 8v8c0 2.209-1.791 4-4 4s-4-1.791-4-4 1.791-4 4-4c0.209 0 0.41 0.018 0.609 0.051-0.038-0.33-0.061-0.672-0.061-1.051 0-2.209 1.791-4 4-4s4 1.791 4 4z" />
            <path d="M26 8v8c0 2.209-1.791 4-4 4s-4-1.791-4-4 1.791-4 4-4c0.209 0 0.41 0.018 0.609 0.051-0.038-0.33-0.061-0.672-0.061-1.051 0-2.209 1.791-4 4-4s4 1.791 4 4z" />
          </svg>
          <p className="text-sm md:text-base lg:text-lg leading-6 md:leading-7 lg:leading-8 text-gray-700 pl-4">
            {review.content}
          </p>
        </div>

        {/* Customer info with enhanced mobile layout */}
        <div className="flex items-center space-x-3 pt-2 border-t border-gray-100">
          <div className="relative">
            <div className="h-12 w-12 md:h-[50px] md:w-[50px] overflow-hidden rounded-full ring-2 ring-[#1e3c63]/20">
              <Image
                src={review.avatarUrl}
                alt={review.name}
                width={50}
                height={50}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="flex-1 min-w-0">
            <h4 className="text-sm md:text-base font-semibold text-gray-900 truncate">
              {review.name}
            </h4>
            <p className="text-xs md:text-sm text-gray-600 truncate">
              {review.role}
            </p>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <section className="bg-gradient-to-br from-[#1e3c63] via-[#2a4a73] to-[#1e3c63] relative overflow-hidden">
      {/* Subtle coffee pattern background */}
      <div className="absolute inset-0 opacity-5">
        <div
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.3'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3Ccircle cx='10' cy='10' r='1.5'/%3E%3Ccircle cx='50' cy='10' r='1'/%3E%3Ccircle cx='10' cy='50' r='1'/%3E%3Ccircle cx='50' cy='50' r='1.5'/%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '60px 60px',
            width: '100%',
            height: '100%',
          }}
        />
      </div>

      {/* Floating coffee beans decoration */}
      <div className="absolute top-20 left-10 w-4 h-4 bg-white/10 rounded-full animate-pulse"></div>
      <div className="absolute top-40 right-20 w-3 h-3 bg-white/10 rounded-full animate-pulse delay-1000"></div>
      <div className="absolute bottom-32 left-1/4 w-5 h-5 bg-white/10 rounded-full animate-pulse delay-2000"></div>
      <div className="absolute bottom-20 right-1/3 w-2 h-2 bg-white/10 rounded-full animate-pulse delay-3000"></div>

      <div className="mx-auto mt-12 md:mt-[100px] max-w-[1280px] px-4 sm:px-6 md:px-[75px] py-6 md:py-8 relative z-10">
        {/* Enhanced header section */}
        <div className="text-center mb-8 md:mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full mb-4 border border-white/30">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
                fill="white"
              />
            </svg>
            <span className="text-sm font-medium text-white">
              Customer Reviews
            </span>
          </div>

          <h2 className="text-2xl md:text-[28px] lg:text-3xl font-bold text-white mb-3">
            Apa Kata <span className="text-yellow-200">Pelanggan Kami</span>
          </h2>
          <p className="text-base md:text-lg text-white/80 max-w-2xl mx-auto">
            Bergabunglah dengan ribuan pelanggan yang telah merasakan pengalaman
            kopi terbaik di Cheers Labs
          </p>
        </div>

        {/* Mobile view: Enhanced single column with horizontal scroll for preview */}
        <div className="md:hidden">
          <div className="space-y-4 mb-6">
            {reviews.slice(0, 3).map((review) => (
              <ReviewCard key={review.id} review={review} />
            ))}
          </div>

          {/* Horizontal scroll preview for more reviews */}
          <div className="overflow-x-auto pb-4">
            <div className="flex space-x-4 w-max">
              {reviews.slice(3, 6).map((review) => (
                <div key={review.id} className="w-80 flex-shrink-0">
                  <ReviewCard review={review} />
                </div>
              ))}
            </div>
          </div>

          {/* Mobile CTA */}
          <div className="text-center mt-6">
            <button className="inline-flex items-center gap-2 px-6 py-3 bg-white hover:bg-gray-100 text-[#1e3c63] font-medium rounded-full transition-all duration-300 shadow-lg hover:shadow-xl">
              <span>Lihat Semua Review</span>
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5 12h14m-7-7l7 7-7 7"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Tablet view: Two columns grid */}
        <div className="hidden md:grid lg:hidden grid-cols-2 gap-4 md:gap-[20px]">
          {reviews.slice(0, 6).map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </div>

        {/* Desktop view: Three columns masonry */}
        <div className="hidden lg:block">
          <div className="columns-1 md:columns-2 lg:columns-3 gap-[30px]">
            {reviews.map((review) => (
              <div key={review.id} className="break-inside-avoid">
                <ReviewCard review={review} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
