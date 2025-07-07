import Image from "next/image";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen">
      {/* Left side - image */}
      <div className="w-1/2 relative hidden md:block"></div>

      {/* Right side - form */}
      <div className="w-full md:w-1/2">{children}</div>
    </div>
  );
}
