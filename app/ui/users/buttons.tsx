import {
  PencilIcon,
  PlusIcon,
  TrashIcon,
  KeyIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import { deleteUser } from '@/app/lib/actions';

export function CreateUser() {
  return (
    <Link
      href="/dashboard/users/create"
      className="flex h-10 items-center rounded-lg bg-blue-600 px-4 text-sm font-medium text-white transition-colors hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 shadow-md"
    >
      <span className="hidden md:block">Create User</span>{' '}
      <PlusIcon className="h-5 md:ml-4" />
    </Link>
  );
}

export function UpdateUser({ id }: { id: string }) {
  return (
    <Link
      href={`/dashboard/users/${id}/edit`}
      className="rounded-md border p-2 hover:bg-gray-100 shadow-md"
    >
      <PencilIcon className="w-5" />
    </Link>
  );
}

export function UpdatePassword({ id }: { id: string }) {
  return (
    <Link
      href={`/dashboard/users/${id}/password`}
      className="rounded-md border p-2 hover:bg-gray-100 shadow-md"
    >
      <KeyIcon className="w-5" />
    </Link>
  );
}

export function DeleteUser({ id }: { id: string }) {
  const deleteUserWithId = deleteUser.bind(null, id);

  return (
    <form action={deleteUserWithId}>
      <button className="rounded-md border p-2 hover:bg-gray-100 shadow-md">
        <span className="sr-only">Delete</span>
        <TrashIcon className="w-5" />
      </button>
    </form>
  );
}
