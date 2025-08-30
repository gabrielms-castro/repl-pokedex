export type ShallowLocations = {
    count: number;
    next: string | null;
    previous: string | null;
    results: Results[]
};

export type Results = {
    name: string;
    url: string;
}