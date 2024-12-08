import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";

export default function MobileNavbar() {
  return (
    <div className="flex justify-between items-center px-6 py-4 bg-white shadow-md sticky top-0 z-50 md:hidden">
      {/* Logo */}
      <div className="text-2xl font-bold">MyLogo</div>

      {/* Sheet for Mobile Menu */}
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline">Menu</Button>
        </SheetTrigger>
        <SheetContent side="right" className="w-[250px]">
          <SheetHeader>
            <SheetTitle>Menu</SheetTitle>
          </SheetHeader>
          <div className="flex flex-col space-y-4 mt-4">
            <a href="#home" className="text-lg font-medium hover:underline">Home</a>
            <a href="#about" className="text-lg font-medium hover:underline">About</a>
            <a href="#products" className="text-lg font-medium hover:underline">Products</a>
            <a href="#contact" className="text-lg font-medium hover:underline">Contact</a>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}