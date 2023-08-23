
export type Color = 'red' | 'yellow' | 'green';

export interface ChangeActiveLight {
    (oldActiveColor: Color, newActiveColor: Color): void;
}
export interface ToggleModal {
    (): void;
}
