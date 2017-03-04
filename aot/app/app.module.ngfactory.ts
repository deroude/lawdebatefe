/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
 /* tslint:disable */

import * as import0 from '@angular/core/src/linker/ng_module_factory';
import * as import1 from '../../app/app.module';
import * as import2 from '@angular/common/src/common_module';
import * as import3 from '@angular/core/src/application_module';
import * as import4 from '@angular/platform-browser/src/browser';
import * as import5 from '@angular/http/src/http_module';
import * as import6 from '@angular/router/src/router_module';
import * as import7 from '../../app/app-routing.module';
import * as import8 from '@angular/forms/src/directives';
import * as import9 from '@angular/forms/src/form_providers';
import * as import10 from '@angular/common/src/localization';
import * as import11 from '@angular/core/src/application_init';
import * as import12 from '@angular/core/src/testability/testability';
import * as import13 from '@angular/core/src/application_ref';
import * as import14 from '@angular/core/src/linker/compiler';
import * as import15 from '@angular/platform-browser/src/dom/events/hammer_gestures';
import * as import16 from '@angular/platform-browser/src/dom/events/event_manager';
import * as import17 from '@angular/platform-browser/src/dom/shared_styles_host';
import * as import18 from '@angular/platform-browser/src/dom/dom_renderer';
import * as import19 from '@angular/platform-browser/src/security/dom_sanitization_service';
import * as import20 from '@angular/core/src/animation/animation_queue';
import * as import21 from '@angular/core/src/linker/view_utils';
import * as import22 from '@angular/platform-browser/src/browser/title';
import * as import23 from '@angular/http/src/backends/browser_xhr';
import * as import24 from '@angular/http/src/base_response_options';
import * as import25 from '@angular/http/src/backends/xhr_backend';
import * as import26 from '@angular/http/src/base_request_options';
import * as import27 from '@angular/common/src/location/location';
import * as import28 from '@angular/router/src/url_tree';
import * as import29 from '@angular/router/src/router_outlet_map';
import * as import30 from '@angular/core/src/linker/system_js_ng_module_factory_loader';
import * as import31 from '@angular/router/src/router_preloader';
import * as import32 from '@angular/forms/src/directives/radio_control_value_accessor';
import * as import33 from '@angular/forms/src/form_builder';
import * as import34 from '../../app/services/auth.service';
import * as import35 from '../../app/services/facebook.service';
import * as import36 from '@angular/core/src/di/injector';
import * as import37 from './components/landing.component.ngfactory';
import * as import38 from './components/not_found.component.ngfactory';
import * as import39 from './app.component.ngfactory';
import * as import40 from '@angular/core/src/i18n/tokens';
import * as import41 from '@angular/core/src/application_tokens';
import * as import42 from '@angular/platform-browser/src/dom/events/dom_events';
import * as import43 from '@angular/platform-browser/src/dom/events/key_events';
import * as import44 from '@angular/core/src/zone/ng_zone';
import * as import45 from '@angular/platform-browser/src/dom/debug/ng_probe';
import * as import46 from '@angular/common/src/location/platform_location';
import * as import47 from '@angular/common/src/location/location_strategy';
import * as import48 from '../../app/components/landing.component';
import * as import49 from '../../app/components/not_found.component';
import * as import50 from '@angular/router/src/url_handling_strategy';
import * as import51 from '@angular/router/src/route_reuse_strategy';
import * as import52 from '@angular/router/src/router';
import * as import53 from '@angular/core/src/console';
import * as import54 from '@angular/core/src/error_handler';
import * as import55 from '@angular/platform-browser/src/dom/dom_tokens';
import * as import56 from '@angular/platform-browser/src/dom/animation_driver';
import * as import57 from '@angular/core/src/render/api';
import * as import58 from '@angular/core/src/security';
import * as import59 from '@angular/core/src/change_detection/differs/iterable_differs';
import * as import60 from '@angular/core/src/change_detection/differs/keyvalue_differs';
import * as import61 from '@angular/http/src/interfaces';
import * as import62 from '@angular/http/src/http';
import * as import63 from '@angular/core/src/linker/ng_module_factory_loader';
import * as import64 from '@angular/router/src/router_config_loader';
import * as import65 from '@angular/router/src/router_state';
class AppModuleInjector extends import0.NgModuleInjector<import1.AppModule> {
  _CommonModule_0:import2.CommonModule;
  _ApplicationModule_1:import3.ApplicationModule;
  _BrowserModule_2:import4.BrowserModule;
  _HttpModule_3:import5.HttpModule;
  _ROUTER_FORROOT_GUARD_4:any;
  _RouterModule_5:import6.RouterModule;
  _AppRoutingModule_6:import7.AppRoutingModule;
  _InternalFormsSharedModule_7:import8.InternalFormsSharedModule;
  _FormsModule_8:import9.FormsModule;
  _ReactiveFormsModule_9:import9.ReactiveFormsModule;
  _AppModule_10:import1.AppModule;
  __LOCALE_ID_11:any;
  __NgLocalization_12:import10.NgLocaleLocalization;
  _ErrorHandler_13:any;
  _ApplicationInitStatus_14:import11.ApplicationInitStatus;
  _Testability_15:import12.Testability;
  _ApplicationRef__16:import13.ApplicationRef_;
  __ApplicationRef_17:any;
  __Compiler_18:import14.Compiler;
  __APP_ID_19:any;
  __DOCUMENT_20:any;
  __HAMMER_GESTURE_CONFIG_21:import15.HammerGestureConfig;
  __EVENT_MANAGER_PLUGINS_22:any[];
  __EventManager_23:import16.EventManager;
  _DomSharedStylesHost_24:import17.DomSharedStylesHost;
  __AnimationDriver_25:any;
  __DomRootRenderer_26:import18.DomRootRenderer_;
  __NgProbeToken_27:any[];
  __RootRenderer_28:any;
  __DomSanitizer_29:import19.DomSanitizerImpl;
  __Sanitizer_30:any;
  __AnimationQueue_31:import20.AnimationQueue;
  __ViewUtils_32:import21.ViewUtils;
  __IterableDiffers_33:any;
  __KeyValueDiffers_34:any;
  __SharedStylesHost_35:any;
  __Title_36:import22.Title;
  __BrowserXhr_37:import23.BrowserXhr;
  __ResponseOptions_38:import24.BaseResponseOptions;
  __XSRFStrategy_39:any;
  __XHRBackend_40:import25.XHRBackend;
  __RequestOptions_41:import26.BaseRequestOptions;
  __Http_42:any;
  __ROUTER_CONFIGURATION_43:any;
  __LocationStrategy_44:any;
  __Location_45:import27.Location;
  __UrlSerializer_46:import28.DefaultUrlSerializer;
  __RouterOutletMap_47:import29.RouterOutletMap;
  __NgModuleFactoryLoader_48:import30.SystemJsNgModuleLoader;
  __ROUTES_49:any[];
  __Router_50:any;
  __ActivatedRoute_51:any;
  _NoPreloading_52:import31.NoPreloading;
  _PreloadingStrategy_53:any;
  _RouterPreloader_54:import31.RouterPreloader;
  __PreloadAllModules_55:import31.PreloadAllModules;
  __ROUTER_INITIALIZER_56:any;
  __APP_BOOTSTRAP_LISTENER_57:any[];
  __RadioControlRegistry_58:import32.RadioControlRegistry;
  __FormBuilder_59:import33.FormBuilder;
  __AuthService_60:import34.AuthService;
  __FacebookService_61:import35.FacebookService;
  constructor(parent:import36.Injector) {
    super(parent,[
      import37.LandingComponentNgFactory,
      import38.NotFoundComponentNgFactory,
      import39.AppComponentNgFactory
    ]
    ,[import39.AppComponentNgFactory]);
  }
  get _LOCALE_ID_11():any {
    if ((this.__LOCALE_ID_11 == null)) { (this.__LOCALE_ID_11 = import3._localeFactory(this.parent.get(import40.LOCALE_ID,(null as any)))); }
    return this.__LOCALE_ID_11;
  }
  get _NgLocalization_12():import10.NgLocaleLocalization {
    if ((this.__NgLocalization_12 == null)) { (this.__NgLocalization_12 = new import10.NgLocaleLocalization(this._LOCALE_ID_11)); }
    return this.__NgLocalization_12;
  }
  get _ApplicationRef_17():any {
    if ((this.__ApplicationRef_17 == null)) { (this.__ApplicationRef_17 = this._ApplicationRef__16); }
    return this.__ApplicationRef_17;
  }
  get _Compiler_18():import14.Compiler {
    if ((this.__Compiler_18 == null)) { (this.__Compiler_18 = new import14.Compiler()); }
    return this.__Compiler_18;
  }
  get _APP_ID_19():any {
    if ((this.__APP_ID_19 == null)) { (this.__APP_ID_19 = import41._appIdRandomProviderFactory()); }
    return this.__APP_ID_19;
  }
  get _DOCUMENT_20():any {
    if ((this.__DOCUMENT_20 == null)) { (this.__DOCUMENT_20 = import4._document()); }
    return this.__DOCUMENT_20;
  }
  get _HAMMER_GESTURE_CONFIG_21():import15.HammerGestureConfig {
    if ((this.__HAMMER_GESTURE_CONFIG_21 == null)) { (this.__HAMMER_GESTURE_CONFIG_21 = new import15.HammerGestureConfig()); }
    return this.__HAMMER_GESTURE_CONFIG_21;
  }
  get _EVENT_MANAGER_PLUGINS_22():any[] {
    if ((this.__EVENT_MANAGER_PLUGINS_22 == null)) { (this.__EVENT_MANAGER_PLUGINS_22 = [
      new import42.DomEventsPlugin(),
      new import43.KeyEventsPlugin(),
      new import15.HammerGesturesPlugin(this._HAMMER_GESTURE_CONFIG_21)
    ]
    ); }
    return this.__EVENT_MANAGER_PLUGINS_22;
  }
  get _EventManager_23():import16.EventManager {
    if ((this.__EventManager_23 == null)) { (this.__EventManager_23 = new import16.EventManager(this._EVENT_MANAGER_PLUGINS_22,this.parent.get(import44.NgZone))); }
    return this.__EventManager_23;
  }
  get _AnimationDriver_25():any {
    if ((this.__AnimationDriver_25 == null)) { (this.__AnimationDriver_25 = import4._resolveDefaultAnimationDriver()); }
    return this.__AnimationDriver_25;
  }
  get _DomRootRenderer_26():import18.DomRootRenderer_ {
    if ((this.__DomRootRenderer_26 == null)) { (this.__DomRootRenderer_26 = new import18.DomRootRenderer_(this._DOCUMENT_20,this._EventManager_23,this._DomSharedStylesHost_24,this._AnimationDriver_25,this._APP_ID_19)); }
    return this.__DomRootRenderer_26;
  }
  get _NgProbeToken_27():any[] {
    if ((this.__NgProbeToken_27 == null)) { (this.__NgProbeToken_27 = [import6.routerNgProbeToken()]); }
    return this.__NgProbeToken_27;
  }
  get _RootRenderer_28():any {
    if ((this.__RootRenderer_28 == null)) { (this.__RootRenderer_28 = import45._createConditionalRootRenderer(this._DomRootRenderer_26,this.parent.get(import45.NgProbeToken,(null as any)),this._NgProbeToken_27)); }
    return this.__RootRenderer_28;
  }
  get _DomSanitizer_29():import19.DomSanitizerImpl {
    if ((this.__DomSanitizer_29 == null)) { (this.__DomSanitizer_29 = new import19.DomSanitizerImpl()); }
    return this.__DomSanitizer_29;
  }
  get _Sanitizer_30():any {
    if ((this.__Sanitizer_30 == null)) { (this.__Sanitizer_30 = this._DomSanitizer_29); }
    return this.__Sanitizer_30;
  }
  get _AnimationQueue_31():import20.AnimationQueue {
    if ((this.__AnimationQueue_31 == null)) { (this.__AnimationQueue_31 = new import20.AnimationQueue(this.parent.get(import44.NgZone))); }
    return this.__AnimationQueue_31;
  }
  get _ViewUtils_32():import21.ViewUtils {
    if ((this.__ViewUtils_32 == null)) { (this.__ViewUtils_32 = new import21.ViewUtils(this._RootRenderer_28,this._Sanitizer_30,this._AnimationQueue_31)); }
    return this.__ViewUtils_32;
  }
  get _IterableDiffers_33():any {
    if ((this.__IterableDiffers_33 == null)) { (this.__IterableDiffers_33 = import3._iterableDiffersFactory()); }
    return this.__IterableDiffers_33;
  }
  get _KeyValueDiffers_34():any {
    if ((this.__KeyValueDiffers_34 == null)) { (this.__KeyValueDiffers_34 = import3._keyValueDiffersFactory()); }
    return this.__KeyValueDiffers_34;
  }
  get _SharedStylesHost_35():any {
    if ((this.__SharedStylesHost_35 == null)) { (this.__SharedStylesHost_35 = this._DomSharedStylesHost_24); }
    return this.__SharedStylesHost_35;
  }
  get _Title_36():import22.Title {
    if ((this.__Title_36 == null)) { (this.__Title_36 = new import22.Title()); }
    return this.__Title_36;
  }
  get _BrowserXhr_37():import23.BrowserXhr {
    if ((this.__BrowserXhr_37 == null)) { (this.__BrowserXhr_37 = new import23.BrowserXhr()); }
    return this.__BrowserXhr_37;
  }
  get _ResponseOptions_38():import24.BaseResponseOptions {
    if ((this.__ResponseOptions_38 == null)) { (this.__ResponseOptions_38 = new import24.BaseResponseOptions()); }
    return this.__ResponseOptions_38;
  }
  get _XSRFStrategy_39():any {
    if ((this.__XSRFStrategy_39 == null)) { (this.__XSRFStrategy_39 = import5._createDefaultCookieXSRFStrategy()); }
    return this.__XSRFStrategy_39;
  }
  get _XHRBackend_40():import25.XHRBackend {
    if ((this.__XHRBackend_40 == null)) { (this.__XHRBackend_40 = new import25.XHRBackend(this._BrowserXhr_37,this._ResponseOptions_38,this._XSRFStrategy_39)); }
    return this.__XHRBackend_40;
  }
  get _RequestOptions_41():import26.BaseRequestOptions {
    if ((this.__RequestOptions_41 == null)) { (this.__RequestOptions_41 = new import26.BaseRequestOptions()); }
    return this.__RequestOptions_41;
  }
  get _Http_42():any {
    if ((this.__Http_42 == null)) { (this.__Http_42 = import5.httpFactory(this._XHRBackend_40,this._RequestOptions_41)); }
    return this.__Http_42;
  }
  get _ROUTER_CONFIGURATION_43():any {
    if ((this.__ROUTER_CONFIGURATION_43 == null)) { (this.__ROUTER_CONFIGURATION_43 = {}); }
    return this.__ROUTER_CONFIGURATION_43;
  }
  get _LocationStrategy_44():any {
    if ((this.__LocationStrategy_44 == null)) { (this.__LocationStrategy_44 = import6.provideLocationStrategy(this.parent.get(import46.PlatformLocation),this.parent.get(import47.APP_BASE_HREF,(null as any)),this._ROUTER_CONFIGURATION_43)); }
    return this.__LocationStrategy_44;
  }
  get _Location_45():import27.Location {
    if ((this.__Location_45 == null)) { (this.__Location_45 = new import27.Location(this._LocationStrategy_44)); }
    return this.__Location_45;
  }
  get _UrlSerializer_46():import28.DefaultUrlSerializer {
    if ((this.__UrlSerializer_46 == null)) { (this.__UrlSerializer_46 = new import28.DefaultUrlSerializer()); }
    return this.__UrlSerializer_46;
  }
  get _RouterOutletMap_47():import29.RouterOutletMap {
    if ((this.__RouterOutletMap_47 == null)) { (this.__RouterOutletMap_47 = new import29.RouterOutletMap()); }
    return this.__RouterOutletMap_47;
  }
  get _NgModuleFactoryLoader_48():import30.SystemJsNgModuleLoader {
    if ((this.__NgModuleFactoryLoader_48 == null)) { (this.__NgModuleFactoryLoader_48 = new import30.SystemJsNgModuleLoader(this._Compiler_18,this.parent.get(import30.SystemJsNgModuleLoaderConfig,(null as any)))); }
    return this.__NgModuleFactoryLoader_48;
  }
  get _ROUTES_49():any[] {
      if ((this.__ROUTES_49 == null)) { (this.__ROUTES_49 = [[
        {
          path: '',
          redirectTo: '/landing',
          pathMatch: 'full'
        }
        ,
        {
          path: 'landing',
          component: import48.LandingComponent
        }
        ,
        {
          path: '**',
          component: import49.NotFoundComponent
        }

      ]
    ]); }
    return this.__ROUTES_49;
  }
  get _Router_50():any {
    if ((this.__Router_50 == null)) { (this.__Router_50 = import6.setupRouter(this._ApplicationRef_17,this._UrlSerializer_46,this._RouterOutletMap_47,this._Location_45,this,this._NgModuleFactoryLoader_48,this._Compiler_18,this._ROUTES_49,this._ROUTER_CONFIGURATION_43,this.parent.get(import50.UrlHandlingStrategy,(null as any)),this.parent.get(import51.RouteReuseStrategy,(null as any)))); }
    return this.__Router_50;
  }
  get _ActivatedRoute_51():any {
    if ((this.__ActivatedRoute_51 == null)) { (this.__ActivatedRoute_51 = import6.rootRoute(this._Router_50)); }
    return this.__ActivatedRoute_51;
  }
  get _PreloadAllModules_55():import31.PreloadAllModules {
    if ((this.__PreloadAllModules_55 == null)) { (this.__PreloadAllModules_55 = new import31.PreloadAllModules()); }
    return this.__PreloadAllModules_55;
  }
  get _ROUTER_INITIALIZER_56():any {
    if ((this.__ROUTER_INITIALIZER_56 == null)) { (this.__ROUTER_INITIALIZER_56 = import6.initialRouterNavigation(this._Router_50,this._ApplicationRef_17,this._RouterPreloader_54,this._ROUTER_CONFIGURATION_43)); }
    return this.__ROUTER_INITIALIZER_56;
  }
  get _APP_BOOTSTRAP_LISTENER_57():any[] {
    if ((this.__APP_BOOTSTRAP_LISTENER_57 == null)) { (this.__APP_BOOTSTRAP_LISTENER_57 = [this._ROUTER_INITIALIZER_56]); }
    return this.__APP_BOOTSTRAP_LISTENER_57;
  }
  get _RadioControlRegistry_58():import32.RadioControlRegistry {
    if ((this.__RadioControlRegistry_58 == null)) { (this.__RadioControlRegistry_58 = new import32.RadioControlRegistry()); }
    return this.__RadioControlRegistry_58;
  }
  get _FormBuilder_59():import33.FormBuilder {
    if ((this.__FormBuilder_59 == null)) { (this.__FormBuilder_59 = new import33.FormBuilder()); }
    return this.__FormBuilder_59;
  }
  get _AuthService_60():import34.AuthService {
    if ((this.__AuthService_60 == null)) { (this.__AuthService_60 = new import34.AuthService()); }
    return this.__AuthService_60;
  }
  get _FacebookService_61():import35.FacebookService {
    if ((this.__FacebookService_61 == null)) { (this.__FacebookService_61 = new import35.FacebookService()); }
    return this.__FacebookService_61;
  }
  createInternal():import1.AppModule {
    this._CommonModule_0 = new import2.CommonModule();
    this._ApplicationModule_1 = new import3.ApplicationModule();
    this._BrowserModule_2 = new import4.BrowserModule(this.parent.get(import4.BrowserModule,(null as any)));
    this._HttpModule_3 = new import5.HttpModule();
    this._ROUTER_FORROOT_GUARD_4 = import6.provideForRootGuard(this.parent.get(import52.Router,(null as any)));
    this._RouterModule_5 = new import6.RouterModule(this._ROUTER_FORROOT_GUARD_4);
    this._AppRoutingModule_6 = new import7.AppRoutingModule();
    this._InternalFormsSharedModule_7 = new import8.InternalFormsSharedModule();
    this._FormsModule_8 = new import9.FormsModule();
    this._ReactiveFormsModule_9 = new import9.ReactiveFormsModule();
    this._AppModule_10 = new import1.AppModule();
    this._ErrorHandler_13 = import4.errorHandler();
    this._ApplicationInitStatus_14 = new import11.ApplicationInitStatus(this.parent.get(import11.APP_INITIALIZER,(null as any)));
    this._Testability_15 = new import12.Testability(this.parent.get(import44.NgZone));
    this._ApplicationRef__16 = new import13.ApplicationRef_(this.parent.get(import44.NgZone),this.parent.get(import53.Console),this,this._ErrorHandler_13,this,this._ApplicationInitStatus_14,this.parent.get(import12.TestabilityRegistry,(null as any)),this._Testability_15);
    this._DomSharedStylesHost_24 = new import17.DomSharedStylesHost(this._DOCUMENT_20);
    this._NoPreloading_52 = new import31.NoPreloading();
    this._PreloadingStrategy_53 = this._NoPreloading_52;
    this._RouterPreloader_54 = new import31.RouterPreloader(this._Router_50,this._NgModuleFactoryLoader_48,this._Compiler_18,this,this._PreloadingStrategy_53);
    return this._AppModule_10;
  }
  getInternal(token:any,notFoundResult:any):any {
    if ((token === import2.CommonModule)) { return this._CommonModule_0; }
    if ((token === import3.ApplicationModule)) { return this._ApplicationModule_1; }
    if ((token === import4.BrowserModule)) { return this._BrowserModule_2; }
    if ((token === import5.HttpModule)) { return this._HttpModule_3; }
    if ((token === import6.ROUTER_FORROOT_GUARD)) { return this._ROUTER_FORROOT_GUARD_4; }
    if ((token === import6.RouterModule)) { return this._RouterModule_5; }
    if ((token === import7.AppRoutingModule)) { return this._AppRoutingModule_6; }
    if ((token === import8.InternalFormsSharedModule)) { return this._InternalFormsSharedModule_7; }
    if ((token === import9.FormsModule)) { return this._FormsModule_8; }
    if ((token === import9.ReactiveFormsModule)) { return this._ReactiveFormsModule_9; }
    if ((token === import1.AppModule)) { return this._AppModule_10; }
    if ((token === import40.LOCALE_ID)) { return this._LOCALE_ID_11; }
    if ((token === import10.NgLocalization)) { return this._NgLocalization_12; }
    if ((token === import54.ErrorHandler)) { return this._ErrorHandler_13; }
    if ((token === import11.ApplicationInitStatus)) { return this._ApplicationInitStatus_14; }
    if ((token === import12.Testability)) { return this._Testability_15; }
    if ((token === import13.ApplicationRef_)) { return this._ApplicationRef__16; }
    if ((token === import13.ApplicationRef)) { return this._ApplicationRef_17; }
    if ((token === import14.Compiler)) { return this._Compiler_18; }
    if ((token === import41.APP_ID)) { return this._APP_ID_19; }
    if ((token === import55.DOCUMENT)) { return this._DOCUMENT_20; }
    if ((token === import15.HAMMER_GESTURE_CONFIG)) { return this._HAMMER_GESTURE_CONFIG_21; }
    if ((token === import16.EVENT_MANAGER_PLUGINS)) { return this._EVENT_MANAGER_PLUGINS_22; }
    if ((token === import16.EventManager)) { return this._EventManager_23; }
    if ((token === import17.DomSharedStylesHost)) { return this._DomSharedStylesHost_24; }
    if ((token === import56.AnimationDriver)) { return this._AnimationDriver_25; }
    if ((token === import18.DomRootRenderer)) { return this._DomRootRenderer_26; }
    if ((token === import13.NgProbeToken)) { return this._NgProbeToken_27; }
    if ((token === import57.RootRenderer)) { return this._RootRenderer_28; }
    if ((token === import19.DomSanitizer)) { return this._DomSanitizer_29; }
    if ((token === import58.Sanitizer)) { return this._Sanitizer_30; }
    if ((token === import20.AnimationQueue)) { return this._AnimationQueue_31; }
    if ((token === import21.ViewUtils)) { return this._ViewUtils_32; }
    if ((token === import59.IterableDiffers)) { return this._IterableDiffers_33; }
    if ((token === import60.KeyValueDiffers)) { return this._KeyValueDiffers_34; }
    if ((token === import17.SharedStylesHost)) { return this._SharedStylesHost_35; }
    if ((token === import22.Title)) { return this._Title_36; }
    if ((token === import23.BrowserXhr)) { return this._BrowserXhr_37; }
    if ((token === import24.ResponseOptions)) { return this._ResponseOptions_38; }
    if ((token === import61.XSRFStrategy)) { return this._XSRFStrategy_39; }
    if ((token === import25.XHRBackend)) { return this._XHRBackend_40; }
    if ((token === import26.RequestOptions)) { return this._RequestOptions_41; }
    if ((token === import62.Http)) { return this._Http_42; }
    if ((token === import6.ROUTER_CONFIGURATION)) { return this._ROUTER_CONFIGURATION_43; }
    if ((token === import47.LocationStrategy)) { return this._LocationStrategy_44; }
    if ((token === import27.Location)) { return this._Location_45; }
    if ((token === import28.UrlSerializer)) { return this._UrlSerializer_46; }
    if ((token === import29.RouterOutletMap)) { return this._RouterOutletMap_47; }
    if ((token === import63.NgModuleFactoryLoader)) { return this._NgModuleFactoryLoader_48; }
    if ((token === import64.ROUTES)) { return this._ROUTES_49; }
    if ((token === import52.Router)) { return this._Router_50; }
    if ((token === import65.ActivatedRoute)) { return this._ActivatedRoute_51; }
    if ((token === import31.NoPreloading)) { return this._NoPreloading_52; }
    if ((token === import31.PreloadingStrategy)) { return this._PreloadingStrategy_53; }
    if ((token === import31.RouterPreloader)) { return this._RouterPreloader_54; }
    if ((token === import31.PreloadAllModules)) { return this._PreloadAllModules_55; }
    if ((token === import6.ROUTER_INITIALIZER)) { return this._ROUTER_INITIALIZER_56; }
    if ((token === import41.APP_BOOTSTRAP_LISTENER)) { return this._APP_BOOTSTRAP_LISTENER_57; }
    if ((token === import32.RadioControlRegistry)) { return this._RadioControlRegistry_58; }
    if ((token === import33.FormBuilder)) { return this._FormBuilder_59; }
    if ((token === import34.AuthService)) { return this._AuthService_60; }
    if ((token === import35.FacebookService)) { return this._FacebookService_61; }
    return notFoundResult;
  }
  destroyInternal():void {
    this._ApplicationRef__16.ngOnDestroy();
    this._DomSharedStylesHost_24.ngOnDestroy();
    this._RouterPreloader_54.ngOnDestroy();
  }
}
export const AppModuleNgFactory:import0.NgModuleFactory<import1.AppModule> = new import0.NgModuleFactory(AppModuleInjector,import1.AppModule);