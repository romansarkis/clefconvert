"use client";

import { useState } from "react";

export default function ImageUpload() {
  const [image, setImage] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  async function handleConvert() {
    if (!image) return;

    setIsLoading(true);

    try {
        const formData = new FormData();
        formData.append("file", image);

        const res = await fetch("/api/convert", {
        method: "POST",
        body: formData,
        });

        const data = await res.json();

        alert(data.message);
    } catch (err) {
        alert("Error converting file");
    }

    setIsLoading(false);
  }

  function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;

    setImage(file);

    const previewURL = URL.createObjectURL(file);
    setPreview(previewURL);
  }

  return (
    <div className="flex flex-col items-center gap-4">
      <label className="cursor-pointer bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
        Upload Sheet Music
        <input
          type="file"
          accept="image/*"
          className="hidden"
          onChange={handleFileChange}
        />
      </label>

      {preview && (
        <div className="mt-4">
          <p className="text-sm text-gray-500 mb-2">Preview:</p>
          <img
            src={preview}
            alt="Preview"
            className="max-w-md rounded-lg shadow"
          />
        </div>
      )}
      {image && (
        <button
            onClick={handleConvert}
            className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700"
            disabled={isLoading}
        >
            {isLoading ? "Converting..." : "Convert to Bass Clef"}
        </button>
      )}
    </div>
  );
}