import Link from 'next/link';

export default function Card({ title, description, link }){
  return (
    <div className="w-2/3 rounded overflow-hidden shadow-lg bg-pink-100 m-4">
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">{description}</p>
      </div>
      <div className="px-6 py-4">
        <Link href={link}>
          <span className="bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded">
            Go to {title}
          </span>
        </Link>
      </div>
    </div>
  );
};
