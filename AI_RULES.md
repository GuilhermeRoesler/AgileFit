# AI Development Rules

This document provides guidelines for the AI developer to follow when working on this project. Adhering to these rules ensures consistency, maintainability, and adherence to the project's architectural standards.

## Tech Stack

The application is built with a modern, component-based architecture. The key technologies are:

- **Framework**: React with Vite for a fast development experience.
- **Language**: TypeScript for type safety and improved developer experience.
- **UI Components**: shadcn/ui, a collection of beautifully designed, accessible components built on Radix UI.
- **Styling**: Tailwind CSS for a utility-first styling approach. All styling should be done via Tailwind classes.
- **Routing**: React Router (`react-router-dom`) for all client-side navigation.
- **Icons**: `lucide-react` for a comprehensive and consistent set of icons.
- **Data Fetching**: TanStack Query (`@tanstack/react-query`) for managing server state, including caching, refetching, and mutations.
- **Forms**: React Hook Form (`react-hook-form`) for performant form state management, combined with Zod for schema-based validation.
- **Notifications**: Sonner for simple and elegant toast notifications.

## Library Usage and Coding Conventions

To maintain code quality and consistency, please follow these rules:

1.  **UI Components**:
    - **ALWAYS** use components from the `shadcn/ui` library (located in `src/components/ui`) for all standard UI elements (e.g., `Button`, `Input`, `Card`, `Dialog`).
    - **DO NOT** create custom versions of basic UI elements that already exist in the library.
    - New, complex components should be composed of smaller `shadcn/ui` components.

2.  **Styling**:
    - **ONLY** use Tailwind CSS utility classes for styling.
    - **NEVER** write custom CSS in `.css` files or use inline `style` attributes.
    - Use the `cn` utility function from `src/lib/utils.ts` to conditionally apply classes.

3.  **Icons**:
    - **ALWAYS** use icons from the `lucide-react` library.
    - **DO NOT** install other icon libraries or use raw SVG files.

4.  **Routing**:
    - All page routes **MUST** be defined in `src/App.tsx`.
    - Page components should be placed in the `src/pages` directory.

5.  **State Management**:
    - For server state (data fetched from an API), **ALWAYS** use `@tanstack/react-query`.
    - For simple, local component state, use React's `useState` hook.

6.  **Forms**:
    - **ALL** forms must be built using `react-hook-form`.
    - Schema-based validation **MUST** be implemented using `zod`.

7.  **Notifications**:
    - Use `sonner` for all user-facing toast notifications (e.g., success messages, errors). Import `toast` from `sonner`.

8.  **File Structure**:
    - Reusable components go in `src/components`.
    - Page components go in `src/pages`.
    - Custom hooks go in `src/hooks`.
    - Utility functions go in `src/lib`.