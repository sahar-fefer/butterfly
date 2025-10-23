declare module "*.png" {
    const value: any;
    export = value;
}

declare module "*.jpg" {
    const value: any;
    export = value;
}

declare module "*.svg" {
    const value: any;
    export = value;
}

declare module "*.module.scss" {
    const classes: { [key: string]: string };
    export = classes;
}

declare module "*.module.css" {
    const classes: { [key: string]: string };
    export = classes;
}