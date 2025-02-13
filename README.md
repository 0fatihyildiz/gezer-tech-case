# Rick and Morty Character Lister with Filtering

This project is a Next.js 14 application that lists characters from the Rick and Morty API, allowing users to filter them based on status and gender. It utilizes Server-Side Rendering (SSR) for optimal performance and SEO.

## Technologies Used

-   **Next.js 14:** React framework for building server-rendered applications.
-   **TypeScript:** Superset of JavaScript that adds static typing.
-   **Tailwind CSS:** Utility-first CSS framework for rapid UI development.
-   **Shadcn/ui:** Reusable component library for modern UI design.
-   **Zustand:** State management library for managing global application state.
-   **TanStack React Query:** Data fetching and caching library for managing API calls.
-   **ESLint & Prettier:** For code linting and formatting.
-   **Husky & Lint-Staged:** For automating linting and formatting on commit.
-   **pnpm:** Package manager.
-   **antfu/eslint-config:** ESLint configuration.

## Features

-   **Character Listing:** Fetches and displays characters from the Rick and Morty API.
-   **Filtering:** Allows filtering characters by status and gender.
-   **Integrated Filters:** Filters work together to refine search results (e.g., "alive" and "male").
-   **Modern UI:** Utilizes Shadcn/ui components for a clean and modern user interface.
-   **Server-Side Rendering (SSR):** Pages are rendered on the server for improved performance and SEO.
-   **Global State Management:** Zustand is used for managing global state, such as filter selections.
-   **API Call Management:** React Query is used for efficient API call management and caching.
-   **Automated Linting and Formatting:** Husky and Lint-Staged ensure code quality through automated linting and formatting on commit.
-   **Type Safety:** TypeScript is used throughout the project, with ESLint configured to disallow "any" types.

## Project Structure

The project follows a well-organized structure to ensure scalability and maintainability:

-   `app/`: Contains Next.js application routes and pages.
-   `components/`: Reusable UI components built with Shadcn/ui.
-   `constants/`: Constants used throughout the application.
-   `hooks/`: Custom React hooks, including those for React Query.
-   `lib/`: Utility functions and API configurations.
-   `services/`: API services for fetching data from the Rick and Morty API.
-   `store/`: Zustand store for global state management.
-   `types/`: TypeScript types and interfaces.

## Getting Started

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/0fatihyildiz/gezer-tech-case.git
    ```

2.  **Install dependencies using pnpm:**

    ```bash
    pnpm install
    ```

3.  **Run the development server:**

    ```bash
    pnpm dev
    ```

4.  **Open your browser and navigate to `http://localhost:3000`

## Linting and Formatting

This project uses ESLint and Prettier for code linting and formatting. To ensure code quality, the following commands are available:

-   **Lint:**

    ```bash
    pnpm lint
    ```

-   **Format:**

    ```bash
    pnpm lint:fix
    ```

## Commit Process

Husky and Lint-Staged are configured to automatically lint and format your code before each commit. This ensures that all code adheres to the project's linting rules and formatting guidelines.

## Learn More

To learn more about the technologies used in this project, refer to the following resources:

-   [Next.js Documentation](https://nextjs.org/docs)
-   [TypeScript Documentation](https://www.typescriptlang.org/docs/)
-   [Tailwind CSS Documentation](https://tailwindcss.com/docs)
-   [Shadcn/ui Documentation](https://ui.shadcn.com/)
-   [Zustand Documentation](https://github.com/pmndrs/zustand)
-   [TanStack React Query Documentation](https://tanstack.com/query/latest)
-   [ESLint Documentation](https://eslint.org/docs/latest/)
-   [Prettier Documentation](https://prettier.io/docs/en/)
