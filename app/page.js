import Link from 'next/link';

const HomePage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-purple-200">
      <div className="p-8 bg-white rounded-md shadow-md text-center">
        <h1 className="text-4xl font-bold mb-4 text-purple-800">
          Welcome to Women's Day Celebration
        </h1>
        <p className="text-gray-600 mb-8">
          Choose your gender to receive a special Women's Day message!
        </p>
        <div className="flex justify-center space-x-4">
          <Link to="/male">
            <p className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600 transition duration-300">
              Male
            </p>
          </Link>
          <Link to="/female">
            <p className="bg-pink-500 text-white px-6 py-3 rounded-md hover:bg-pink-600 transition duration-300">
              Female
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
