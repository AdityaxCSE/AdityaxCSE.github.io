declare module "gsap-trial/SplitText" {
  export class SplitText {
    constructor(target: string | Element | NodeList | Array<Element | string>, vars?: object);
    chars: Element[];
    words: Element[];
    lines: Element[];
    revert(): void;
  }
}
