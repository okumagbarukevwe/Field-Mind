'use client';

export default function Verified() {
  return (
    <main className="min-h-screen bg-gray-950 text-white flex items-center justify-center px-6">
      <div className="w-full max-w-sm text-center">
        <div className="flex items-center gap-3 mb-8 justify-center">
          <div className="w-10 h-10 bg-green-500 rounded-xl flex items-center justify-center text-black font-bold text-lg">
            F
          </div>
          <div>
            <h1 className="text-xl font-bold text-white">FieldMind</h1>
          </div>
        </div>

        <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8">
          <div className="w-16 h-16 bg-green-950 border border-green-800 rounded-2xl flex items-center justify-center mx-auto mb-4 text-4xl">
            ✓
          </div>
          <h2 className="text-xl font-bold text-green-400 mb-3">Email Verified!</h2>
          <p className="text-gray-400 text-sm mb-6">
            Your account has been activated successfully. Please close this tab and log in again.
          </p>
          
            <a href="/login"
            className="w-full bg-green-500 hover:bg-green-400 text-black font-semibold py-3 px-6 rounded-xl transition text-sm inline-block"
          >
            Go to Login
          </a>
        </div>
      </div>
    </main>
  );
}