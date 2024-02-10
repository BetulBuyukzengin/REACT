//! CUSTOM HOOK
import { useEffect, useState } from "react";
const KEY = "7ec2e548";

// export function useMovies(query, callback) {
export function useMovies(query) {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  useEffect(
    function () {
      //   callback?.(); // for handle close movie
      //! Api isteklerini temizleme (iptal denetleyicisi)
      const controller = new AbortController();
      async function fetchMovies() {
        try {
          setIsLoading(true);
          setError("");
          //! iptal denetleyicisini bağlama {signal:controller.signal}
          const res = await fetch(
            `http://www.omdbapi.com/?apikey=${KEY}&s=${query}`,
            { signal: controller.signal }
          );
          if (!res.ok)
            throw new Error("Something went wrong with fetching movies");
          const data = await res.json();

          if (data.Response === "False") throw new Error("Movie not found");
          // console.log(data.Search);
          setMovies(data.Search);
          setError(""); //! Cleanup for http request
        } catch (err) {
          //! Http istekleri temizlemede durdurulan istekleri hata olarak algılamaması için koşul ekledim.
          if (err.name !== "AbortError") {
            console.log(err.message);
            setError(err.message);
          }
          // setIsLoading(false); burada kullanırsak kodu kopyalar
        } finally {
          //her zaman çalışacak alan
          setIsLoading(false);
        }
      }

      // if (!query.length) { sorgu yoksa
      //3 den azsa arama yapma
      if (query.length < 3) {
        setMovies([]);
        setError("");
        return; //? return kullanmazsam erro göstermeye devam ediyor
      }
      //   handleCloseMovie(); //* arama yapıldığında seçilen filmi kapat (details)
      fetchMovies();
      //! api isteklerini temizleme fonk.
      return function () {
        controller.abort();
      };
    },
    [query]
  );
  return { movies, isLoading, error };
}
