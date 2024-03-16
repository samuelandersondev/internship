import Image from "next/image";

export default function Home() {
  return (
    <main>
      <header>
        <div className="flex items-center">
          <span className="text-16px m-0 p-0">Market</span>
          <img src="logo.svg" alt="site logo" className="w-4 h-4 m-0 p-0 object-cover" />
          <span className="text-16px m-0 p-0">Monkeys</span>
        </div>
      </header>
    </main>
  );
}
