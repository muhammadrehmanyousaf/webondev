"use client";

import React from "react";
import { Button } from "./button";
import { Share2 } from "lucide-react";

interface ShareButtonsProps {
  url: string;
  title: string;
}

const ShareButtons: React.FC<ShareButtonsProps> = ({ url, title }) => {
  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(url);
    } catch {
      // no-op: clipboard may be unavailable; ignore silently
    }
  };

  return (
    <div className="flex gap-2">
      <Button size="sm" asChild variant="outline" className="flex items-center gap-2">
        <a
          href={`https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Share on X (Twitter)"
        >
          <Share2 className="w-4 h-4" /> X
        </a>
      </Button>
      <Button size="sm" asChild variant="outline" className="flex items-center gap-2">
        <a
          href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Share on LinkedIn"
        >
          <Share2 className="w-4 h-4" /> LinkedIn
        </a>
      </Button>
      <Button size="sm" variant="outline" className="flex items-center gap-2" onClick={copyToClipboard} aria-label="Copy link">
        <Share2 className="w-4 h-4" /> Copy Link
      </Button>
    </div>
  );
};

export default ShareButtons;


