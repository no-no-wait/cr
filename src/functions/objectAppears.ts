import { RefObject } from "react";

export const objectAppear = (object: RefObject<HTMLDivElement | HTMLImageElement>, timeToAppear: number) => {
    setTimeout(() => {
        if (object.current) {
            object.current.style.opacity = '1';
        }
    }, timeToAppear)
}
