import { describe, it, expect, beforeEach, vi } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import App from "./App";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// Mock API response
const mockDogBreeds = {
  breeds: [
    {
      id: 1,
      name: "Labrador Retriever",
      size: "large",
      temperament: ["Friendly", "Active", "Outgoing"],
      lifeExpectancy: { min: 10, max: 12 },
      imageUrl: "https://example.com/lab.jpg",
    },
  ],
};

// Mock fetch globally
global.fetch = vi.fn(() =>
  Promise.resolve({
    ok: true,
    json: () => Promise.resolve(mockDogBreeds),
  })
) as unknown as typeof fetch;

describe("App", () => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
      },
    },
  });

  beforeEach(() => {
    queryClient.clear();
  });

  const renderApp = () => {
    return render(
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    );
  };

  it("shows loading state initially", () => {
    renderApp();
    expect(screen.getByText("Loading...")).toBeInTheDocument();
  });

  it('displays "Dog Breeds" heading after loading', async () => {
    renderApp();

    await waitFor(() => {
      const heading = screen.getByText("Dog Breeds");
      expect(heading).toBeInTheDocument();
      expect(heading).toHaveTextContent("Dog Breeds");
    });
  });

  it("has correct heading with styling", async () => {
    renderApp();

    await waitFor(() => {
      const heading = screen.getByRole("heading", { level: 1 });
      expect(heading).toBeInTheDocument();
      expect(heading).toHaveTextContent("Dog Breeds");
    });
  });
});
