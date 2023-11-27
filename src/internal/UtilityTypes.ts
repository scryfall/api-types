export type Overlap<A, B> = Partial<Omit<A, keyof B>> & Partial<Omit<B, keyof A>> & (A | B);
export type Overlap3<A, B, C> = Overlap<Overlap<A, B>, C>;
export type Overlap4<A, B, C, D> = Overlap<Overlap<A, B>, Overlap<C, D>>;
