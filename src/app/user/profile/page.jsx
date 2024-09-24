"use client"
import { useGetUserQuery } from "@/lib/services/auth";
import { useEffect, useState } from "react";
const Profile = () => {
  const [user, setUser] = useState({})
  const { data, isSuccess } = useGetUserQuery()
  useEffect(() => {
    if (data && isSuccess) {
      setUser(data.user)
    }
  }, [data, isSuccess])
  return (
    <div className="flex items-center justify-center h-screen bg-cyan-800 text-white">
      <div className="w-full max-w-md p-8 bg-cyan-800 rounded-xl shadow-xl shadow-slate-950">
        <h2 className="text-2xl font-bold mb-6 text-center">User Profile</h2>
        <div className="mb-4">
          <label className="block font-medium mb-2">Name: {user.name}</label>
        </div>
        <div className="mb-4">
          <label className="block font-medium mb-2">Email: {user.email}</label>
        </div>
        <div className="mb-4">
          <label className="block font-medium mb-2">Verified: {user.is_verified && "Yes"}</label>
        </div>
      </div>
    </div>
  );
}

export default Profile