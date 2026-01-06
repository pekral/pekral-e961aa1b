import { ReactNode } from 'react';

interface TerminalProps {
  title?: string;
  children: ReactNode;
  className?: string;
}

export const Terminal = ({ title = "petr@dev:~", children, className = "" }: TerminalProps) => {
  return (
    <div className={`terminal-window ${className}`}>
      <div className="terminal-header">
        <div className="flex gap-2">
          <div className="terminal-dot-red" />
          <div className="terminal-dot-yellow" />
          <div className="terminal-dot-green" />
        </div>
        <span className="text-xs text-muted-foreground font-mono ml-2">{title}</span>
      </div>
      <div className="terminal-content">
        {children}
      </div>
    </div>
  );
};

interface TerminalLineProps {
  prompt?: string;
  command?: string;
  output?: ReactNode;
}

export const TerminalLine = ({ prompt = "$", command, output }: TerminalLineProps) => {
  return (
    <div className="mb-4 last:mb-0">
      {command && (
        <div className="flex items-center gap-2">
          <span className="terminal-prompt">{prompt}</span>
          <span className="terminal-command">{command}</span>
        </div>
      )}
      {output && <div className="terminal-output ml-4 mt-2">{output}</div>}
    </div>
  );
};
