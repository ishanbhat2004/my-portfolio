import Header from "./components/Header";
import Education from "./components/Education";
import Experience from "./components/Experience";

export default function Home() {
  return (
    <>
      <div className="min-h-screen flex flex-col">
        <Header />
        <div className="flex-1 flex items-center justify-center text-center font-silkscreen text-3xl">
          <p>Get to Know My Story</p>
        </div>
      </div>
      <Education />
      <Experience />
    </>
  )
}