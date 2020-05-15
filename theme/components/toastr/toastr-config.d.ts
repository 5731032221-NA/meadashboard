/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { InjectionToken } from '@angular/core';
import { NbGlobalPosition } from '../cdk/overlay/position-helper';
import { NbComponentStatus } from '../component-status';
import { NbIconConfig } from '../icon/icon.component';
declare type IconToClassMap = {
    [status in NbComponentStatus]: string;
};
export declare const NB_TOASTR_CONFIG: InjectionToken<NbToastrConfig>;
export declare type NbDuplicateToastBehaviour = 'previous' | 'all';
/**
 * The `NbToastrConfig` class describes configuration of the `NbToastrService.show` and global toastr configuration.
 * */
export declare class NbToastrConfig {
    /**
     * Determines where on the screen toast have to be rendered.
     * */
    position: NbGlobalPosition;
    /**
     * Status chooses color scheme for the toast.
     * */
    status: '' | NbComponentStatus;
    /**
     * Duration is timeout between toast appears and disappears.
     * */
    duration: number;
    /**
     * Destroy by click means you can hide the toast by clicking it.
     * */
    destroyByClick: boolean;
    /**
     * If preventDuplicates is true then the toast with the same title, message and status will not be rendered.
     * Find duplicates behaviour determined by `preventDuplicates`.
     * The default `previous` duplicate behaviour is used.
     * */
    preventDuplicates: boolean;
    /**
     * Determines the how to threat duplicates.
     * */
    duplicatesBehaviour: NbDuplicateToastBehaviour;
    limit?: number;
    /**
     * Determines render icon or not.
     * */
    hasIcon: boolean;
    /**
     * Icon name or icon config object that can be provided to render custom icon.
     * */
    icon: string | NbIconConfig;
    /**
     * Icon pack to look for the icon in.
     * @deprecated Set pack via icon config object passed to icon property
     * @breaking-change 5.0.0
     * */
    iconPack: string;
    /**
     * Toast status icon-class mapping.
     * */
    protected icons: IconToClassMap;
    constructor(config: Partial<NbToastrConfig>);
    protected patchIcon(config: Partial<NbToastrConfig>): void;
}
export {};
