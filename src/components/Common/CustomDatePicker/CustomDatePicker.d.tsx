export interface CustomDatePickerProps {
    label?: string;
    onChange?: (e: any) => void;
    placeHolder?: string;
    value: Date|undefined;
    minDate?: Date;
    disabled?: boolean;
}