import { Toaster } from 'sonner';

export function Toast() {
  return (
    <Toaster
      position="top-right"
      toastOptions={{
        style: {
          background: 'var(--card-bg)',
          border: '1px solid var(--border-subtle)',
          color: 'var(--text-main)',
        },
        className: 'font-sans',
      }}
    />
  );
}

export { toast } from 'sonner';