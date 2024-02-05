import { UserIcon, WrenchScrewdriverIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';

export default function UserRole({ status }: { status: string }) {
  return (
    <span
      className={clsx(
        'inline-flex items-center rounded-full px-2 py-1 text-xs shadow-md',
        {
          'bg-yellow-300 text-black': status === 'Admin',
          'bg-green-500 text-white': status === 'User',
        },
      )}
    >
      {status === 'Admin' ? (
        <>
          Admin
          <WrenchScrewdriverIcon className="ml-1 w-4 text-black" />
        </>
      ) : null}
      {status === 'User' ? (
        <>
          User
          <UserIcon className="ml-1 w-4 text-white" />
        </>
      ) : null}
    </span>
  );
}
