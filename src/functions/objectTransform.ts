import { RefObject } from "react";

export const objectTransform = (object: RefObject<HTMLDivElement | HTMLImageElement>, value: number, timeToDo: number, x: boolean) => {
    setTimeout(() => {
        if (object.current) {
            object.current.style.transform = `translate${x ? 'X' : 'Y'}(${value}px)`;
        }
    }, timeToDo)
}
