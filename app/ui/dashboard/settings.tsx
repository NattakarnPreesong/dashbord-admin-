import { PencilIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';
import { lusitana } from '@/app/ui/fonts';
import { fetchLatestInvoices } from '@/app/lib/data';

export default async function Setting() {
  const latestInvoices = await fetchLatestInvoices();

  return (
    <div className="flex w-full flex-col md:col-span-4">
      <h2 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
        Settings
      </h2>
      <div className="flex-grow flex flex-col justify-between rounded-xl bg-gray-50 p-4 shadow-md">
        <div className="bg-white rounded-md shadow-md p-6">

          <div className='grid gap-4 sm:grid-cols-2 lg:grid-cols-2 '>
            {latestInvoices.map((invoice, i) => (
              <div
                key={invoice.id}
                className={clsx(
                  'rounded-xl overflow-hidden bg-white shadow-md',
                  { 'border-t': i !== 0 }
                )}
              >
                <div className="flex items-center justify-between h-full p-4">
                  <div className="min-w-0 mb-4">
                    <p className="text-sm font-semibold md:text-base">
                      {invoice.name}
                    </p>
                    <p className="text-sm text-gray-500 sm:block">
                      {invoice.email}
                    </p>
                  </div>
                  <div className="flex justify-end">
                    <button className="rounded-md border p-2 hover:bg-gray-100">
                      <PencilIcon className="w-5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}
