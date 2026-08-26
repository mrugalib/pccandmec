import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import SmoothScroll from "./components/SmoothScroll";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import CauseDetail from "./pages/CauseDetail";
import ProgramDetail from "./pages/ProgramDetail";
import WorkAreaDetail from "./pages/WorkAreaDetail";
import ProjectDetail from "./pages/ProjectDetail";
import BlogDetail from "./pages/BlogDetail";


function Router() {
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/causes/:slug"} component={CauseDetail} />
      <Route path={"/programs/:slug"} component={ProgramDetail} />
      <Route path={"/what-we-do/:slug"} component={WorkAreaDetail} />
      <Route path={"/projects/:slug"} component={ProjectDetail} />
      <Route path={"/blog/:slug"} component={BlogDetail} />
      <Route path={"/404"} component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}

// NOTE: About Theme
// - First choose a default theme according to your design style (dark or light bg), than change color palette in index.css
//   to keep consistent foreground/background color across components
// - If you want to make theme switchable, pass `switchable` ThemeProvider and use `useTheme` hook

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider
        defaultTheme="light"
        // switchable
      >
        <TooltipProvider>
          <SmoothScroll />
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
