import { screen, waitFor } from "@testing-library/react";
import { render } from "./render";
import { RepositoryList } from "../components";

it("should display the repository results", async () => {
  render(<RepositoryList searchTerm="React" />, {
    mocks: {
      Query: {
        search: () => (
          screen.findByText(/repository results/i)
        )
      }
    }
  });
});

it("should call the repository query with the correct variables", async () => {
  const searchQuerySpy = jest.fn();

  render(<RepositoryList searchTerm="React" />, {
    mocks: {
      Query: {
        search: searchQuerySpy
      }
    }
  });

  await waitFor(() => expect(searchQuerySpy).toHaveBeenCalled());

  expect(searchQuerySpy.mock.calls[0][1]).toEqual({ query: "React" });
});

it("should show an error message when the query fails", async () => {
  render(<RepositoryList searchTerm="React" />, {
    mocks: {
      Query: {
        search: () => {
          throw new Error("invalid repository searchTerm");
        }
      }
    }
  });

  // Error is not thrown synchronously so we need to `await`
  // for it to appear
  await screen.findByText("An error occured!");
});
