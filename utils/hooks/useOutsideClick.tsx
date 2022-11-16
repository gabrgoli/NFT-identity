import { useEffect } from "react";

export function useOutsideClick(ref: any, onClickOutsideEvent: Function): void {
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target)) {
        onClickOutsideEvent();
      }
    }

    document.addEventListener("mouseup", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mouseup", handleClickOutside);
    };
  }, [ref, onClickOutsideEvent]);
}
