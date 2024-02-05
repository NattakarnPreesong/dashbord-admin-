import { ArrowPathIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';
import { lusitana } from '@/app/ui/fonts';
import { fetchLatestInvoices } from '@/app/lib/data';

export default async function LatestInvoices() {
  const latestInvoices = await fetchLatestInvoices();

  return (
    <div className="flex w-full flex-col md:col-span-4">
      <h2 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
        Latest Invoices
      </h2>
      <div className="flex-grow flex-col justify-between rounded-xl bg-gray-50 p-4 shadow-md">
        <div className="bg-white rounded-md p-4">
          <div className='grid gap-2 sm:grid-cols-1 lg:grid-cols-1 '>
            {latestInvoices.map((invoice, i) => (
              <div
                key={invoice.id}
                className={clsx(
                  'rounded-md overflow-hidden bg-white shadow-md',
                  { 'border-t': i !== 0 }
                )}
              >
                <div className="flex items-center justify-between h-full p-2">
                  <div className="min-w-0 mb-2">
                    <p className="text-sm font-semibold md:text-base">
                      {invoice.name}
                    </p>
                    <p className="text-sm text-gray-500 sm:block">
                      {invoice.email}
                    </p>
                  </div>
                  <div className="flex justify-end">
                    <p className={`${lusitana.className} truncate text-sm font-medium md:text-base`}> {invoice.amount} </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex items-center mt-6">
          <ArrowPathIcon className="h-5 w-5 text-gray-500" />
          <h3 className="ml-2 text-sm text-gray-500">Updated just now</h3>
        </div>
      </div>
    </div>
  );
}
