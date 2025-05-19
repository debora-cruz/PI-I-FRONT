"use client"

import { useState } from "react";

interface UploadDocumentProps {
  label: string;
}

export default function UploadDocument({ label }: UploadDocumentProps) {
  const [fileName, setFileName] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFileName(file.name);
    }
  };

  return (
    <div className="bg-gray-700 rounded-lg p-4 flex flex-col justify-between items-center text-center min-h-[130px]">
      <span className="text-white font-medium mb-2">{label}</span>

      <label className="bg-blue-600 text-white px-4 py-1 rounded cursor-pointer hover:bg-blue-500 transition-all">
        Selecionar
        <input
          type="file"
          onChange={handleFileChange}
          className="hidden"
        />
      </label>

      {fileName && (
        <p className="mt-2 text-sm text-gray-300 truncate w-full">{fileName}</p>
      )}
    </div>
  );
}
