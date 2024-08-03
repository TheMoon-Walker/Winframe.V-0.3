import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div
      id="error-page"
      className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-900"
    >
      <h1 className="text-4xl font-bold text-red-600">Oops!</h1>
      <p className="mt-4 text-1xl">Sorry, an unexpected error has occurred.</p>
      <p className="mt-2 text-lg text-gray-700">
        <i>{error.statusText || error.message}</i>
      </p>
      <button
        className="mt-6 px-4 py-2  bg-sky-600 text-white rounded hover:bg-blue-700 focus:outline-none"
        onClick={() => window.location.href = "/"}
      >
        Go to Home
      </button>
    </div>
  );
}
