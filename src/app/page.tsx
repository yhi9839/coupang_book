import Link from 'next/link';

// A temporary component to render icons. Will be replaced with actual SVG icons later.
const Icon = ({ name, className }: { name: string; className?: string }) => (
  <div className={`w-6 h-6 flex items-center justify-center ${className}`}>
    {/* Placeholder for actual icon */}
    <span>{name.charAt(0)}</span>
  </div>
);

// Mock data for book list
export type Book = {
  id: number;
  title: string;
  author: string;
  publisher: string;
  description: string;
  imageUrl: string;
};

const books: Book[] = [
  {
    id: 1,
    title: "넥서스",
    author: "유발 하라리",
    publisher: "김영사",
    description: "로벌 베스트셀러 《사피엔스》 《호모 데우스》 《21세기를 위한 21가지 제언》으로 우리 시대 가장 중요한 사상가의 반열에 오른 유발 하라리 교수가 압도적 통찰로 AI 혁명의 의미와 본질을 꿰뚫어 보고 인류에게 남은 기회를 냉철하게 성찰하는 신작으로 돌아왔다.",
    imageUrl: "", // Placeholder for image
  },
  {
    id: 2,
    title: "트렌드 코리아 2025",
    author: "김난도",
    publisher: "미래의창",
    description: "2025년 대한민국 소비 트렌드를 전망하는 책. 새로운 기술과 사회 변화 속에서 나타나는 소비자의 욕망과 행동을 분석하고, 기업과 개인에게 필요한 전략을 제시한다.",
    imageUrl: "",
  },
  {
    id: 3,
    title: "불변의 법칙",
    author: "모건 하우절",
    publisher: "서삼독",
    description: "시대를 초월하여 변하지 않는 인간의 행동과 심리에 대한 통찰을 담은 책. 투자의 세계에서 반복되는 패턴을 통해 성공적인 의사결정의 원리를 탐구한다.",
    imageUrl: "",
  },
];

import BookCard from '@/components/BookCard';


export default function ChaekmoHome() {
  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="w-64 bg-[#F0F7F4] p-6 flex flex-col justify-between">
        <div>
          <div className="flex items-center gap-3 mb-10">
            <div className="w-10 h-10 bg-green-200 rounded-full flex items-center justify-center font-bold text-lg">책</div>
            <span className="text-2xl font-bold">책모</span>
          </div>
          <nav className="flex flex-col gap-4">
            <a href="#" className="flex items-center gap-3 p-2 rounded-md hover:bg-green-200">
              <Icon name="Home" />
              <span>홈</span>
            </a>
            <a href="#" className="flex items-center gap-3 p-2 rounded-md hover:bg-green-200">
              <Icon name="BookClub" />
              <span>독서 모임</span>
            </a>
            <a href="#" className="flex items-center gap-3 p-2 rounded-md bg-green-200 font-bold text-green-800">
              <Icon name="Search" />
              <span>책 검색하기</span>
            </a>
            <div className="pl-8 flex flex-col gap-2 text-sm">
              <a href="#" className="p-1 rounded-md hover:bg-green-200">통합검색</a>
              <a href="#" className="p-1 rounded-md hover:bg-green-200">국내도서</a>
              <a href="#" className="p-1 rounded-md hover:bg-green-200">전자책</a>
            </div>
            <a href="#" className="flex items-center gap-3 p-2 rounded-md hover:bg-green-200">
              <Icon name="Story" />
              <span>책 이야기</span>
            </a>
            <a href="#" className="flex items-center gap-3 p-2 rounded-md hover:bg-green-200">
              <Icon name="MyPage" />
              <span>마이페이지</span>
            </a>
          </nav>
        </div>
        <div className="flex flex-col gap-4">
            <a href="#" className="flex items-center gap-3 p-2 rounded-md hover:bg-green-200">
              <Icon name="Settings" />
              <span>환경설정</span>
            </a>
            <div className="bg-green-100 p-4 rounded-lg text-center">
                <p className="text-sm mb-2">책모에 처음 오셨나요?</p>
                <button className="bg-stone-300 text-sm text-black px-4 py-1 rounded-md hover:bg-stone-400">알아보기</button>
            </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-10">
        <header className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">통합 검색</h1>
          <div className="flex items-center gap-4">
            <Icon name="Notification" className="cursor-pointer"/>
            <div className="flex items-center gap-2 cursor-pointer">
                <div className="w-8 h-8 rounded-full bg-gray-300"></div>
                <div>
                    <p className="font-semibold">hy_0716</p>
                    <p className="text-xs text-gray-500">책을 아는가? 나는 모른다</p>
                </div>
            </div>
          </div>
        </header>

        <div className="mb-8">
          <div className="relative">
            <input
              type="text"
              placeholder="검색하기 (도서명, 작가)"
              className="w-full p-4 pl-12 border rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
            />
            <div className="absolute inset-y-0 left-0 flex items-center pl-4 text-gray-500">
                <Icon name="Search" />
            </div>
          </div>
        </div>

        <div className="space-y-6">
          {books.map(book => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      </main>
    </div>
  );
}
