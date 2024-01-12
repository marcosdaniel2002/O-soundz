import { createContext, useContext, useState } from "react";
import { useLocalStorageState } from "../hooks/useLocalStorageState";
import { getApiKey } from "../services/apiSpotify";

const ApiKeyContext = createContext();

function ApiKeyProvider({ children }) {
  const [apiKey, setApiKey] = useLocalStorageState(null, "spotify-key");
  const [isLoading, setIsLoading] = useState(false);

  async function getKey() {
    try {
      setIsLoading(true);
      const token = await getApiKey();
      setApiKey(token);
    } catch (e) {
      console.err(e);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <ApiKeyContext.Provider value={{ apiKey, getKey, isLoading }}>
      {children}
    </ApiKeyContext.Provider>
  );
}

function useApiKey() {
  const context = useContext(ApiKeyContext);
  if (context === undefined)
    throw new Error("ApiKeyContext was used outside of ApiKeyProvider!:(");
  return context;
}

export { ApiKeyProvider, useApiKey };
