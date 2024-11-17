interface TextSegment {
  type: 'text' | 'link' | 'linebreak';
  content: string;
  url?: string;
  id: string;
}

export const parseText = (text: string): TextSegment[] => {
  const segments: TextSegment[] = [];
  let segmentId = 0;
  
  // Split text by newlines first
  const lines = text.split('\n');
  
  lines.forEach((line, lineIndex) => {
    if (lineIndex > 0) {
      segments.push({ 
        type: 'linebreak', 
        content: '', 
        id: `br-${segmentId++}` 
      });
    }

    let remainingText = line;
    while (remainingText) {
      const linkMatch = remainingText.match(/\[([^\]]+)\]\(([^)]+)\)/);
      
      if (!linkMatch) {
        if (remainingText.trim()) {
          segments.push({ 
            type: 'text', 
            content: remainingText,
            id: `text-${segmentId++}`
          });
        }
        break;
      }

      const [fullMatch, linkText, url] = linkMatch;
      const textBeforeLink = remainingText.slice(0, linkMatch.index);
      
      if (textBeforeLink.trim()) {
        segments.push({ 
          type: 'text', 
          content: textBeforeLink,
          id: `text-${segmentId++}`
        });
      }
      
      segments.push({ 
        type: 'link', 
        content: linkText, 
        url,
        id: `link-${segmentId++}`
      });

      remainingText = remainingText.slice(
        (linkMatch.index || 0) + fullMatch.length
      );
    }
  });

  return segments;
}; 