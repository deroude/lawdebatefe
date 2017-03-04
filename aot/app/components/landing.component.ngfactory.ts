/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
 /* tslint:disable */

import * as import0 from '../../../app/components/landing.component';
import * as import1 from '@angular/core/src/linker/view';
import * as import2 from '@angular/core/src/render/api';
import * as import3 from '@angular/core/src/linker/view_utils';
import * as import4 from '@angular/core/src/metadata/view';
import * as import5 from '@angular/core/src/linker/view_type';
import * as import6 from '@angular/core/src/change_detection/constants';
import * as import7 from '@angular/core/src/linker/component_factory';
import * as import8 from '@angular/router/src/router';
import * as import9 from '@angular/router/src/router_state';
import * as import10 from '../../../app/services/auth.service';
import * as import11 from '../../../app/services/facebook.service';
import * as import12 from '@angular/forms/src/form_builder';
export class Wrapper_LandingComponent {
  /*private*/ _eventHandler:Function;
  context:import0.LandingComponent;
  /*private*/ _changed:boolean;
  constructor(p0:any,p1:any,p2:any,p3:any,p4:any) {
    this._changed = false;
    this.context = new import0.LandingComponent(p0,p1,p2,p3,p4);
  }
  ngOnDetach(view:import1.AppView<any>,componentView:import1.AppView<any>,el:any):void {
  }
  ngOnDestroy():void {
  }
  ngDoCheck(view:import1.AppView<any>,el:any,throwOnChange:boolean):boolean {
    var changed:any = this._changed;
    this._changed = false;
    if (!throwOnChange) { if ((view.numberOfChecks === 0)) { this.context.ngOnInit(); } }
    return changed;
  }
  checkHost(view:import1.AppView<any>,componentView:import1.AppView<any>,el:any,throwOnChange:boolean):void {
  }
  handleEvent(eventName:string,$event:any):boolean {
    var result:boolean = true;
    return result;
  }
  subscribe(view:import1.AppView<any>,_eventHandler:any):void {
    this._eventHandler = _eventHandler;
  }
}
var renderType_LandingComponent_Host:import2.RenderComponentType = import3.createRenderComponentType('',0,import4.ViewEncapsulation.None,([] as any[]),{});
class View_LandingComponent_Host0 extends import1.AppView<any> {
  _el_0:any;
  compView_0:import1.AppView<import0.LandingComponent>;
  _LandingComponent_0_3:Wrapper_LandingComponent;
  constructor(viewUtils:import3.ViewUtils,parentView:import1.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_LandingComponent_Host0,renderType_LandingComponent_Host,import5.ViewType.HOST,viewUtils,parentView,parentIndex,parentElement,import6.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import7.ComponentRef<any> {
    this._el_0 = import3.selectOrCreateRenderHostElement(this.renderer,'gr-landing',import3.EMPTY_INLINE_ARRAY,rootSelector,(null as any));
    this.compView_0 = new View_LandingComponent0(this.viewUtils,this,0,this._el_0);
    this._LandingComponent_0_3 = new Wrapper_LandingComponent(this.injectorGet(import8.Router,this.parentIndex),this.injectorGet(import9.ActivatedRoute,this.parentIndex),this.injectorGet(import10.AuthService,this.parentIndex),this.injectorGet(import11.FacebookService,this.parentIndex),this.injectorGet(import12.FormBuilder,this.parentIndex));
    this.compView_0.create(this._LandingComponent_0_3.context);
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [this._el_0]),(null as any));
    return new import7.ComponentRef_<any>(0,this,this._el_0,this._LandingComponent_0_3.context);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import0.LandingComponent) && (0 === requestNodeIndex))) { return this._LandingComponent_0_3.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this._LandingComponent_0_3.ngDoCheck(this,this._el_0,throwOnChange);
    this.compView_0.internalDetectChanges(throwOnChange);
  }
  destroyInternal():void {
    this.compView_0.destroy();
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
}
export const LandingComponentNgFactory:import7.ComponentFactory<import0.LandingComponent> = new import7.ComponentFactory<import0.LandingComponent>('gr-landing',View_LandingComponent_Host0,import0.LandingComponent);
const styles_LandingComponent:any[] = ([] as any[]);
var renderType_LandingComponent:import2.RenderComponentType = import3.createRenderComponentType('',0,import4.ViewEncapsulation.None,styles_LandingComponent,{});
export class View_LandingComponent0 extends import1.AppView<import0.LandingComponent> {
  constructor(viewUtils:import3.ViewUtils,parentView:import1.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_LandingComponent0,renderType_LandingComponent,import5.ViewType.COMPONENT,viewUtils,parentView,parentIndex,parentElement,import6.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import7.ComponentRef<any> {
    const parentRenderNode:any = this.renderer.createViewRoot(this.parentElement);
    this.init((null as any),((<any>this.renderer).directRenderer? (null as any): ([] as any[])),(null as any));
    return (null as any);
  }
}