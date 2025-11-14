import React, { useCallback, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

type CodeProps = {
  inline?: boolean;
  className?: string;
  children?: React.ReactNode;
};

const copyToClipboard = async (text: string) => {
  try {
    await navigator.clipboard.writeText(text);
  } catch {
    // fallback for older browsers
    const textarea = document.createElement('textarea');
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
  }
};

const CodeBlock: React.FC<CodeProps> = ({ inline, className, children }) => {
  const code = String(children ?? '');
  const language = /language-(\w+)/.exec(className || '')?.[1] ?? '';

  // 🆕 Copy feedback state
  const [copied, setCopied] = useState(false);

  const handleCopy = useCallback(() => {
    copyToClipboard(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  }, [code]);

  if (inline) {
    return <code className="code-inline">{children}</code>;
  }

  return (
    <div className="codeblock-wrap">
      <div className="codeblock-toolbar">
        <span className="codeblock-lang">{language || 'text'}</span>
        <button
          className={`btn copy-btn ${copied ? 'copied' : ''}`}
          onClick={handleCopy}
          aria-label="Copy code"
        >
          {copied ? 'Copied!' : 'Copy'}
        </button>
      </div>
      <pre className={`codeblock-pre ${className || ''}`} tabIndex={0}>
        <code>{code}</code>
      </pre>
    </div>
  );
};

interface MarkdownPageProps {
  markdown: string;
}

export const MarkdownPage: React.FC<MarkdownPageProps> = ({ markdown }) => {
  return (
    <article className="markdown-body">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          code: CodeBlock,
          img: ({ node, ...props }) => (
            <img {...props} loading="lazy" decoding="async" style={{ maxWidth: '100%' }} />
          ),
          a: ({ node, ...props }) => (
            <a {...props} target="_blank" rel="noopener noreferrer" />
          ),
        }}
      >
        {markdown}
      </ReactMarkdown>
    </article>
  );
};
