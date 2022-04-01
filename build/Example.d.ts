declare let isDone: boolean;
declare let decimal: number;
declare let hex: number;
declare let binary: number;
declare let octal: number;
declare let big: bigint;
declare let color: string;
declare let fullName: string;
declare let age: number;
declare let sentence: string;
declare let sentence1: string;
declare let list: number[];
declare let list1: Array<number>;
declare let x: [string, number];
declare enum Color {
    Red = 0,
    Green = 1,
    Blue = 2
}
declare let c: Color;
declare enum Color1 {
    Red = 1,
    Green = 2,
    Blue = 3
}
declare let c1: Color;
declare enum Color2 {
    Red = 1,
    Green = 2,
    Blue = 4
}
declare let c2: Color;
declare let u: undefined;
declare let n: null;
declare function warnUser(): void;
declare let value: any;
interface ButtonProps {
    label: string;
}
interface ButtonProps {
    label: string;
    color?: string;
    size?: string;
}
interface Square {
    color?: string;
    size: number;
}
declare function add(x: number, y: number): number;
declare function add2(x: number, y: number): void;
declare let myAdd: (x: number, y: number) => number;
interface Person {
    firstname: string;
    lastname?: string;
}
declare let type: 'superadmin' | 'admin' | 'user';
declare type NetworkLoadingState = {
    state: "loading";
};
declare type NetworkFailedState = {
    state: "failed";
    code: number;
};
declare type NetworkSuccessState = {
    state: "success";
    response: {
        title: string;
        duration: number;
        summary: string;
    };
};
declare type NetworkState = NetworkLoadingState | NetworkFailedState | NetworkSuccessState;
interface ErrorHandling {
    success: boolean;
    error?: {
        message: string;
    };
}
interface ArtworksData {
    artworks: {
        title: string;
    }[];
}
interface ArtistsData {
    artists: {
        name: string;
    }[];
}
declare type ArtworksResponse = ArtworksData & ErrorHandling;
declare type ArtistsResponse = ArtistsData & ErrorHandling;
declare const handleArtistsResponse: (response: ArtistsResponse) => void;
