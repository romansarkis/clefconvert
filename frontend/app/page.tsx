import ImageUpload from "./components/ImageUpload";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-6">
      <h1 className="text-3xl font-bold mb-6">
        🎼 Sheet Music Clef Converter
      </h1>

      <ImageUpload />
    </main>
  );
}