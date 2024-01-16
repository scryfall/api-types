export type SomePartial<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;
