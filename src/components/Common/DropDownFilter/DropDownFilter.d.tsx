export interface DropDownFilterProps {
    label: string;
    data: Array<string>;
    value: string;
    onChange: (e: any) => void;
}