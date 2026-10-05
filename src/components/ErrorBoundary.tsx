import React from 'react';

interface Props {
  children: React.ReactNode;
}

interface State {
  hasError: boolean;
}

export class ErrorBoundary extends React.Component<Props, State> {
  declare state: State;

  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: React.ErrorInfo): void {
    console.error('Unhandled UI error:', error, info);
  }

  handleReload = (): void => {
    (this as React.Component<Props, State>).setState({ hasError: false });
    window.location.reload();
  };

  render(): React.ReactNode {
    const self = this as React.Component<Props, State>;
    if (self.state.hasError) {
      return (
        <div className="min-h-dvh bg-bg text-fg antialiased" role="alert">
          <div className="wrap flex min-h-[60vh] flex-col items-center justify-center text-center gap-6 px-4 py-12">
            <p className="label text-accent">Error</p>
            <h2 className="font-display text-title font-medium">
              Something went wrong
            </h2>
            <p className="max-w-md text-muted">
              An unexpected error occurred. The error has been logged. Please try reloading the page.
            </p>
            <button
              type="button"
              onClick={this.handleReload}
              className="inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium transition-[background-color,color,border-color,transform,opacity] duration-150 ease-out focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-accent disabled:pointer-events-none disabled:opacity-50 active:not-disabled:scale-[0.98] bg-solid text-solid-fg hover:opacity-90 min-h-11 px-5 py-2.5"
            >
              Reload page
            </button>
          </div>
        </div>
      );
    }
    return self.props.children;
  }
}