import { useSyncExternalStore } from "react";
import { Toaster } from "@/components/ui/sonner";
import { appPathname } from "@/lib/paths";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Privacy from "./pages/Privacy";

function subscribe(onStoreChange: () => void) {
  window.addEventListener("popstate", onStoreChange);
  return () => window.removeEventListener("popstate", onStoreChange);
}

function getPathname() {
  return appPathname();
}

function usePathname() {
  return useSyncExternalStore(subscribe, getPathname, () => "/");
}

function resolvePage(pathname: string) {
  if (pathname === "/") return <Index />;
  if (pathname === "/privacidade") return <Privacy />;
  return <NotFound />;
}

const App = () => {
  const pathname = usePathname();

  return (
    <>
      <Toaster />
      {resolvePage(pathname)}
    </>
  );
};

export default App;
