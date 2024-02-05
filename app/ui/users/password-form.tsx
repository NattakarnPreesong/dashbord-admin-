'use client';

import { UsersTable } from '@/app/lib/definitions';
import { KeyIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { Button } from '@/app/ui/button';
import { PasswordUser } from '@/app/lib/actions';
import { useFormState } from 'react-dom';

export default function EditPasswordForm({ user }: { user: UsersTable }) {
  const initialState = { message: null, errors: {} };
  const passwordUserWithId = PasswordUser.bind(null, user.id);
  const [state, dispatch] = useFormState(passwordUserWithId, initialState);


  return (
    <form action={dispatch}>
      <div className="rounded-md bg-gray-50 p-4 md:p-6 shadow-md">
        {/* User Password */}
        <div className="mb-4">
          <label htmlFor="password" className="mb-2 block text-sm font-medium">
            Change password : {user.name}
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="password"
                name="password"
                type="text"
                placeholder="Enter password"
                // defaultValue={user.password}
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500 shadow-md"
                aria-describedby="customer-error"
                required
              />
              <KeyIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>
            <div id="customer-error" aria-live="polite" aria-atomic="true">
              {state.errors?.password &&
                state.errors.password.map((error: string) => (
                  <p className="mt-2 text-sm text-red-500" key={error}>
                    {error}
                  </p>
                ))}
            </div>
          </div>
        </div>
      </div>
      <div className="mt-6 flex justify-end gap-4">
        <Link
          href="/dashboard/users"
          className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200 shadow-md"
        >
          Cancel
        </Link>
        <Button type="submit">Edit Password</Button>
      </div>
    </form>
  );
}
