import { cn } from "@/lib/utils"

function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("animate-pulse rounded-md bg-surface", className)}
      {...props}
    />
  )
}

export { Skeleton }

// Specific skeleton components for different sections
export function SectionSkeleton() {
  return (
    <div className="space-y-4 animate-pulse py-24">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <Skeleton className="h-8 w-64 mx-auto mb-4" />
          <Skeleton className="h-1.5 w-16 mx-auto rounded-full" />
        </div>
        <div className="space-y-4">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-3/4" />
          <Skeleton className="h-4 w-1/2" />
        </div>
      </div>
    </div>
  );
}

export function ProjectCardSkeleton() {
  return (
    <div className="soft-card rounded-3xl overflow-hidden animate-pulse">
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-1/3 p-8 flex items-center justify-center">
          <Skeleton className="w-16 h-16 rounded-full" />
        </div>
        <div className="p-8 flex-1 flex flex-col">
          <Skeleton className="h-6 w-3/4 mb-3" />
          <Skeleton className="h-4 w-full mb-2" />
          <Skeleton className="h-4 w-2/3 mb-6" />
          <div className="flex flex-wrap gap-2 mb-8">
            <Skeleton className="h-6 w-16" />
            <Skeleton className="h-6 w-20" />
            <Skeleton className="h-6 w-14" />
          </div>
          <Skeleton className="h-10 w-32" />
        </div>
      </div>
    </div>
  );
}