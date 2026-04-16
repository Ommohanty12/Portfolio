import React, { useEffect, useState } from "react";
import { Trash2 } from "lucide-react";

const API_URL = "https://portfolio-1-ekza.onrender.com"; // ✅ your backend

const Messages = () => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [auth, setAuth] = useState(false);
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    if (password === "nextnewsinger1234??") {
      setAuth(true);
    } else {
      alert("Incorrect password!");
    }
  };

  // ✅ FETCH MESSAGES
  const fetchMessages = async () => {
    try {
      const res = await fetch(`${API_URL}/message`);
      const data = await res.json();

      if (data.success) {
        setMessages(data.data);
      }
    } catch (error) {
      console.error("Error fetching messages:", error);
    } finally {
      setLoading(false);
    }
  };

  // ✅ DELETE MESSAGE
  const handleDelete = async (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this message?");
    if (!confirmDelete) return;

    try {
      const res = await fetch(`${API_URL}/message/${id}`, {
        method: "DELETE",
      });

      const data = await res.json();

      if (data.success) {
        setMessages(messages.filter((msg) => msg._id !== id));
      } else {
        alert("Failed to delete message");
      }
    } catch (error) {
      console.error("Error deleting message:", error);
    }
  };

  useEffect(() => {
    if (auth) {
      fetchMessages();
    }
  }, [auth]);

  if (!auth) {
    return (
      <div className="min-h-[80vh] flex items-center justify-center p-4">
        <form
          onSubmit={handleLogin}
          className="glass p-8 rounded-2xl w-full max-w-sm flex flex-col gap-4"
        >
          <h2 className="text-2xl font-bold text-white text-center">
            Admin Access
          </h2>

          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter password"
            className="w-full bg-dark/50 border border-white/10 rounded-xl px-4 py-3 text-white"
          />

          <button
            type="submit"
            className="w-full py-3 bg-primary text-white rounded-xl font-medium"
          >
            Login
          </button>
        </form>
      </div>
    );
  }

  return (
    <div className="min-h-[80vh] text-white py-12 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">
          Messages Dashboard
        </h1>

        {loading ? (
          <p className="text-center">Loading...</p>
        ) : messages.length === 0 ? (
          <p className="text-center text-gray-400">No messages yet</p>
        ) : (
          <div className="grid gap-6">
            {messages.map((msg) => (
              <div
                key={msg._id}
                className="p-6 border border-white/10 rounded-2xl relative"
              >
                <div className="flex justify-between items-start pr-8">
                  <div>
                    <h2 className="text-xl font-semibold">{msg.name}</h2>
                    <a
                      href={`mailto:${msg.email}`}
                      className="text-blue-400 text-sm"
                    >
                      {msg.email}
                    </a>
                  </div>

                  <button
                    onClick={() => handleDelete(msg._id)}
                    className="absolute top-4 right-4 text-gray-400 hover:text-red-500"
                  >
                    <Trash2 size={20} />
                  </button>
                </div>

                <p className="mt-4 text-gray-300 bg-black/20 p-4 rounded">
                  {msg.message}
                </p>

                <p className="text-xs text-gray-500 mt-4">
                  {new Date(msg.createdAt).toLocaleString()}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Messages;