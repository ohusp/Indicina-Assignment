import { screen, waitFor } from "@testing-library/react";
import { render } from "./render";
import { UserList } from "../components";

it("should display the user results", async () => {
  render(<UserList searchTerm="React" />, {
    mocks: {
      Query: {
        search: () => (
          screen.findByText(/user results/i)
        )
      }
    }
  });
});

it("should call the user query with the correct variables", async () => {
  const searchQuerySpy = jest.fn();

  render(<UserList searchTerm="React" />, {
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
  render(<UserList searchTerm="React" />, {
    mocks: {
      Query: {
        search: () => {
          throw new Error("invalid user searchTerm");
        }
      }
    }
  });

  // Error is not thrown synchronously so we need to `await`
  // for it to appear
  await screen.findByText("An error occured!");
});
