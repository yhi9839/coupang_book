

export default function BookDetailPage({ params }: { params: { id: string } }) {
  return (
    <div>
      <h1>Book ID: {params.id}</h1>
    </div>
  );
}
