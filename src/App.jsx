import Index from "./pages";

function App() {
  return (
    <div
      className="items-center justify-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1630411870725-0e0bcb22b250?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: "100vh",
        width: "100vw",
        overflow: "scroll",
        zIndex: 1,
        position: "fixed",
      }}
    >
      <Index />
    </div>
  );
}

export default App;
