'use client';

import { SignInOptions } from 'next-auth/react';
import { createContext, useContext } from 'react';

interface UserContextProps {
	user: {
		name: string;
		email: string;
		avatar?: string;
	};
	updateUser: (data: Partial<UserContextProps['user']>) => void;
	signIn: (options?: SignInOptions) => Promise<void>;
	signOut: () => Promise<void>;
	isAuthenticated: boolean;
	isLoading: boolean;
	error: string | null;
}

const userContext = createContext<UserContextProps>(Object.assign({}));

export function UserProvider({ children }: { children: React.ReactNode }) {
	return (
		<userContext.Provider value={Object.assign({})}>
			{children}
		</userContext.Provider>
	);
}

export function useUser() {
	return useContext(userContext);
}
