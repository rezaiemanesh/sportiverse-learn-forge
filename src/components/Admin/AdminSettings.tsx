
import React, { useState } from 'react';
import { Settings, Globe, Palette, Shield, Database, Mail } from 'lucide-react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';

const AdminSettings = () => {
  const [settings, setSettings] = useState({
    siteName: 'SportiVerse',
    siteDescription: 'Revolutionary Sports Management Education Platform',
    defaultLanguage: 'en',
    allowRegistration: true,
    requireEmailVerification: true,
    maintenanceMode: false,
    theme: 'light'
  });

  const handleSave = () => {
    console.log('Settings saved:', settings);
    // Here you would typically save to your backend
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-4">
        <Settings className="w-6 h-6 text-gray-600" />
        <h2 className="text-2xl font-bold text-gray-800">Settings</h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* General Settings */}
        <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
          <div className="flex items-center space-x-3 mb-6">
            <Globe className="w-6 h-6 text-blue-600" />
            <h3 className="text-xl font-bold text-gray-800">General Settings</h3>
          </div>
          
          <div className="space-y-4">
            <div>
              <Label htmlFor="siteName">Site Name</Label>
              <Input
                id="siteName"
                value={settings.siteName}
                onChange={(e) => setSettings({...settings, siteName: e.target.value})}
                className="mt-1"
              />
            </div>
            
            <div>
              <Label htmlFor="siteDescription">Site Description</Label>
              <Input
                id="siteDescription"
                value={settings.siteDescription}
                onChange={(e) => setSettings({...settings, siteDescription: e.target.value})}
                className="mt-1"
              />
            </div>
            
            <div>
              <Label htmlFor="defaultLanguage">Default Language</Label>
              <select 
                id="defaultLanguage"
                value={settings.defaultLanguage}
                onChange={(e) => setSettings({...settings, defaultLanguage: e.target.value})}
                className="mt-1 w-full p-2 border border-gray-300 rounded-md"
              >
                <option value="en">English</option>
                <option value="fa">Persian</option>
                <option value="es">Spanish</option>
                <option value="fr">French</option>
              </select>
            </div>
          </div>
        </div>

        {/* Theme Settings */}
        <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
          <div className="flex items-center space-x-3 mb-6">
            <Palette className="w-6 h-6 text-purple-600" />
            <h3 className="text-xl font-bold text-gray-800">Theme & Appearance</h3>
          </div>
          
          <div className="space-y-4">
            <div>
              <Label>Color Theme</Label>
              <div className="grid grid-cols-3 gap-3 mt-2">
                {['light', 'dark', 'auto'].map((theme) => (
                  <button
                    key={theme}
                    onClick={() => setSettings({...settings, theme})}
                    className={`p-3 rounded-xl border-2 capitalize transition-all ${
                      settings.theme === theme 
                        ? 'border-blue-500 bg-blue-50' 
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    {theme}
                  </button>
                ))}
              </div>
            </div>
            
            <div className="space-y-3">
              <h4 className="font-medium text-gray-700">Quick Actions</h4>
              <div className="grid grid-cols-2 gap-3">
                <Button variant="outline" size="sm">Upload Logo</Button>
                <Button variant="outline" size="sm">Upload Favicon</Button>
                <Button variant="outline" size="sm">Custom CSS</Button>
                <Button variant="outline" size="sm">Font Settings</Button>
              </div>
            </div>
          </div>
        </div>

        {/* Security Settings */}
        <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
          <div className="flex items-center space-x-3 mb-6">
            <Shield className="w-6 h-6 text-red-600" />
            <h3 className="text-xl font-bold text-gray-800">Security & Access</h3>
          </div>
          
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <Label>Allow New Registrations</Label>
                <p className="text-sm text-gray-500">Users can create new accounts</p>
              </div>
              <button
                onClick={() => setSettings({...settings, allowRegistration: !settings.allowRegistration})}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  settings.allowRegistration ? 'bg-blue-600' : 'bg-gray-200'
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    settings.allowRegistration ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
            </div>
            
            <div className="flex items-center justify-between">
              <div>
                <Label>Email Verification Required</Label>
                <p className="text-sm text-gray-500">New users must verify email</p>
              </div>
              <button
                onClick={() => setSettings({...settings, requireEmailVerification: !settings.requireEmailVerification})}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  settings.requireEmailVerification ? 'bg-blue-600' : 'bg-gray-200'
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    settings.requireEmailVerification ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
            </div>
            
            <div className="flex items-center justify-between">
              <div>
                <Label>Maintenance Mode</Label>
                <p className="text-sm text-gray-500">Site temporarily unavailable</p>
              </div>
              <button
                onClick={() => setSettings({...settings, maintenanceMode: !settings.maintenanceMode})}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  settings.maintenanceMode ? 'bg-red-600' : 'bg-gray-200'
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    settings.maintenanceMode ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
            </div>
          </div>
        </div>

        {/* Email Settings */}
        <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
          <div className="flex items-center space-x-3 mb-6">
            <Mail className="w-6 h-6 text-green-600" />
            <h3 className="text-xl font-bold text-gray-800">Email Configuration</h3>
          </div>
          
          <div className="space-y-4">
            <div>
              <Label htmlFor="smtpHost">SMTP Host</Label>
              <Input id="smtpHost" placeholder="smtp.gmail.com" className="mt-1" />
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="smtpPort">Port</Label>
                <Input id="smtpPort" placeholder="587" className="mt-1" />
              </div>
              <div>
                <Label htmlFor="smtpSecurity">Security</Label>
                <select className="mt-1 w-full p-2 border border-gray-300 rounded-md">
                  <option value="tls">TLS</option>
                  <option value="ssl">SSL</option>
                  <option value="none">None</option>
                </select>
              </div>
            </div>
            
            <div>
              <Label htmlFor="emailFrom">From Email</Label>
              <Input id="emailFrom" placeholder="noreply@sportiverse.com" className="mt-1" />
            </div>
            
            <Button variant="outline" className="w-full">
              Test Email Configuration
            </Button>
          </div>
        </div>
      </div>

      {/* Save Button */}
      <div className="flex justify-end">
        <Button 
          onClick={handleSave}
          className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-8"
        >
          Save All Settings
        </Button>
      </div>
    </div>
  );
};

export default AdminSettings;
