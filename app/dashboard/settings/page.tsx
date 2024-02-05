import Setting from '@/app/ui/dashboard/settings';
import { Suspense } from 'react';
import { LatestInvoicesSkeleton } from '@/app/ui/skeletons';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Setting',
};

export default async function Page() {
  return (
    <main>
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 ">
        {/* <Suspense fallback={<LatestInvoicesSkeleton />}>
          <Setting />
        </Suspense> */}
      </div>
    </main>
  );
}
