import { Button } from '@/components/ui/button';

export default function Welcome() {
  return (
    <div className="bg-[#6B8E23] min-h-screen flex flex-col items-center justify-center text-white">
      <h1 className="text-6xl font-bold mb-2">Leaf-it</h1>
      <p className="text-xl mb-8">Fertilizer, Coffee, and Organic Products</p>
      <Button className="bg-white text-[#6B8E23]">Discover More</Button>
    </div>
  );
}
