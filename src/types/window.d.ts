declare global {
  type AccountType = {
    username: string
    password: string
  };
  interface Window {
    darkMode: {
      toggle: () => promise<boolean>
      system: () => promise<'Light' | 'Dark'>
    }
    maximize: {
      toggle: () => promise<void>
    }
    login: (account: AccountType) => Promise<void>
  }
}

export {};
