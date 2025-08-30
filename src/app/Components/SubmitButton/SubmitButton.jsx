
"use client"

import { useFormStatus } from "react-dom"

export default function SubmitButton() {
  const { pending } = useFormStatus()

  return (
    <button
      type="submit"
      disabled={pending}
      className={`w-full py-3 rounded-xl font-semibold text-lg text-black transition-all duration-300 ${
        pending
          ? "bg-gray-600 cursor-not-allowed"
          : "bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 hover:from-cyan-300 hover:via-purple-300 hover:to-pink-300 shadow-[0_0_20px_rgba(0,255,255,0.6)]"
      }`}
    >
      {pending ? "Submitting..." : "Submit 🚀"}
    </button>
  )
}
