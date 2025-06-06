import { Link } from "react-router-dom";

function Home() {
  return (
    <div
      className="h-screen w-screen bg-cover bg-center flex flex-col justify-center items-center text-center px-4 pt-20"
      style={{
        backgroundImage:
          "url('https://i.pinimg.com/736x/d0/89/b2/d089b2d0f444b03404577e0cf0457605.jpg')",
      }}
    >
      <div className="bg-white bg-opacity-70 p-8 rounded-lg shadow-lg max-w-xl">
        <h1 className="text-4xl font-bold mb-4 text-green-900">
          "Yesterday is over, Tomorrow is yet to come. Today is yet Unknown."
        </h1>
        <p className="text-lg text-gray-700 mb-6">
          Embrace each day with resilience and peace. The journey to well-being is made one mindful step at a time.
        </p>
        <Link
          to="/journal"
          className="inline-block bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-6 rounded transition duration-300"
        >
          Start Journaling
        </Link>
      </div>
    </div>
  );
}

export default Home;
