import { ComponentFactoryResolver, ComponentRef, NgZone, Type } from '@angular/core';
import { Subject, BehaviorSubject, Observable } from 'rxjs';
import { NbAdjustableConnectedPositionStrategy } from '../overlay-position';
import { NbRenderableContainer } from '../overlay-container';
import { NbOverlayContent, NbOverlayService } from '../overlay-service';
import { NbOverlayRef, NbOverlayContainer, NbOverlayConfig } from '../mapping';
export interface NbDynamicOverlayController {
    show(): any;
    hide(): any;
    toggle(): any;
    rebuild(): any;
}
export declare class NbDynamicOverlay {
    protected overlay: NbOverlayService;
    protected componentFactoryResolver: ComponentFactoryResolver;
    protected zone: NgZone;
    protected overlayContainer: NbOverlayContainer;
    protected ref: NbOverlayRef;
    protected container: ComponentRef<NbRenderableContainer>;
    protected componentType: Type<NbRenderableContainer>;
    protected context: Object;
    protected content: NbOverlayContent;
    protected positionStrategy: NbAdjustableConnectedPositionStrategy;
    protected overlayConfig: NbOverlayConfig;
    protected positionStrategyChange$: Subject<{}>;
    protected isShown$: BehaviorSubject<boolean>;
    protected alive: boolean;
    readonly isAttached: boolean;
    readonly isShown: Observable<boolean>;
    constructor(overlay: NbOverlayService, componentFactoryResolver: ComponentFactoryResolver, zone: NgZone, overlayContainer: NbOverlayContainer);
    create(componentType: Type<NbRenderableContainer>, content: NbOverlayContent, context: Object, positionStrategy: NbAdjustableConnectedPositionStrategy, overlayConfig?: NbOverlayConfig): this;
    setContent(content: NbOverlayContent): void;
    setContext(context: Object): void;
    setContentAndContext(content: NbOverlayContent, context: Object): void;
    setComponent(componentType: Type<NbRenderableContainer>): void;
    setPositionStrategy(positionStrategy: NbAdjustableConnectedPositionStrategy): void;
    setOverlayConfig(overlayConfig: NbOverlayConfig): void;
    show(): any;
    hide(): void;
    toggle(): void;
    dispose(): void;
    getContainer(): ComponentRef<NbRenderableContainer>;
    protected createOverlay(): void;
    protected renderContainer(): void;
    protected updateContext(): void;
    protected createContainerContext(): Object;
    /**
     * Dimensions of the container may change after content update. So we listen to zone.stable event to
     * reposition the container.
     */
    protected updatePositionWhenStable(): void;
    protected hasOverlayInContainer(): boolean;
    protected disposeOverlayRef(): void;
}
