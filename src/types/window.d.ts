declare global {
    interface Window {
        darkMode: {
            toggle: () => promise<boolean>
            system: () => promise<'Light' | 'Dark'>
        }
    }
}

export {}
