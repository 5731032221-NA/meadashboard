/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { NbComponentSize } from '../component-size';
import { NbComponentStatus } from '../component-status';
/**
 * Styled spinner component
 *
 * @styles
 *
 * spinner-background-color:
 * spinner-circle-filled-color:
 * spinner-circle-empty-color:
 * spinner-text-color:
 * spinner-text-font-family:
 * spinner-text-font-size:
 * spinner-text-font-weight:
 * spinner-text-line-height:
 * spinner-primary-circle-filled-color:
 * spinner-primary-circle-empty-color:
 * spinner-info-circle-filled-color:
 * spinner-info-circle-empty-color:
 * spinner-success-circle-filled-color:
 * spinner-success-circle-empty-color:
 * spinner-warning-circle-filled-color:
 * spinner-warning-circle-empty-color:
 * spinner-danger-circle-filled-color:
 * spinner-danger-circle-empty-color:
 * spinner-height-tiny:
 * spinner-height-small:
 * spinner-height-medium:
 * spinner-height-large:
 * spinner-height-giant:
 */
export declare class NbSpinnerComponent {
    /**
     * Loading text that is shown near the icon
     * @type string
     */
    message: string;
    /**
     * Spinner size, available sizes:
     * tiny, small, medium, large, giant
     * @param {string} value
     */
    size: NbComponentSize;
    /**
     * Spinner status (adds specific styles):
     * primary, info, success, warning, danger
     */
    status: '' | NbComponentStatus;
    readonly tiny: boolean;
    readonly small: boolean;
    readonly medium: boolean;
    readonly large: boolean;
    readonly giant: boolean;
    readonly primary: boolean;
    readonly info: boolean;
    readonly success: boolean;
    readonly warning: boolean;
    readonly danger: boolean;
}
