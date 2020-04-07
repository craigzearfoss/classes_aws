define("modules/clean/payments/cash",["require","exports","modules/core/i18n"],(function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=(function(){function t(){}return t.set_locale_number_format=function(e,r){void 0===e&&(e=","),void 0===r&&(r="."),t.groupSymbol=e,t.decimalSymbol=r},t.set_currency_format_map=function(e){t.currencyFormatMap=e},t.update_currency_format_map=function(e,r){t.currencyFormatMap[e]=r},t.normalizeSymbols=function(e){return e.replace(t.groupSymbol,"").replace(t.decimalSymbol,".")},t.roundCurrency=function(e,r,o){return void 0===r&&(r="USD"),void 0===o&&(o=2),o=e%1==0?0:o,t.formatCurrency(e,r,o)},t.formatCurrency=function(e,r,o){void 0===r&&(r="USD"),void 0===o&&(o=2);var n=parseFloat(e);"JPY"===r&&(o=0);var a=t.formatNumber(n,o);return t.currencyFormatMap[r]?t.currencyFormatMap[r].replace("%v",a):a+" "+r},t.splitFormatCurrency=function(e,r,o){void 0===r&&(r="USD"),void 0===o&&(o=2);var n=t.formatCurrency(e,r,o),a=n.indexOf(t.decimalSymbol);return-1===a?[n,""]:[n.slice(0,a+1),n.slice(a+1)]},t.formatNumber=function(t,e){return void 0===e&&(e=2),r.format_number(t,e)},t.removeCurrency=function(e,r){var o=t.currencyFormatMap[r].replace("%v","");return e.replace(o,"").replace(t.groupSymbol,"")},t.groupSymbol=",",t.decimalSymbol=".",t.currencyFormatMap={USD:"$%v"},t})();e.CashUtil=o;var n=function(t,e){this.cash1=t,this.cash2=e};e.CashCurrenciesDoNotMatch=n;var a=function(){};e.CashNeedsAmountAndCurrency=a;var u=(function(){function t(t,e){this.currency=e;var r=parseFloat(""+t);if(isNaN(r)||!this.currency)throw new a;var o=Math.pow(10,2);this.amount=Math.round(r*o)/o}return t.fromObject=function(e){return new t(parseFloat(e.amount),e.currency)},t.prototype.toObject=function(){return{amount:this.amount.toString(),currency:this.currency}},t.fromString=function(e,r){var n=o.removeCurrency(e,r);return new t(o.normalizeSymbols(n),r)},t.prototype.add=function(e){if(this.currency!==e.currency)throw new n(this,e);return new t(this.amount+e.amount,this.currency)},t.prototype.subtract=function(e){return this.add(new t(-e.amount,e.currency))},t.prototype.multiply=function(e){return new t(this.amount*e,this.currency)},t.prototype.divide=function(e){return 0===this.amount&&0===e?new t(0,this.currency):new t(this.amount/e,this.currency)},t.prototype.round=function(e){void 0===e&&(e=2);var r=Math.pow(10,e);return new t(Math.round(this.amount*r)/r,this.currency)},t.prototype.isEqual=function(t){if(this.currency!==t.currency)throw new n(this,t);return this.amount===t.amount},t.prototype.toString=function(t){return void 0===t&&(t=2),"JPY"===this.currency&&(t=0),o.roundCurrency(this.amount,this.currency,t)},t.prototype.formatCurrency=function(t,e){return void 0===t&&(t=2),void 0===e&&(e=!1),o.formatCurrency(e?this.amount/12:this.amount,this.currency,t)},t.format=function(t){return t?t.formatCurrency():""},t.formatWithTaxLabels=function(t,e,o){return void 0===o&&(o=!1),t&&e?e.doesTaxApply&&e.tax.amount>0?r._("%(price)s (taxes included)").format({price:t.formatCurrency(void 0,o)}):t.formatCurrency(void 0,o):""},t.formatWithTaxForRefund=function(e,o,n,a){if(void 0===a&&(a=0),!e||!o)return"";var u=t.fromString(e,o);return n?r._("%(price)s, excluding taxes").format({price:u.formatCurrency(a)}):u.formatCurrency(a)},t})();e.Cash=u})),define("modules/clean/payments/skus/constants",["require","exports","modules/core/i18n","modules/constants/trademark"],(function(t,e,r,o){"use strict";var n,a,u,i,_;Object.defineProperty(e,"__esModule",{value:!0}),(function(t){t[t.MONTHLY=1]="MONTHLY",t[t.YEARLY=2]="YEARLY",t[t.TWO_YEARS=21]="TWO_YEARS",t[t.THREE_YEARS=22]="THREE_YEARS",t[t.FIVE_YEARS=23]="FIVE_YEARS",t[t.TRIAL=1e5]="TRIAL",t[t.TRIAL_15_DAYS=11]="TRIAL_15_DAYS",t[t.YEARLY_WITH_MONTHLY_BILLING=24]="YEARLY_WITH_MONTHLY_BILLING"})(n=e.ScheduleId||(e.ScheduleId={})),e.TRIAL_LENGTH_DEFAULT=30,(function(t){t[t.NONE=""]="NONE",t[t.MONTHLY="1M"]="MONTHLY",t[t.YEARLY="1Y"]="YEARLY",t[t.TWO_YEARS="2Y"]="TWO_YEARS",t[t.THREE_YEARS="3Y"]="THREE_YEARS",t[t.FIVE_YEARS="5Y"]="FIVE_YEARS",t[t.TRIAL="U"]="TRIAL",t[t.TRIAL_15_DAYS="NR15D"]="TRIAL_15_DAYS",t[t.YEARLY_WITH_MONTHLY_BILLING="AC1M"]="YEARLY_WITH_MONTHLY_BILLING",t[t.NR_THREE_MONTHS="NR3M"]="NR_THREE_MONTHS",t[t.NR_ONE_YEAR="NR1Y"]="NR_ONE_YEAR",t[t.NR_15_MONTHS="NR15M"]="NR_15_MONTHS",t[t.NR_18_MONTHS="NR18M"]="NR_18_MONTHS",t[t.NR_21_MONTHS="NR21M"]="NR_21_MONTHS",t[t.NR_24_MONTHS="NR24M"]="NR_24_MONTHS",t[t.NR_36_MONTHS="NR36M"]="NR_36_MONTHS",t[t.NR_48_MONTHS="NR48M"]="NR_48_MONTHS",t[t.NR_60_MONTHS="NR60M"]="NR_60_MONTHS",t[t.UNLIMITED="U"]="UNLIMITED"})(a=e.ProductSchedule||(e.ProductSchedule={})),e.productScheduleToProductScheduleDescription=function(t){switch(t){case a.YEARLY:return r._("yearly");case a.TWO_YEARS:return r._("2 year plan");case a.THREE_YEARS:return r._("3 year plan");case a.FIVE_YEARS:return r._("5 year plan");case a.TRIAL:return r._("trial");case a.TRIAL_15_DAYS:return r._("15 days trial");case a.YEARLY_WITH_MONTHLY_BILLING:return r._("yearly with monthly billing");default:return r._("monthly")}},e.scheduleIdToBillingScheduleDescription=function(t){switch(t){case n.YEARLY:return r._("Yearly billing");case n.TWO_YEARS:return r._("Every two years");case n.THREE_YEARS:return r._("Every three years");case n.FIVE_YEARS:return r._("Every five years");case n.TRIAL:return r._("30-Day Trial");case n.TRIAL_15_DAYS:return r._("15-Day Trial");case n.YEARLY_WITH_MONTHLY_BILLING:return r._("Yearly with monthly billing");default:return r._("Monthly billing")}},e.scheduleIdToProductSchedule=function(t){switch(t){case n.MONTHLY:return a.MONTHLY;case n.YEARLY:return a.YEARLY;case n.TWO_YEARS:return a.TWO_YEARS;case n.THREE_YEARS:return a.THREE_YEARS;case n.FIVE_YEARS:return a.FIVE_YEARS;case n.TRIAL:return a.TRIAL;case n.TRIAL_15_DAYS:return a.TRIAL_15_DAYS;case n.YEARLY_WITH_MONTHLY_BILLING:return a.YEARLY_WITH_MONTHLY_BILLING}throw"Invalid schedule ID"},e.productPlanTypeToBusinessDisplayName=function(t,e){if(e===u.ENTERPRISE)return r._("Enterprise");switch(t){case i.STANDARD:return r._("Prior %(trademark_business)s").format({trademark_business:o.TRADEMARK_BUSINESS});case i.TRIAL:return r._("Prior %(trademark_business)s trial").format({trademark_business:o.TRADEMARK_BUSINESS});case i.NEW_STANDARD:return r._("Standard");case i.STANDARD_TRIAL:return r._("Standard trial");case i.ADVANCED:return r._("Advanced");case i.ADVANCED_TRIAL:return r._("Advanced trial");case i.SERVER:return r._("Advanced Server Integration");case i.SERVER_TRIAL:return r._("Advanced Server Integration trial");default:return r._("Current Plan")}},e.productPlanTypeToIndividualDisplayName=function(t,e){switch(t){case i.FREE:case i.STANDARD:return r._("%(trademark_plus)s").format({trademark_plus:o.TRADEMARK_PLUS});case i.TRIAL:return r._("%(trademark_plus)s trial%(ios)s").format({trademark_plus:o.TRADEMARK_PLUS,ios:e?" "+r._("(iOS)"):""});case i.STANDARD_TRIAL:return r._("Standard trial%(ios)s").format({ios:e?" "+r._("(iOS)"):""});case i.PLUS:return r._("%(trademark_plus)s").format({trademark_plus:o.TRADEMARK_PLUS});case i.PLUS_TRIAL:return r._("%(trademark_plus)s Trial%(ios)s").format({trademark_plus:o.TRADEMARK_PLUS,ios:e?" "+r._("(iOS)"):""});case i.PROFESSIONAL:return r._("Professional");case i.PROFESSIONAL_TRIAL:return r._("Professional Trial%(ios)s").format({ios:e?" "+r._("(iOS)"):""});case i.FAMILY_PAYER:case i.FAMILY_NONPAYER:return r._("%(trademark_family)s").format({trademark_family:o.TRADEMARK_FAMILY});default:return r._("Current Plan")}},(function(t){t[t.PRO=1]="PRO",t[t.TEAM=2]="TEAM",t[t.ENTERPRISE=3]="ENTERPRISE",t[t.EDUCATION=4]="EDUCATION",t[t.FAMILY=6]="FAMILY"})(u=e.ProductFamily||(e.ProductFamily={})),(function(t){t[t.PLAN=1]="PLAN",t[t.ADDON=2]="ADDON",t[t.LICENSE=3]="LICENSE",t[t.SERVICE=4]="SERVICE"})(e.ProductClass||(e.ProductClass={})),(function(t){t[t.FREE=1]="FREE",t[t.TRIAL=2]="TRIAL",t[t.MOBILE=3]="MOBILE",t[t.BASIC_PLUS=4]="BASIC_PLUS",t[t.STANDARD=5]="STANDARD",t[t.PREMIUM=6]="PREMIUM",t[t.LEGACY=7]="LEGACY",t[t.BASIC=8]="BASIC",t[t.NEW_STANDARD=9]="NEW_STANDARD",t[t.ADVANCED=10]="ADVANCED",t[t.STANDARD_TRIAL=11]="STANDARD_TRIAL",t[t.ADVANCED_TRIAL=12]="ADVANCED_TRIAL",t[t.STARTER=13]="STARTER",t[t.SERVER=14]="SERVER",t[t.SERVER_TRIAL=15]="SERVER_TRIAL",t[t.PLUS=16]="PLUS",t[t.PLUS_TRIAL=17]="PLUS_TRIAL",t[t.PROFESSIONAL=18]="PROFESSIONAL",t[t.PROFESSIONAL_TRIAL=19]="PROFESSIONAL_TRIAL",t[t.PLUS_WITH_SS=20]="PLUS_WITH_SS",t[t.PLUS_WITH_SS_TRIAL=21]="PLUS_WITH_SS_TRIAL",t[t.ENTERPRISE=22]="ENTERPRISE",t[t.FAMILY_PAYER=23]="FAMILY_PAYER",t[t.FAMILY_NONPAYER=24]="FAMILY_NONPAYER"})(i=e.ProductPlanType||(e.ProductPlanType={})),(function(t){t[t.LICENSE=101]="LICENSE",t[t.EVH=102]="EVH",t[t.EVH_FREE=103]="EVH_FREE",t[t.QUOTA=104]="QUOTA",t[t.CAPTURE=105]="CAPTURE",t[t.SUPPORT=106]="SUPPORT",t[t.EVH_FREE_THREE_MONTHS=107]="EVH_FREE_THREE_MONTHS",t[t.INFINITE=108]="INFINITE",t[t.PREMIUM_SHARING=109]="PREMIUM_SHARING",t[t.TEAM_FOLDERS=110]="TEAM_FOLDERS",t[t.GROUPS_STANDARD=111]="GROUPS_STANDARD",t[t.GROUPS_ADVANCED=112]="GROUPS_ADVANCED",t[t.GROUPS_ENTERPRISE=113]="GROUPS_ENTERPRISE"})(e.ProductAddonType||(e.ProductAddonType={})),(function(t){t[t.UNLIMITED_FREE_VERSION_HISTORY=1]="UNLIMITED_FREE_VERSION_HISTORY",t[t.UNLIMITED_MONTHLY_VERSION_HISTORY=2]="UNLIMITED_MONTHLY_VERSION_HISTORY",t[t.UNLIMITED_YEARLY_VERSION_HISTORY=3]="UNLIMITED_YEARLY_VERSION_HISTORY",t[t.UNLIMITED_PAID_VERSION_HISTORY=4]="UNLIMITED_PAID_VERSION_HISTORY",t[t.ONE_YEAR_PAID_VERSION_HISTORY=5]="ONE_YEAR_PAID_VERSION_HISTORY",t[t.ONE_YEAR_FREE_VERSION_HISTORY=6]="ONE_YEAR_FREE_VERSION_HISTORY",t[t.FREE_120_DAYS_VERSION_HISTORY=7]="FREE_120_DAYS_VERSION_HISTORY"})(e.AdminCxId||(e.AdminCxId={})),(function(t){t[t.SPACE_PACK_100G="100G"]="SPACE_PACK_100G",t[t.SPACE_PACK_1T="1T"]="SPACE_PACK_1T",t[t.SPACE_PACK_10T="10T"]="SPACE_PACK_10T",t[t.SPACE_PACK_50T="50T"]="SPACE_PACK_50T",t[t.SPACE_PACK_200T="200T"]="SPACE_PACK_200T",t[t.SPACE_PACK_500T="500T"]="SPACE_PACK_500T",t[t.SPACE_PACK_1000T="1000T"]="SPACE_PACK_1000T",t[t.SPACE_PACK_5000T="5000T"]="SPACE_PACK_5000T",t[t.LICENSE=""]="LICENSE",t[t.LICENSE_PACK_3="3L"]="LICENSE_PACK_3",t[t.LICENSE_PACK_3_2T="3L2T"]="LICENSE_PACK_3_2T"})(e.ProductSpec||(e.ProductSpec={})),(function(t){t[t.EVH=1]="EVH",t[t.EVH_FREE=2]="EVH_FREE",t[t.QUOTA=3]="QUOTA",t[t.LICENSE=4]="LICENSE",t[t.SUPPORT=5]="SUPPORT",t[t.CAPTURE=6]="CAPTURE",t[t.INFINITE=7]="INFINITE",t[t.PREMIUM_SHARING=8]="PREMIUM_SHARING",t[t.TEAM_FOLDERS=9]="TEAM_FOLDERS",t[t.GROUPS=10]="GROUPS",t[t.QUOTA_FREE=11]="QUOTA_FREE"})(e.OfferKind||(e.OfferKind={})),(function(t){t[t.TRIAL_CONVERT=1]="TRIAL_CONVERT"})(e.TransitionKind||(e.TransitionKind={})),(function(t){t[t.DEFAULT=0]="DEFAULT",t[t.STANDARD=1]="STANDARD",t[t.ADVANCED=2]="ADVANCED"})(_=e.OrionMigrationChoice||(e.OrionMigrationChoice={})),e.orionMigrationChoiceToProductPlanType=function(t){switch(t){case _.STANDARD:return i.NEW_STANDARD;case _.ADVANCED:return i.ADVANCED;default:return i.LEGACY}},e.OrionMigrationUrl="/team/migration",(function(t){t[t.VACUUMING_DEFAULT=30]="VACUUMING_DEFAULT",t[t.VACUUMING_120_EVH=120]="VACUUMING_120_EVH",t[t.VACUUMING_180_EVH=180]="VACUUMING_180_EVH",t[t.VACUUMING_366_EVH=366]="VACUUMING_366_EVH",t[t.VACUUMING_3653_EVH=3653]="VACUUMING_3653_EVH",t[t.VACUUMING_UNLIMITED=0]="VACUUMING_UNLIMITED"})(e.VacuumingPolicyMaxDays||(e.VacuumingPolicyMaxDays={}))})),define("modules/clean/payments/skus/sku_content",["require","exports","modules/clean/payments/skus/constants","modules/constants/trademark","modules/core/exception","modules/core/i18n"],(function(t,e,r,o,n,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.formatSpaceShortFormGb=function(t){return a._("%(space_quota)s GB").format({space_quota:a.format_number(t)})};var u=(function(){function t(t){this.quotaGb=t}return t.prototype.spaceShortFormGb=function(){return a._("%(quota_gb)s GB").format({quota_gb:a.format_number(this.quotaGb)})},t.prototype.spaceShortFormGbRounded=function(){var t=1e3*Math.floor(this.quotaGb/1e3);return 0===t&&this.quotaGb>0?this.spaceShortFormGb():a._("%(rounded_gb)s GB").format({rounded_gb:a.format_number(t)})},t.prototype.spaceShortFormTb=function(){var t=this.quotaGb/1024;return a._("%(quota_tb)s TB").format({quota_tb:a.format_number(t)})},t.prototype.spaceLongForm=function(){var t=this.quotaGb/1024;return t<1?this.spaceShortFormGb():a._("%(quota_tb)s TB (%(quota_gb)s GB)").format({quota_tb:a.format_number(t),quota_gb:a.format_number(this.quotaGb)})},t.prototype.spaceLongFormRounded=function(){var t=1e3*Math.floor(this.quotaGb/1e3),e=this.quotaGb/1024;return e<1?this.spaceShortFormGb():a._("%(quota_tb)s TB (%(rounded_gb)s GB)").format({quota_tb:a.format_number(e),rounded_gb:a.format_number(t)})},t})();e.QuotaFormatter=u;var i=(function(){function t(){}return t.prototype.spaceShortFormGb=function(){return""},t.prototype.spaceShortFormGbRounded=function(){return""},t.prototype.spaceShortFormTb=function(){return""},t.prototype.spaceLongForm=function(){return""},t.prototype.spaceLongFormRounded=function(){return""},t})(),_=(function(){function t(t){this.didCheckForUnlimitedSpace=!1,this.serializedSubStateContent=t}return t.deserialize=function(e){return new t(e)},t.deserializeFromApiv2=function(e){return t.deserialize({hasUnlimitedSpace:e.has_unlimited_space,totalQuotaGb:e.total_quota_gb,vacuumingPolicyMaxDays:e.vacuuming_policy_max_days})},Object.defineProperty(t.prototype,"totalQuotaFormatter",{get:function(){return this.didCheckForUnlimitedSpace,this.serializedSubStateContent.hasUnlimitedSpace?new i:null==this.serializedSubStateContent.totalQuotaGb?(n.reportStack("Expected quotaGb but it's missing",{severity:n.SEVERITY.CRITICAL}),new i):(this._totalQuotaFormatter||(this._totalQuotaFormatter=new u(this.serializedSubStateContent.totalQuotaGb)),this._totalQuotaFormatter)},enumerable:!0,configurable:!0}),t.prototype.hasUnlimitedSpace=function(){return this.didCheckForUnlimitedSpace=!0,this.serializedSubStateContent.hasUnlimitedSpace},t.prototype.totalSpaceShortFormGb=function(){return this.totalQuotaFormatter.spaceShortFormGb()},t.prototype.totalSpaceShortFormGbRounded=function(){return this.totalQuotaFormatter.spaceShortFormGbRounded()},t.prototype.totalSpaceShortFormTb=function(){return this.totalQuotaFormatter.spaceShortFormTb()},t.prototype.totalSpaceLongForm=function(){return this.totalQuotaFormatter.spaceLongForm()},t.prototype.totalSpaceLongFormRounded=function(){return this.totalQuotaFormatter.spaceLongFormRounded()},t.prototype.vacuumingPolicyMaxDays=function(){return this.serializedSubStateContent.vacuumingPolicyMaxDays},t})();e.SubStateContentClient=_;var s=(function(){function t(t){this.didCheckForUnlimitedSpace=!1,this.serializedSkuContent=t}return Object.defineProperty(t.prototype,"quotaFormatter",{get:function(){return this.didCheckForUnlimitedSpace,this.serializedSkuContent.hasUnlimitedSpace?new i:null==this.serializedSkuContent.quotaGb?(n.reportStack("Expected quotaGb but it's missing",{severity:n.SEVERITY.CRITICAL}),new i):(this._quotaFormatter||(this._quotaFormatter=new u(this.serializedSkuContent.quotaGb)),this._quotaFormatter)},enumerable:!0,configurable:!0}),t.deserialize=function(e){return new t(e)},t.deserializeFromApiv2=function(e){var r=e.sku_schedule;return t.deserialize({displayBrandIsDropboxBusiness:e.display_brand_is_dropbox_business,hasUnlimitedSpace:e.has_unlimited_space,isTrial:e.is_trial,name:e.name,quotaGb:e.quota_gb,skuSchedule:r,trademarkNameHasDropbox:e.trademark_name_has_dropbox,vacuumingPolicyMaxDays:e.vacuuming_policy_max_days})},t.prototype.displayName=function(){return this.serializedSkuContent.name},t.prototype.dropboxDisplayName=function(){var t=this.serializedSkuContent.name;return this.serializedSkuContent.trademarkNameHasDropbox?t:this.serializedSkuContent.displayBrandIsDropboxBusiness?o.TRADEMARK_BUSINESS+" "+t:"Dropbox "+t},t.prototype.getNameWithTrial=function(t){return this.serializedSkuContent.isTrial?a._("%(plan_name)s trial",{comment:"'name' is a string representing a plan we sell, which we don't localize. It may include 'Dropbox' at the beginning. 'Dropbox Standard Plan' and 'Professional'"}).format({plan_name:t}):t},t.prototype.displayNameWithTrial=function(){return this.getNameWithTrial(this.displayName())},t.prototype.dropboxDisplayNameWithTrial=function(){return this.getNameWithTrial(this.dropboxDisplayName())},t.prototype.scheduleDisplayName=function(){switch(this.serializedSkuContent.skuSchedule){case r.ProductSchedule.NONE:return a._("No Schedule",{comment:"This string represents the fact that there is no billing schedule for a plan"});case r.ProductSchedule.MONTHLY:return a._("Monthly");case r.ProductSchedule.YEARLY:return a._("Yearly");case r.ProductSchedule.TWO_YEARS:return a._("2 Years");case r.ProductSchedule.THREE_YEARS:return a._("3 Years");case r.ProductSchedule.FIVE_YEARS:return a._("5 Years");case r.ProductSchedule.YEARLY_WITH_MONTHLY_BILLING:return a._("Monthly");case r.ProductSchedule.TRIAL:return a._("Trial");case r.ProductSchedule.TRIAL_15_DAYS:return a._("15 Day Trial");default:return a._("Custom Schedule",{comment:"This represents a customer's billing schedule that doesn't conform to one of our common ones"})}},t.prototype.hasUnlimitedSpace=function(){return this.didCheckForUnlimitedSpace=!0,this.serializedSkuContent.hasUnlimitedSpace},t.prototype.spaceShortFormGb=function(){return this.quotaFormatter.spaceShortFormGb()},t.prototype.spaceShortFormGbRounded=function(){return this.quotaFormatter.spaceShortFormGbRounded()},t.prototype.spaceShortFormTb=function(){return this.quotaFormatter.spaceShortFormTb()},t.prototype.spaceLongForm=function(){return this.quotaFormatter.spaceLongForm()},t.prototype.spaceLongFormRounded=function(){return this.quotaFormatter.spaceLongFormRounded()},t.prototype.vacuumingPolicyMaxDays=function(){return this.serializedSkuContent.vacuumingPolicyMaxDays},t})();e.SkuContentClient=s})),define("modules/clean/react/payments/common/adapters/setup_cash",["require","exports","modules/clean/payments/cash"],(function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.setupCash=function(t,e){if(t){var o=t.group_symbol,n=t.decimal_symbol;r.CashUtil.set_locale_number_format(o,n)}e&&r.CashUtil.set_currency_format_map(e)}})),define("modules/clean/account_page/widgets/billing/payment_method_constants",["require","exports"],(function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.NOT_APPLICABLE=-1,e.AUTHORIZE=0,e.PAYPAL=1,e.MANUAL=2,e.APPLE=3,e.BRAINTREE=4,e.GOOGLE_PLAY_SUBSCRIPTION=5,e.DROPBOX_DOLLARS=6,e.PAYPAL_REFERENCE_TRANSACTION=7,e.IOS_ONE_TIME_PAYMENT=8,e.RESELLER_LICENSE_KEY=9,e.SALES_USEROPS_MANUAL_CHARGE=10,e.NO_CHARGE_GATEWAY=11,e.ADYEN_SEPA_GATEWAY=12,e.EXTERNAL_BILLING=13,e.ADYEN_IDEAL_GATEWAY=14,e.IOS_RECURRING_PAYMENT=15,e.NO_PAYMENT_GATEWAY=16,e.BRAINTREE_AIB=17,e.MOCK_CHARGE_GATEWAY=1e4,e.MOCK_CC_GATEWAY=10001,e.MOCK_PENDING_GATEWAY=10002,e.IOS_SANDBOX_ONE_TIME_PAYMENT=1002,e.IOS_SANDBOX_RECURRING_PAYMENT=1003}));
//# sourceMappingURL=pkg-pricing.min.js-vflak9DWl.map