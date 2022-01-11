import { useEffect } from "react";

export function useEventListener<K extends keyof DocumentEventMap>(
  isOpen: boolean,
  onExecute: (ev: DocumentEventMap[K]) => void,
  typeEvent: K
) {
  useEffect(() => {
    if (!isOpen) {
      return;
    }

    document.addEventListener<K>(typeEvent, onExecute);
    return () => document.removeEventListener(typeEvent, onExecute);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen]);
}
