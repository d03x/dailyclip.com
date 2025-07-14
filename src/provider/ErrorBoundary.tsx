"use client";
import { ComponentType, ReactNode} from "react";
import { ErrorBoundary, FallbackProps } from "react-error-boundary";
import { AlertTriangle } from "lucide-react";

export function DefaultFallback({ error }: { error: Error }) {
  return (
    <div className="flex items-center justify-center  min-h-screen  p-6 text-red-700 animate-fade-in">
      <div className="text-center space-y-2">
        <div className="flex justify-center">
          <AlertTriangle className="w-10 h-10 text-red-500" />
        </div>
        <h2 className="text-lg font-semibold">Gagal Memuat Komponen</h2>
        <p className="text-sm text-red-600">
          {error?.message ?? "Terjadi kesalahan tidak diketahui."}
        </p>
      </div>
    </div>
  );
}

export default function ErrorBoundaryProvider({
  children,
  fallback,
}: {
  fallback?: ComponentType<FallbackProps>;
  children: ReactNode;
}) {
  return (
    <ErrorBoundary FallbackComponent={fallback || DefaultFallback}>
      {children}
    </ErrorBoundary>
  );
}
