

import Link from 'next/link';

// Temporary icon component
const Icon = ({ name, className }: { name: string; className?: string }) => (
  <div className={`w-6 h-6 flex items-center justify-center ${className}`}>
    <span>{name.charAt(0)}</span>
  </div>
);

// Mock data fetching function
const getBookDetails = async (id: string) => {
  // In a real app, you would fetch this from a database or API
  return {
    id: parseInt(id),
    title: "넥서스",
    author: "유발 하라리",
    translator: "김명주 옮김",
    publisher: "김영사",
    publishDate: "2024.10.11",
    imageUrl: "", // Placeholder
    purchaseUrl: "https://www.coupang.com/", // Example purchase URL
    summary: [
        '“사피엔스』 『호모 데우스』 유발 하라리 6년 만의 신작',
        '출간 즉시 〈뉴욕타임스〉 〈선데이타임스〉 아마존 베스트셀러',
    ],
    description: [
      '비인간 지능의 위협과 우리의 미래에 대한 경고',
      '“AI는 우리 종의 역사뿐만 아니라',
      '모든 생명체의 진화 경로를 바꿀지도 모른다.”',
      '글로벌 베스트셀러 『사피엔스』 『호모 데우스』 『21세기를 위한 21가지 제언』으로 우리 시대 가장 중요한 사상가의 반열에 오른 유발 하라리 교수가 압도적 통찰로 AI 혁명의 의미와 본질을 꿰뚫어 보고 인류에게 남은 기회를 냉철하게 성찰하는 신작으로 돌아왔다. 생태적 붕괴와 국제정치적 긴장에 이어 인구구조적 변화까지, 인간 본성의 어떤 부분이 우리를 자기 파괴의 길로 내모는 것일까? AI는 이전 정보 기술과 무엇이 다르고, 왜 위협일까? 멸종을 향해 달려가는 가장 영리한 동물, 우리 사피엔스는 생존과 번영의 길을 찾을 수 있을까?',
      '상아탑 속 자신의 방에만 안주하지 않고 정치학, 종교학, 매체학, 진화생물학, 컴퓨터과학 등 다양한 학제 간 지식을 습득해온 하라리 교수의 독창적인 역사적 시각과 스토리텔링은 인류를 위한 중요한 선택의 순간에 빛을 발한다. 『사피엔스』에서 우리는 하라리 교수의 독창적인 현실주의적 해법을 만난다. 비인간 지능이 우리의 존재를 위협하는 현재, 우리는 실수할 여유가 없다.',
    ],
  };
};

export default async function BookDetailPage({ params }: { params: { id: string } }) {
  const book = await getBookDetails(params.id);

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar - This would ideally be a reusable layout component */}
      <aside className="w-64 bg-[#F0F7F4] p-6 flex flex-col justify-between flex-shrink-0">
        <div>
          <div className="flex items-center gap-3 mb-10">
            <div className="w-10 h-10 bg-green-200 rounded-full flex items-center justify-center font-bold text-lg">책</div>
            <span className="text-2xl font-bold">책모</span>
          </div>
          <nav className="flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-3 p-2 rounded-md hover:bg-green-200">
              <Icon name="Home" />
              <span>홈</span>
            </Link>
            <div className="flex items-center gap-3 p-2 rounded-md text-gray-400 cursor-not-allowed">
              <Icon name="BookClub" />
              <span>독서 모임</span>
            </div>
            <Link href="/" className="flex items-center gap-3 p-2 rounded-md bg-green-200 font-bold text-green-800">
              <Icon name="Search" />
              <span>책 검색하기</span>
            </Link>
             <div className="pl-8 flex flex-col gap-2 text-sm">
              <Link href="/" className="p-1 rounded-md hover:bg-green-200">통합검색</Link>
              <div className="p-1 rounded-md text-gray-400 cursor-not-allowed">국내도서</div>
              <div className="p-1 rounded-md text-gray-400 cursor-not-allowed">전자책</div>
            </div>
            <div className="flex items-center gap-3 p-2 rounded-md text-gray-400 cursor-not-allowed">
              <Icon name="Story" />
              <span>책 이야기</span>
            </div>
            <div className="flex items-center gap-3 p-2 rounded-md text-gray-400 cursor-not-allowed">
              <Icon name="MyPage" />
              <span>마이페이지</span>
            </div>
          </nav>
        </div>
        <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3 p-2 rounded-md text-gray-400 cursor-not-allowed">
              <Icon name="Settings" />
              <span>환경설정</span>
            </div>
            <div className="bg-green-100 p-4 rounded-lg text-center">
                <p className="text-sm mb-2">책모에 처음 오셨나요?</p>
                <button className="bg-stone-300 text-sm text-black px-4 py-1 rounded-md hover:bg-stone-400">알아보기</button>
            </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-10">
        <header className="flex justify-between items-center mb-8">
            <Link href="/" className="flex items-center gap-2 text-xl font-bold text-gray-600 hover:text-black">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
                통합 검색
            </Link>
        </header>

        <div className="mb-8">
          <div className="relative">
            <input
              type="text"
              defaultValue={`넥서스`}
              className="w-full p-4 pl-12 border rounded-lg bg-gray-100 focus:ring-2 focus:ring-green-500 focus:outline-none"
            />
            <div className="absolute inset-y-0 left-0 flex items-center pl-4 text-gray-500">
                <Icon name="Search" />
            </div>
          </div>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="flex gap-8 items-start">
                <div className="w-48 h-64 bg-gray-200 rounded flex-shrink-0"></div>
                <div className="flex-grow">
                    <h1 className="text-3xl font-bold mb-2">{book.title}</h1>
                    <p className="text-md text-gray-500 mb-6">{book.author} | {book.translator} | 출판 {book.publisher} | {book.publishDate}</p>
                    
                    <div className="space-y-4 text-gray-800">
                        {book.summary.map((line, index) => (
                            <p key={index} className="font-semibold text-lg">{line}</p>
                        ))}
                        {book.description.map((paragraph, index) => (
                            <p key={index} className="text-base leading-relaxed">{paragraph}</p>
                        ))}
                    </div>
                </div>
            </div>
            <div className="mt-8 pt-6 border-t flex flex-col items-center gap-4">
                <a href={book.purchaseUrl} target="_blank" rel="noopener noreferrer" className="bg-yellow-400 text-black font-bold py-3 px-8 rounded-lg hover:bg-yellow-500 transition-colors">
                    책 구매하기
                </a>
                <button className="bg-gray-200 text-gray-800 py-2 px-6 rounded-lg hover:bg-gray-300 transition-colors">
                    책 이야기
                </button>
            </div>
        </div>
      </main>
    </div>
  );
}
