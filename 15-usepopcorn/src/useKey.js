import { useEffect } from "react";
export function useKey(key, action) {
  useEffect(
    function () {
      function callback(e) {
        if (e.code.toLowerCase() === key.toLowerCase()) {
          action();
        }
      }
      document.addEventListener("keydown", callback);

      //! Dinleyici temizleme fonk , içerisindeki fonksiyon dinlediğimiz fonk. ile aynı olmalı
      //* details kapalı olduğunda artık dinleyemeyecek
      return function () {
        document.removeEventListener("keydown", callback);
      };
    },
    [action, key]
  );
}
