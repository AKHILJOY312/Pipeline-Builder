# Pipeline Builder Frontend

React + Vite frontend for building node-based pipelines in a drag-and-drop canvas, then submitting the graph to a backend parser for topology validation.

## Tech Stack

- React 19
- Vite 8
- React Flow
- Zustand
- Axios
- Tailwind CSS v4

## Features

- Drag-and-drop node toolbar
- Visual graph editing on a React Flow canvas
- Dynamic node inputs for templated text variables (`{{var}}`)
- Pipeline submission to backend parse endpoint
- Topology result summary (`num_nodes`, `num_edges`, `is_dag`)

## Project Structure

```text
src/
  features/
    nodes/
      components/
      registry/
      types/
      utils/
    pipeline/
      canvas/
      components/
      services/
  shared/
    constants/
    store/
      slices/
```

## Prerequisites

- Node.js 20+
- npm 10+

## Setup

1. Install dependencies:

```bash
npm install
```

2. Create/update `.env` in project root:

```env
VITE_API_BASE_URL=http://localhost:8000
```

Note: Vite only exposes env vars prefixed with `VITE_` to browser code.

## Run

Development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Preview production build:

```bash
npm run preview
```

Lint:

```bash
npm run lint
```

## API Contract Used By Frontend

Submit endpoint:

- `POST /pipelines/parse`

Request payload shape:

```json
{
  "nodes": [{ "id": "string", "type": "string" }],
  "edges": [{ "id": "string", "source": "string", "target": "string" }]
}
```

Expected response fields:

```json
{
  "num_nodes": 0,
  "num_edges": 0,
  "is_dag": true
}
```

## Notes

- Frontend API route config is in `src/shared/constants/apiRoutes.js`.
- If the backend is unavailable, submission shows an error alert.
- Current lint issues (if any) should be resolved before CI enforcement.
