import { useNotification } from '../context/NotificationContext';

export default function HomePage() {
    const { message, showNotification } = useNotification();

    return (
        <div className="flex flex-col items-center justify-center h-screen text-center">
            <h1 className="text-3xl font-bold underline text-red-500">
                Hello World!
            </h1>
            <h2 className="text-xl mt-2">Saya Fadiel Muhammad</h2>
            <button
                onClick={() => showNotification("Halo, saya Fadiel Muhammad")}
                className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
            >
                Click
            </button>

            {message && (
                <div className="mt-4 p-2 bg-green-200 text-green-800 rounded">
                    {message}
                </div>
            )}
        </div>
    );
}
