"use client";

import Link from 'next/link';
import type { Book } from '@/app/page';

const BookCard = ({ book }: { book: Book }) => {
  const handleSelectClick = (e: React.MouseEvent) => {
    e.preventDefault(); // Stop the link navigation
    e.stopPropagation(); // Stop the event from bubbling up
    // Add any 'select' specific logic here in the future
    console.log(`'${book.title}' 선택됨 (페이지 이동 없음)`);
  };

  return (
    <Link href={`/book/${book.id}`} className="block bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
      <div className="flex gap-6 items-start w-full">
        <div className="w-24 h-36 bg-gray-200 rounded flex-shrink-0"></div>
        <div className="flex flex-col flex-grow">
          <h3 className="text-lg font-bold mb-1">{book.title}</h3>
          <p className="text-sm text-gray-500 mb-3">{book.author} | 출판 {book.publisher}</p>
          <p className="text-sm text-gray-700 leading-relaxed line-clamp-3">{book.description}</p>
        </div>
        <div className="flex flex-col gap-2 w-28 flex-shrink-0">
          <button 
            onClick={handleSelectClick}
            className="w-full bg-stone-300 text-black py-2 rounded-md hover:bg-stone-400 transition-colors text-sm z-10 relative"
          >
            선택하기
          </button>
          <div className="w-full bg-white border border-stone-300 text-stone-600 py-2 rounded-md text-sm text-center">
            상세보기
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BookCard;
