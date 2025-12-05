export function lazyRetry<T>(importer: () => Promise<T>, name: string): Promise<T> {
  return new Promise<T>((resolve, reject) => {
    const storageKey = `retry-${name}-refreshed`;
    const hasRefreshed = JSON.parse(globalThis.sessionStorage?.getItem(storageKey) || 'false');

    importer()
      .then((mod) => {
        try {
          globalThis.sessionStorage?.setItem(storageKey, 'false');
        } catch {}
        resolve(mod);
      })
      .catch((error: any) => {
        const message = String(error?.message || '');
        const isChunkError = /ChunkLoadError|Loading chunk [\d]+ failed|importing a module script failed|failed to fetch/i.test(message);
        if (!hasRefreshed && isChunkError) {
          try {
            globalThis.sessionStorage?.setItem(storageKey, 'true');
          } catch {}
          // Einmalig neu laden, um neue Build-Assets zu holen
          if (typeof window !== 'undefined') {
            window.location.reload();
            return;
          }
        }
        reject(error);
      });
  });
} 