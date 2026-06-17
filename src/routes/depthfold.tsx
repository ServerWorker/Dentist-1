import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/depthfold')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/depthfold"!</div>
}
