import React, { useState } from 'react';
import { User, Settings, LogOut, CreditCard as Edit3, Save, X } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { useUserData } from '../hooks/useUserData';

export default function UserProfile() {
  const { user, signOut } = useAuth();
  const { profile, updateProfile } = useUserData();
  const [isEditing, setIsEditing] = useState(false);
  const [editData, setEditData] = useState({
    targetScore: profile?.targetScore || 65,
    dailyHours: profile?.dailyHours || 2,
    currentLevel: profile?.currentLevel || 'intermediate'
  });

  const handleSave = async () => {
    await updateProfile(editData);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditData({
      targetScore: profile?.targetScore || 65,
      dailyHours: profile?.dailyHours || 2,
      currentLevel: profile?.currentLevel || 'intermediate'
    });
    setIsEditing(false);
  };

  if (!user || !profile) return null;

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-bold text-gray-900 flex items-center">
          <User className="h-5 w-5 text-indigo-600 mr-2" />
          Profile Settings
        </h3>
        <div className="flex space-x-2">
          {!isEditing ? (
            <button
              onClick={() => setIsEditing(true)}
              className="p-2 text-gray-600 hover:text-indigo-600 transition-colors"
            >
              <Edit3 className="h-4 w-4" />
            </button>
          ) : (
            <div className="flex space-x-2">
              <button
                onClick={handleSave}
                className="p-2 text-green-600 hover:text-green-700 transition-colors"
              >
                <Save className="h-4 w-4" />
              </button>
              <button
                onClick={handleCancel}
                className="p-2 text-gray-600 hover:text-red-600 transition-colors"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          )}
        </div>
      </div>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Email
          </label>
          <div className="text-gray-900 bg-gray-50 px-3 py-2 rounded-lg">
            {user.email}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Target Score
          </label>
          {isEditing ? (
            <select
              value={editData.targetScore}
              onChange={(e) => setEditData({ ...editData, targetScore: parseInt(e.target.value) })}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            >
              <option value={65}>65+ (Good Score)</option>
              <option value={70}>70+ (High Score)</option>
              <option value={75}>75+ (Excellent)</option>
              <option value={80}>80+ (Outstanding)</option>
            </select>
          ) : (
            <div className="text-gray-900 bg-gray-50 px-3 py-2 rounded-lg">
              {profile.targetScore}+
            </div>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Daily Study Hours
          </label>
          {isEditing ? (
            <select
              value={editData.dailyHours}
              onChange={(e) => setEditData({ ...editData, dailyHours: parseInt(e.target.value) })}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            >
              <option value={1}>1 Hour</option>
              <option value={2}>2 Hours</option>
              <option value={3}>3 Hours</option>
              <option value={4}>4+ Hours</option>
            </select>
          ) : (
            <div className="text-gray-900 bg-gray-50 px-3 py-2 rounded-lg">
              {profile.dailyHours} hours
            </div>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Current Level
          </label>
          {isEditing ? (
            <select
              value={editData.currentLevel}
              onChange={(e) => setEditData({ ...editData, currentLevel: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            >
              <option value="beginner">Beginner</option>
              <option value="intermediate">Intermediate</option>
              <option value="advanced">Advanced</option>
            </select>
          ) : (
            <div className="text-gray-900 bg-gray-50 px-3 py-2 rounded-lg capitalize">
              {profile.currentLevel}
            </div>
          )}
        </div>

        <div className="pt-4 border-t border-gray-200">
          <button
            onClick={signOut}
            className="flex items-center space-x-2 text-red-600 hover:text-red-700 transition-colors"
          >
            <LogOut className="h-4 w-4" />
            <span>Sign Out</span>
          </button>
        </div>
      </div>
    </div>
  );
}